package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.service.FileStorageService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FileStorageServiceImpl implements FileStorageService {
    Path url = Paths.get("D://Xampp//htdocs//image").normalize();
    @Override
    public void init() {
        try {
            Files.createDirectories(url);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    @Override
    public void save(MultipartFile[] files) throws IOException {

        try {
            for (MultipartFile file: files) {
                byte[] bytes = file.getBytes();
                String fileName = file.getOriginalFilename();
                String fileUrl = url + "/" + fileName;
                Files.write(Paths.get(fileUrl), bytes);
            }
        } catch (Exception e) {
            if (e instanceof FileAlreadyExistsException) {
                throw new RuntimeException("A file of that name already exists.");
            }

            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public Resource load(String filename) {
        try {
            Path file = url.resolve(filename);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(url.toFile());
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.url, 1).filter(path -> !path.equals(this.url)).map(this.url::relativize);
        } catch (IOException e) {
            throw new RuntimeException("Could not load the files!");
        }
    }
}
