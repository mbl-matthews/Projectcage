/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import java.util.Date;
import javax.xml.bind.annotation.*;

@XmlRootElement
public class Comment {
    private int id;
    private String email;
    private String password;
    private Date birth;
    
    public Comment(int id, String email, String password, Date birth) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.birth = birth;
    }

    public Comment(){
        super();
    }
    
    public int getId() {
        return id;
    }

    @XmlAttribute
    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    @XmlElement
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    @XmlElement
    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirth() {
        return birth;
    }

    @XmlElement
    public void setBirth(Date birth) {
        this.birth = birth;
    }
}
