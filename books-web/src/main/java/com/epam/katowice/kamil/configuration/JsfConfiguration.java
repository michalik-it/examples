package com.epam.katowice.kamil.configuration;

import java.util.HashSet;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.sun.faces.config.FacesInitializer;

@Configuration
public class JsfConfiguration {

	    @Bean
	    public ServletRegistrationBean facesServletRegistration() {

	        ServletRegistrationBean servletRegistrationBean = new JsfServletRegistrationBean();
	        servletRegistrationBean.addUrlMappings("/*");
	        servletRegistrationBean.setLoadOnStartup(1);
	        return servletRegistrationBean;
	    }

	    public class JsfServletRegistrationBean extends ServletRegistrationBean {

	        public JsfServletRegistrationBean() {
	            super();
	        }



	        @Override
	        public void onStartup(ServletContext servletContext)
	                throws ServletException {

	            FacesInitializer facesInitializer = new FacesInitializer();

	            servletContext.setInitParameter("primefaces.THEME",  "omega");
	            servletContext.setInitParameter("primefaces.FONT_AWESOME",  "true");
//	            servletContext.setInitParameter("javax.faces.CONFIG_FILES",  "WEB-INF/faces-config.xml");

//	            servletContext.setInitParameter("javax.faces.DEFAULT_SUFFIX",
//	                    ".xhtml");
//	            servletContext.setInitParameter(
//	                    "javax.faces.PARTIAL_STATE_SAVING_METHOD", "true");
//	            servletContext.setInitParameter("javax.faces.PROJECT_STAGE",
//	                    "Development");
//	            servletContext.setInitParameter("facelets.DEVELOPMENT", "true");
//	            servletContext.setInitParameter(
//	                    "javax.faces.FACELETS_REFRESH_PERIOD", "1");



	            Set<Class<?>> clazz = new HashSet<Class<?>>();
	            clazz.add(JsfConfiguration.class);
	            facesInitializer.onStartup(clazz, servletContext);
	            
	          
	        }
	    }
	}