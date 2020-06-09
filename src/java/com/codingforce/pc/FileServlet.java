/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.codingforce.pc;

import java.io.*;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author mbl
 */
@WebServlet(name = "FileServlet", urlPatterns = {"/FileServlet"})
public class FileServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try {
            /* TODO output your page here. You may use following sample code. */
            
            ServletContext con = getServletContext();
            
            String param = request.getQueryString();
            File f = new File("C:\\Users\\MathisBlock\\Pictures\\"+request.getQueryString());
            FileInputStream inStream = new FileInputStream(f);
            
            String mimeType = con.getMimeType(f.getAbsolutePath());
            if(mimeType == null) {
                mimeType = "application/octet-stream";
            }
            System.out.println(mimeType);
            
            response.setContentType(mimeType);
            response.setContentLength((int)f.length());
            response.setHeader("ContentType", mimeType);
            
            
            String headerKey = "Content-Disposition";
            String headerValue = String.format("attachment; filename=\"%s\"", f.getName());
            response.setHeader(headerKey, headerValue);
              
            
            OutputStream outStream = response.getOutputStream();
            
            byte[] buffer = new byte[4096];
            int bytesRead = -1;
            
            while(true) {
                bytesRead = inStream.read(buffer);
                if(bytesRead == -1) {
                    break;
                }
                outStream.write(buffer, 0, bytesRead);
            }
            inStream.close();
            outStream.close();
            
            /*
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FileServlet</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FileServlet at " + request.getContextPath() + "</h1>");
            out.println("<p>");
            out.println("Directory entries of "+f.getAbsolutePath()+": </br>");
            for(String s : names) {
                out.println(s+"</br>");
            }
            out.println("</p>");
            out.println("</body>");
            out.println("</html>");
            */
        } catch(Exception e) {
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
