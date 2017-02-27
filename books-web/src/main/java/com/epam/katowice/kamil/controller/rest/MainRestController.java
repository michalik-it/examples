/**
 * Dummy rest controller
 */
package com.epam.katowice.kamil.controller.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {
	@RequestMapping("/rest")
	public String hello() {
		return "Welcome in Movies Rental! I am @RestController";
	}
}
