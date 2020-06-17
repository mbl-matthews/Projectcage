package com.codingforce.pc.restapi;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.codingforce.pc.json.JSONReader;
import com.codingforce.pc.objects.*;
import java.io.StringWriter;
import java.io.Writer;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;

@Path("user")
public class UserResource {
    
    @Context
    private UriInfo context;
    
    public UserResource() {
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getJSON(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("user");
        User usr = (User)jr.getObjectById(id);

        JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

	// output pretty printed
	jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        Writer writer = new StringWriter();
        jaxbMarshaller.marshal(usr, writer);
        
        return writer.toString();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getXML(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("user");
        if(id == null) {
            return jr.getJsonObjectList().toJson();
        }
        User usr = (User)jr.getObjectById(id);
        
        return usr.toJson();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postProject(String data){
        System.out.println("Received User: "+data);
    }
}
