/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import java.util.List;
import javax.xml.bind.annotation.*;

@XmlRootElement
public abstract class Base {
    private int id;
    private String name;
    private String longDesc;
    private String briefDesc;
    private List<String> goals;
    private String picture;
    private int cType;

    protected Base(int id, String name, String longDesc, String briefDesc, List<String> goals, String picture, int cType) {
        this.id = id;
        this.name = name;
        this.longDesc = longDesc;
        this.briefDesc = briefDesc;
        this.goals = goals;
        this.picture = picture;
        this.cType = cType;
    }
    
    protected Base(){
        super();
    }

    public int getId() {
        return id;
    }

    @XmlAttribute
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    @XmlElement
    public void setName(String name) {
        this.name = name;
    }

    public String getLongDesc() {
        return longDesc;
    }

    @XmlElement
    public void setLongDesc(String longDesc) {
        this.longDesc = longDesc;
    }

    public String getBriefDesc() {
        return briefDesc;
    }

    @XmlElement
    public void setBriefDesc(String briefDesc) {
        this.briefDesc = briefDesc;
    }

    public List<String> getGoals() {
        return goals;
    }

    @XmlElement
    public void setGoals(List<String> goals) {
        this.goals = goals;
    }

    public String getPicture() {
        return picture;
    }

    @XmlElement
    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getcType() {
        return cType;
    }

    @XmlElement
    public void setcType(int cType) {
        this.cType = cType;
    }
}
