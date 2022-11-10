package com.example.TraditionalWeb.exception;

public class FileTypeNotValidException extends AbstractException{

    public FileTypeNotValidException(int errorCode, String errorMessage){

        super(errorCode, errorMessage);
    }
}
