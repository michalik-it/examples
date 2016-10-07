package com.epam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class LiquibaseDemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(LiquibaseDemoApplication.class, args);
		TestBean bean = context.getBean(TestBean.class);
		System.out.println(bean.getDriver());
	}
}
