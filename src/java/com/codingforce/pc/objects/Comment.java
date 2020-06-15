/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import com.codingforce.pc.json.key.IdKey;
import com.codingforce.pc.json.key.CommentKey;
import com.codingforce.pc.json.key.UserKey;
import com.codingforce.pc.json.key.CTypeKey;
import com.codingforce.pc.json.key.RatingKey;
import com.codingforce.pc.json.*;
import com.github.cliftonlabs.json_simple.JsonObject;
import com.github.cliftonlabs.json_simple.Jsonable;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Date;
import javax.xml.bind.annotation.*;

@XmlRootElement
public class Comment implements Jsonable{
    private int id;
    private String comment;
    private int rating;
    private int user;
    private int cType;
    
    public Comment(int id, String comment, int rating, int user) {
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.user = user;
        this.cType = 3;
    }

    public int getId() {
        return id;
    }

    @XmlAttribute
    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    @XmlElement
    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    @XmlElement
    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getUser() {
        return user;
    }

    @XmlElement
    public void setUser(int user) {
        this.user = user;
    }

    public int getcType() {
        return cType;
    }

    @XmlElement
    public void setcType(int cType) {
        this.cType = cType;
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
        json.put(new CTypeKey().getKey(), this.getcType());
        json.put(new CommentKey().getKey(), this.getComment());
        json.put(new RatingKey().getKey(), this.getRating());
        json.put(new UserKey().getKey(), this.getUser());
        json.toJson(writer);
    }
    
}