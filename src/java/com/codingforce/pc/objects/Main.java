/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc.objects;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
/**
 *
 * @author MathisBlock
 */
public class Main {
    
    public static void main(String[] args){
        
        User cage = new User(1,"Nicolas","voll geil","super geil",null,null);
        
        
	  try {

		JAXBContext jaxbContext = JAXBContext.newInstance(User.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

		// output pretty printed
		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

		jaxbMarshaller.marshal(cage, System.out);

	      } catch (JAXBException e) {
		e.printStackTrace();
	      }

    }
}
