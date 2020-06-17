/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.restapi;

import com.codingforce.pc.json.JSONReader;
import com.codingforce.pc.objects.*;
import java.io.StringWriter;
import java.io.Writer;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;

@Path("commentspecial")
public class CommentSpecialResource {
    
    @Context
    private UriInfo context;
    
    public CommentSpecialResource() {
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJSON(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("comments");
        return jr.getJsonSpecialObjectList().toJson();
    }
    
    /*
    @GET
    @Produces(MediaType.APPLICATION_XML)   
    public String getXML(@QueryParam("id") Integer id) throws Exception {
        JSONReader jr = new JSONReader("comment");
        User usr = (User)jr.getObjectById(id);

        JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

	// output pretty printed
	jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        Writer writer = new StringWriter();
        jaxbMarshaller.marshal(usr, writer);
        
        return writer.toString();
    }
*/
}