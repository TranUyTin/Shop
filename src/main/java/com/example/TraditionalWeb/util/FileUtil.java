package com.example.TraditionalWeb.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import com.example.TraditionalWeb.exception.FileTypeNotValidException;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnails;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 * This is a synchronized singleton class. one time just one instance has created.
 * This class used for upload and move file.
 */
@Slf4j
public class FileUtil {

    private static FileUtil INSTANCE = new FileUtil();

    private  String[]  validFileTypeStr = {"pdf","doc","docx", "jpg","jpeg","png"};

    private FileUtil(){}

    public static synchronized FileUtil getInstance(){
        if(Objects.isNull(INSTANCE)){
            INSTANCE = new FileUtil();
        }
        return INSTANCE;
    }


    /**
     * This function used for upload file
     *
     * @param files
     * @param fileUploadDir directory to save the file upload
     * @return map with key is the file name and value is the file path.
     * @throws IOException
     */
    public Map<String, String> upLoadFile(MultipartFile[] files, String fileUploadDir, String thumbnail) throws IOException{
        log.info("Start upload file");
        Map<String, String> fileMap = new HashMap<>();
        if(Objects.nonNull(files) && files.length > 0){
            for(MultipartFile file : files){
                boolean isValidFile = checkIsValidFile(file);
                if(isValidFile){
                    Path fileLocation = Paths.get(fileUploadDir).normalize();
                    if(!fileLocation.toFile().exists()){
                        Files.createDirectories(fileLocation);
                    }
                    String fileType = FilenameUtils.getExtension(file.getOriginalFilename());
                    Optional<String> validFileType = Optional.ofNullable(Arrays.stream(validFileTypeStr)
                            .filter((type) -> type.equalsIgnoreCase(fileType))
                            .findFirst()
                            .orElseThrow(() -> new FileTypeNotValidException(HttpStatus.BAD_REQUEST.value(),
                                    "Request is not valid")));
                    if(validFileType.isPresent()){
                        byte[] bytes    = file.getBytes();
                        String fileName = GenerateDateTime.strGenerateDateTime + file.getOriginalFilename();
                        String fileUrl  = fileLocation + "/" + fileName;
                        log.info("Upload file with url: {}", fileUrl);
                        Files.write(Paths.get(fileUrl), bytes);
                        log.info("Upload file success");
                        fileMap.put(fileName, fileUrl);

                        //process thumbnail images
                        if(StringUtils.hasText(thumbnail)){
                            if(fileType.equalsIgnoreCase("jpg") || fileType.equalsIgnoreCase("jpeg") || fileType.equalsIgnoreCase("png")){
                                String[] thumbnailArr = thumbnail.split(",");
                                for(String thumbnailStr : thumbnailArr){
                                    String[] thumbNailSizeArr = thumbnailStr.split(":");
                                    Thumbnails.of(new File(fileUrl))
                                            .size(Integer.parseInt(thumbNailSizeArr[0]), Integer.parseInt(thumbNailSizeArr[1]))
                                            .toFile(new File(fileUploadDir + "/" + thumbNailSizeArr[0] + "x" + thumbNailSizeArr[1] + "_"
                                                    + fileName));
                                }
                            }
                        }
                    }
                }
            }
        }
        return fileMap;
    }


    /**
     * This function used for move file to other directory
     *
     * @param path
     * @param fileDeleteDir the directory for move the existed file to deleted folder
     * @throws IOException
     */
    public void removeFile(String path, String fileDeleteDir) throws IOException{
        if(StringUtils.hasText(path)){
            Path fileLocation = Paths.get(fileDeleteDir).toAbsolutePath().normalize();
            if(!fileLocation.toFile().exists()){
                Files.createDirectories(fileLocation);
            }
            File rootDir = new File(path);
            File targetDir = new File(fileDeleteDir);
            FileUtils.moveFileToDirectory(rootDir, targetDir, false);
        }
    }


    /**
     * check valid of file, if file name is blank then return false.
     *
     * @param file
     * @return
     */
    private boolean checkIsValidFile(MultipartFile file){
        return StringUtils.hasText(file.getOriginalFilename());
    }
}
