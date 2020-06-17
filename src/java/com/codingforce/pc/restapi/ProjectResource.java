package com.codingforce.pc.restapi;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.codingforce.pc.json.JSONReader;
import com.codingforce.pc.objects.Project;
import com.codingforce.pc.objects.User;
import java.io.StringWriter;
import java.io.Writer;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;

@Path("projects")
public class ProjectResource {
    
    @Context
    private UriInfo context;
    
    public ProjectResource() {
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getJSON(@QueryParam("id") Integer id) throws Exception {
        
        JSONReader jr = new JSONReader("projects");
        Project pr = (Project)jr.getObjectById(id);

        JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

	// output pretty printed
	jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        Writer writer = new StringWriter();
        jaxbMarshaller.marshal(pr, writer);
        
        return writer.toString();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getXML(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("projects");
        if(id == null) {
            return jr.getJsonObjectList().toJson();
        }
        Project usr = (Project)jr.getObjectById(id);
        
        return usr.toJson();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postProject(String data){
        System.out.println("Received Project: "+data);
    }
    
}
