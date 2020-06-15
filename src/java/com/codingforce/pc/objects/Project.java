/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import com.codingforce.pc.json.key.CommentsKey;
import com.codingforce.pc.json.key.ManagerKey;
import com.codingforce.pc.json.key.IdKey;
import com.codingforce.pc.json.key.StartKey;
import com.codingforce.pc.json.key.EndKey;
import com.codingforce.pc.json.key.GoalsKey;
import com.codingforce.pc.json.key.PictureKey;
import com.codingforce.pc.json.key.NameKey;
import com.codingforce.pc.json.key.BriefDescKey;
import com.codingforce.pc.json.key.CTypeKey;
import com.codingforce.pc.json.key.LongDescKey;
import com.codingforce.pc.json.*;
import com.github.cliftonlabs.json_simple.JsonObject;
import com.github.cliftonlabs.json_simple.Jsonable;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Date;
import java.util.List;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Project extends Base implements Jsonable{
    
    private Date start;
    private Date end;
    private String manager;
    private List comments;

    public Project(
            int id, 
            String name, 
            String longDesc, 
            String briefDesc, 
            List<String> goals, 
            String picture, 
            Date start, 
            Date end, 
            String manager, 
            List comments
    ) {
        super(id, name, longDesc, briefDesc, goals, picture, 1);
        this.start = start;
        this.end = end;
        this.manager = manager;
        this.comments = comments;
    }
    
    public Project(){
        super();
    }
    
    public Date getStart() {
        return start;
    }

    @XmlElement
    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }
    
    @XmlElement
    public void setEnd(Date end) {
        this.end = end;
    }

    public String getManager() {
        return manager;
    }

    @XmlElement
    public void setManager(String manager) {
        this.manager = manager;
    }

    public List getComments() {
        return comments;
    }

    @XmlElement
    public void setComments(List comments) {
        this.comments = comments;
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
        json.put(new StartKey().getKey(), this.getStart().toString());
        json.put(new EndKey().getKey(), this.getEnd().toString());
        json.put(new ManagerKey().getKey(), this.getManager());
        json.put(new CommentsKey().getKey(), this.getComments());
        json.toJson(writer);
    }
    
}
