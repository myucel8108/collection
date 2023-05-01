package kr.co.rland.rlandapiboot3.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public  class Member {
    @Id
    private Integer id;
    @Column(name="username")
    private String userName; //무조건 user_name으로 sql으로 들어가짐
    private String pwd;
    private String email;
    public boolean isEmpty() {
        return false;
    }
}
