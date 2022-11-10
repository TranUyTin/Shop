package com.example.TraditionalWeb.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class AbstractException  extends RuntimeException{
    public  int errorCode;

    public AbstractException(int errorCode, String errorMessage){
        super(errorMessage);
        this.errorCode = errorCode;
    }

}
