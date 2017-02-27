package com.epam.katowice.kamil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@ComponentScan("com.epam.katowice")
public class MovieRentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieRentalApplication.class, args);
	}
}
