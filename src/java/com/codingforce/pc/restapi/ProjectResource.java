package com.codingforce.pc.restapi;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.codingforce.pc.json.JSONReader;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("project")
public class ProjectResource {
    
    @Context
    private UriInfo context;
    
    public ProjectResource() {
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String get(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("projects");
        String xml = "<?xml version=\"1.0\"?><msg>"+jr.getJsonObjectById(id).toJson()+"</msg>";
        
        return xml;
    }
    
}
