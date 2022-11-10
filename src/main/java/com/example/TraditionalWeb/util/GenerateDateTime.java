package com.example.TraditionalWeb.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public interface GenerateDateTime {
    //        Date date = Calendar.getInstance().getTime();
    LocalDateTime currentDateTime = LocalDateTime.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
    String strGenerateDateTime = currentDateTime.format(formatter) + "_";
}
