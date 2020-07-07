package com.parth.rest.example.webservice.restfulwebservices.basic.auth;

public class AuthenticationBean {

	private String message;
	
	public AuthenticationBean(String message) {
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message );
	}

	public String getMessage() {
		return message;
	}
	
}