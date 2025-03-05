package com.swati.LostFound_backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.swati.LostFound_backend.repository.ItemLostRepository;
import com.swati.LostFound_backend.model.ItemLost; 
import com.swati.LostFound_backend.model.ItemFound; 
import com.swati.LostFound_backend.repository.ItemFoundRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class ItemService {
    private ItemLostRepository itemLostRepository;
    private ItemFoundRepository itemFoundRepository;
	
    public ItemLost saveLost(ItemLost itemLost) {
		return itemLostRepository.saveAndFlush(itemLost);		
	}
    
    public ItemFound saveFound(ItemFound itemFound) {
		return itemFoundRepository.saveAndFlush(itemFound);		
	}
    
	public List<ItemLost> getAllLostItem(){
		return itemLostRepository.findAll();
	}
	
	public List<ItemFound> getAllFoundItem(){
		return itemFoundRepository.findAll();
	}	

		
	public void deleteinLost(Long id) {		
		itemLostRepository.deleteById(id);		
	}
	
	public void deleteinFound(Long id) {		
		itemFoundRepository.deleteById(id);		
	}
	
	public boolean LostItemById(Long id) {
		return itemLostRepository.existsById(id);
	}
	
	public boolean FoundItemById(Long id) {
		return itemFoundRepository.existsById(id);
	}
		

}
