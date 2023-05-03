package kr.co.rland.rlandapiboot3.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import kr.co.rland.rlandapiboot3.entity.Member;
import kr.co.rland.rlandapiboot3.repository.MemberRepository;

@Service
public class DefaultMemberService implements MemberService{


    @Autowired
    private MemberRepository repository;


    @Override
    public boolean isValid(String Username, String password) {
        // TODO Auto-generated method stub
    //    Optional<Member>  member = repository.findById(1);
    //내가 직접 만들어보기
    Member member = repository.findByUserName("newlec");


       // new Bcry
        
        if(member ==null)

            return false;

        else if(!BCrypt.checkpw(password, member.getPwd()))
            return false;

        return true;
    }


    @Override
    public Member getByUsername(String username) {
        return repository.findByUserName(username);
    }
    
}
