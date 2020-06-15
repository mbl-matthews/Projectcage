/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import com.codingforce.pc.json.key.IdKey;
import com.codingforce.pc.json.key.EmailKey;
import com.codingforce.pc.json.key.BirthKey;
import com.codingforce.pc.json.key.GoalsKey;
import com.codingforce.pc.json.key.PictureKey;
import com.codingforce.pc.json.key.NameKey;
import com.codingforce.pc.json.key.BriefDescKey;
import com.codingforce.pc.json.key.PasswordKey;
import com.codingforce.pc.json.key.CTypeKey;
import com.codingforce.pc.json.key.LongDescKey;
import com.codingforce.pc.json.*;
import com.github.cliftonlabs.json_simple.JsonObject;
import com.github.cliftonlabs.json_simple.Jsonable;
import java.io.*;
import java.util.Date;
import java.util.List;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User extends Base implements Jsonable {
    
    private String email;
    private String password;
    private Date gebDate;
    
    public User(
            int id, 
            String name, 
            String longDesc, 
            String briefDesc, 
            List<String> goals, 
            String picture, 
            String email, 
            String password, 
            Date gebDate) 
    {
        super(id, name, longDesc, briefDesc, goals, picture, 2);
        this.email = email;
        this.password = password;
        this.gebDate = gebDate;
    }
    
    public User (){
        super();
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

    public Date getGebDate() {
        return gebDate;
    }

    @XmlElement
    public void setGebDate(Date gebDate) {
        this.gebDate = gebDate;
    }
    
    @Override
    public String toJson() {
        final StringWriter writable = new StringWriter();
        try {
            this.toJson(writable);
        } catch (final IOException e) {
        }
        return writable.toString();
    }

    @Override
    public void toJson(Writer writer) throws IOException {
        final JsonObject json = new JsonObject();
        json.put(new IdKey().getKey(), this.getId());
        json.put(new NameKey().getKey(), this.getName());
        json.put(new LongDescKey().getKey(), this.getLongDesc());
        json.put(new BriefDescKey().getKey(), this.getBriefDesc());
        json.put(new GoalsKey().getKey(), this.getGoals());
        json.put(new PictureKey().getKey(), this.getPicture());
        json.put(new CTypeKey().getKey(), this.getcType());
        json.put(new EmailKey().getKey(), this.getEmail());
        json.put(new PasswordKey().getKey(), this.getPassword());
        json.put(new BirthKey().getKey(), this.getGebDate().toString());
        json.toJson(writer);
    }
}
