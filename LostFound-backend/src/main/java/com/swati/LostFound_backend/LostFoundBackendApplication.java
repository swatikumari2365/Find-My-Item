package com.swati.LostFound_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.swati.LostFound_backend")
@ComponentScan("com.swati.LostFound_backend")
@EnableJpaRepositories("com.swati.LostFound_backend")
public class LostFoundBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LostFoundBackendApplication.class, args);
	}

}

