/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.json;

import com.codingforce.pc.json.key.*;
import com.codingforce.pc.objects.*;
import com.github.cliftonlabs.json_simple.*;
import java.io.*;
import java.math.BigDecimal;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class JSONReader {
    
    private Reader reader;
    private JsonArray json;
    
    public JSONReader(String file) throws Exception {
        //this.reader = new FileReader(new File("http://localhost:8080/Projectcage/jsondata/"+file+".json"));
        this.reader = new BufferedReader(new InputStreamReader(
                new URL("http://localhost:8080/Projectcage/jsondata/"+file+".json").openStream(), 
                Charset.forName("UTF-8")));
        this.json = (JsonArray) Jsoner.deserialize(reader);
    }
    
    public String getJsonString() {
        return json.toJson();
    }
    
    public JsonObject getJsonObjectById(int id) {
        for(int i=0;i<json.size();i++) {
            JsonObject jobj = (JsonObject) json.get(i);
            if(jobj.getInteger(new IdKey()) == id) {
                return jobj;
            }
        }
        return null;
    }
    
    public Object getObjectById(int id) throws Exception {
        JsonObject jobj = this.getJsonObjectById(id);
        if(jobj == null) {
            return null;
        }
        int cType = jobj.getInteger(new CTypeKey());
        
       
        Object obj = null;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd");
        if(cType == 2) {
            obj = new User(
                    jobj.getInteger(new IdKey()),
                    jobj.getString(new NameKey()),
                    jobj.getString(new LongDescKey()),
                    jobj.getString(new BriefDescKey()),
                    jobj.getCollection(new GoalsKey()),
                    jobj.getString(new PictureKey()),
                    jobj.getString(new EmailKey()),
                    jobj.getString(new PasswordKey()),
                    jobj.getString(new BirthKey())
            );
        } else if(cType == 1) {
            obj = new Project(
                    jobj.getInteger(new IdKey()),
                    jobj.getString(new NameKey()),
                    jobj.getString(new LongDescKey()),
                    jobj.getString(new BriefDescKey()),
                    jobj.getCollection(new GoalsKey()),
                    jobj.getString(new PictureKey()),
                    jobj.getString(new StartKey()),
                    jobj.getString(new EndKey()),
                    jobj.getString(new ManagerKey()),
                    jobj.getCollection(new CommentsKey())
            );
        } else if(cType == 3) {
            obj = new Comment(
                    jobj.getInteger(new IdKey()),
                    jobj.getString(new CommentKey()),
                    jobj.getInteger(new RatingKey()),
                    jobj.getInteger(new UserKey())
            );
        }
        
        return obj;
    }
    
    public JsonArray getJsonSpecialObjectList(){
        JsonObject obj;
        JsonArray list = new JsonArray();
        for(int i=0;i<json.size();i++) {
            obj = new JsonObject(); 
            JsonObject jobj = (JsonObject) json.get(i);
            obj.put(new IdKey().getKey(), jobj.getInteger(new IdKey()));
            obj.put(new NameKey().getKey(), jobj.getString(new NameKey()));
            obj.put(new BriefDescKey().getKey(), jobj.getString(new BriefDescKey())); 
            list.add(obj);
        }
        return list;
    }
    
    public JsonArray getJsonObjectList(){
        return json;
    }
    
    public List<Special> getSpecialObjectList() {
        JsonArray ja = this.getJsonSpecialObjectList();
        List<Special> list = new ArrayList<Special>();
        for(int i = 0;i<ja.size();i++) {
            JsonObject jobj = (JsonObject) ja.get(i);
            list.add(new Special(
                    jobj.getInteger(new IdKey()),
                    jobj.getString(new NameKey()),
                    jobj.getString(new BriefDescKey())
            ));
        }
        return list;
    }
}
