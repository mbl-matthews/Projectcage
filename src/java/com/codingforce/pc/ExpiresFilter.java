package com.codingforce.pc;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ExpiresFilter implements Filter
{
    private Integer days = -1;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse rep = (HttpServletResponse) response;
        
        String url = req.getRequestURL().toString();
        System.out.println("Going into filter! URL: "+url);
        
        if ( days > -1  && URLIsImageOrVideo(url)) {
            System.out.println("Filter img or video!");
            
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(new Date());
            calendar.add(Calendar.DATE, days);

            //HTTP header date format: Thu, 01 Dec 1994 16:00:00 GMT
            String expireDate = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss zzz").format(calendar.getTime());
            rep.setHeader("Expires", expireDate );
            String ct = "";
            if(URLIsImage(url))
            {
                ct = "image/png";
                
            } else if(URLIsVideo(url)) {
                ct = "video/mp4";
            }
            rep.setHeader("Content-Type", ct);
            rep.setHeader("ContentType", ct);
            
            rep.setStatus(401);
        }

        chain.doFilter(request, response);
        return;
    }

    @Override
    public void init(FilterConfig filterConfig) {        
        String expiresAfter = filterConfig.getInitParameter("days");
        if (expiresAfter != null) {
            try {
                days = Integer.parseInt(expiresAfter);
            }
            catch (NumberFormatException nfe) {
                days = -1;
            }                       
        }
    }

    @Override
    public void destroy()
    {
    }
    
    /**
     * Only check for .png or .mp4 as according to the tasks only png and video content types shall be set and therefore only this types shall be filtered
     * @param url
     * @return True if the given URL is a png or mp4 file
     */
    private boolean URLIsImageOrVideo(String url) {
        return URLIsImage(url) || URLIsVideo(url);
    }
    
    private boolean URLIsImage(String url) {
        return url.endsWith(".png");
    }
    
    private boolean URLIsVideo(String url){
        return url.endsWith(".mp4");
    }
}
