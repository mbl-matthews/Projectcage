/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.json.key;

import com.github.cliftonlabs.json_simple.JsonKey;

public class CommentKey implements JsonKey {

    @Override
    public String getKey() {
        return "_comments";
    }

    @Override
    public Object getValue() {
        return null;
    }
    
}
