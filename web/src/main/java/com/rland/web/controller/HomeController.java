package com.rland.web.controller;


import java.io.File;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class HomeController{

  
    @GetMapping
    public String index() {
        
        return "hello index";
    }

    @PostMapping("upload")
    public ResponseEntity<String> upload(MultipartFile file, String test, HttpServletRequest request) throws IllegalStateException, IOException{
        System.out.println(test+"파일 성공"+file.getOriginalFilename());
        //new ResponseEntity();  //응답에 대한 그릇!
        if(file.isEmpty())
            return new ResponseEntity<String>("파일을 전송하지 않았습니다.", HttpStatus.BAD_REQUEST);
        String urlPath ="/upload";
        String realPath = request.getServletContext().getRealPath(urlPath);
        System.out.println(realPath);
        File filePath = new File(realPath);
        if(!filePath.exists())
            filePath.mkdirs();
        
        String fileName = file.getOriginalFilename();
        File saveFile = new File(filePath+File.separator+fileName);
        //업로드 폴더가 없으면 에러남
        file.transferTo(saveFile);
        return new ResponseEntity<String>(fileName, HttpStatus.OK);
    }




}