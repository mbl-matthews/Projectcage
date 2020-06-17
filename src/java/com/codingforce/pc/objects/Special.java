/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import javax.xml.bind.annotation.*;

@XmlRootElement
public class Special {
    private int id;
    private String name;
    private String briefDesc;
    private int cType;

    public Special(int id, String name, String briefDesc) {
        this.id = id;
        this.name = name;
        this.briefDesc = briefDesc;
        this.cType = 4;
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

    public String getBriefDesc() {
        return briefDesc;
    }

    @XmlElement
    public void setBriefDesc(String briefDesc) {
        this.briefDesc = briefDesc;
    }

    public int getcType() {
        return cType;
    }

    @XmlElement
    public void setcType(int cType) {
        this.cType = cType;
    }
}
