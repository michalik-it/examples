/**
 * This controller does not do anything, just for learning purpose to show hot to use JSF ManagedBean with spring anf jsf
 */
package com.epam.katowice.kamil.controller.jsf.managedbean;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.ViewScoped;

import org.springframework.stereotype.Component;

@Component
@ManagedBean(name="jsfBean")
@RequestScoped
public class JsfBean {
    
    private String welcomeMessage = "I am ManagedBean";

    @PostConstruct
    private void init() {
    }
    
    public String getWelcomeMessage() {
        return welcomeMessage;
    }

}