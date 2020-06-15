/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User extends Base {
    
    public User(int id, String name, String longDesc, String briefDesc, List<String> goals, String picture) {
        super(id, name, longDesc, briefDesc, goals, picture, 2);
    }
    
}
