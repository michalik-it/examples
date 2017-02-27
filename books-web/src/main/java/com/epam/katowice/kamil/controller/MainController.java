package com.epam.katowice.kamil.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;


@Controller("mainController")
@Scope("request")
public class MainController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());
    
    @Value(value = "${movieRental.welcomeText}")
    private String welcomeMessage;
	private Long count;


    @PostConstruct
    private void init() {
    	log.debug("SpringBean.init()");
    }

    public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}

	public String getWelcomeMessage() {
        return welcomeMessage;
    }

    
	

}