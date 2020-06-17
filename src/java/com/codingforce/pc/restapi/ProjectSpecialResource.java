/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.restapi;

import com.codingforce.pc.json.JSONReader;
import com.codingforce.pc.objects.*;
import com.github.cliftonlabs.json_simple.JsonArray;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Collection;
import java.util.List;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;

@Path("projectspecial")
public class ProjectSpecialResource {
    
    @Context
    private UriInfo context;
    
    public ProjectSpecialResource() {
    
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJSON() throws Exception {
        JSONReader jr = new JSONReader("projects");
        return jr.getJsonSpecialObjectList().toJson();
    }
    
    /*
    @GET
    @Produces(MediaType.APPLICATION_XML)   
    public String getXML() throws Exception {
        JSONReader jr = new JSONReader("projects");
        //JsonArray ja = jr.getJsonObjectList();
        List<Special> list = jr.getSpecialObjectList();
        
        JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

	// output pretty printed
	jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        Writer writer = new StringWriter();
        jaxbMarshaller.marshal((Collection<Special>)list, writer);
        
        return writer.toString();
    }
*/
}