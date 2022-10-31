package com.example.TraditionalWeb.exception;

public class UserException extends RuntimeException{
    private String errorCode;

    public UserException(String errorCode, String errorMessage) {
        super(errorMessage);
        this.errorCode = errorCode;
    }
}
