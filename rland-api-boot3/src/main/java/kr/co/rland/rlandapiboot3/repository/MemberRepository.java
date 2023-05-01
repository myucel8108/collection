package kr.co.rland.rlandapiboot3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import kr.co.rland.rlandapiboot3.entity.Member;

//@Repository  JPA를 extends하면 빈에 넣을 필요없이 들어가져 있다.
public interface MemberRepository extends JpaRepository<Member, Integer>{


    @Query("from Member where userName = :username") //온전히 오브젝트와 관련된 sql문이다! 실제 쿼리문이 아니다.
    //-> select * from member where username = 'newlec'
    //
    Member  findByUserName(@Param("username") String username);
}
