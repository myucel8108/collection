package kr.co.rland.rlandapiboot3.service;

import org.springframework.beans.factory.annotation.Autowired;

import kr.co.rland.rlandapiboot3.entity.Member;

public interface MemberService {


    boolean isValid(String string, String password);

    Member getByUsername(String username);

}
