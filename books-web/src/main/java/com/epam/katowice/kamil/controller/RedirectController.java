/**
 *  RedirectController is for redirect spring servlet to jsf (base path / to index.xhtml) 
 */
package com.epam.katowice.kamil.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class RedirectController {

	//TODO: should be handled by web.xml welcome-file-list but it does not
    @RequestMapping(value = {"","/","movies","movies/"}, method = RequestMethod.GET)
    public String baseUrlRedirect(HttpServletRequest request) {
    	
    	if(request.getRequestURL().toString().endsWith("/")) {
    		return "redirect:" + request.getRequestURL().append("index.xhtml").toString();
    	} else {
    		return "redirect:" + request.getRequestURL().append("/index.xhtml").toString();
    	}
    	
        
    }
}