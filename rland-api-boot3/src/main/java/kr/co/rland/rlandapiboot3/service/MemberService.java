package kr.co.rland.rlandapiboot3.service;

import org.springframework.beans.factory.annotation.Autowired;

public interface MemberService {


    boolean isValid(String string, String password);

}
