package com.swati.LostFound_backend.controller;

import java.util.HashMap;
import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swati.LostFound_backend.model.ItemFound;
import com.swati.LostFound_backend.model.ItemLost;
import com.swati.LostFound_backend.service.ItemService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
@AllArgsConstructor
public class ItemController {
    private ItemService itemService;
    
    @PostMapping("/reportlost")
	public ItemLost addTask(@RequestBody ItemLost itemLost) {
		return itemService.saveLost(itemLost);
	}
    
    @PostMapping("/reportfound")
	public ItemFound addTask(@RequestBody ItemFound itemFound) {
		return itemService.saveFound(itemFound);
	}
	
	@GetMapping("/lostitems")
	public List<ItemLost> getLostItems(){
		return itemService.getAllLostItem();
	}
	
	@GetMapping("/founditems")
	public List<ItemFound> getFoundItems(){
		return itemService.getAllFoundItem();
	}
	
	@DeleteMapping("/lostitems/{id}")
	public ResponseEntity<?> deleteLostItem(@PathVariable Long id) {
		if(itemService.LostItemById(id)) {			
			itemService.deleteinLost(id);
			HashMap<String,String> message=new HashMap<>();
			message.put("message", id+"task removed");
			return ResponseEntity.ok().body(message);
		}else {
			HashMap<String,String> message=new HashMap<>();
			message.put("message", id+"task not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
		}
	}
	
	@DeleteMapping("/founditems/{id}")
	public ResponseEntity<?> deletefoundItem(@PathVariable Long id) {
		if(itemService.FoundItemById(id)) {			
			itemService.deleteinFound(id);
			HashMap<String,String> message=new HashMap<>();
			message.put("message", id+"task removed");
			return ResponseEntity.ok().body(message);
		}else {
			HashMap<String,String> message=new HashMap<>();
			message.put("message", id+"task not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
		}
	}
	

}
