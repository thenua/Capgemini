package com.SecurityConfig;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
public class User {
     @Id
	 private String username;
	 private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	 
}
