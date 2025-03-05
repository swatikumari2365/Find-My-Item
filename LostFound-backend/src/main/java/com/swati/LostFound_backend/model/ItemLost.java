package com.swati.LostFound_backend.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name="ItemLost")
public class ItemLost {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Id")
	private Long id;
	
	private String ItemName;
	
	private String description;
	
	private String LastSeenLocation;
	
	private Date date;
	
	private String ContactName;
	
	private String Email;
	
	private String phoneNumber;
	
}
