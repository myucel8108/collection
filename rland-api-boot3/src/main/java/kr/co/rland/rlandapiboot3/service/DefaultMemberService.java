package kr.co.rland.rlandapiboot3.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

         if(!member.isEmpty())
             System.out.println(member.toString());

        return false;
    }
    
}
