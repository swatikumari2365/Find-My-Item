package com.swati.LostFound_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swati.LostFound_backend.model.ItemLost;



public interface ItemLostRepository extends JpaRepository<ItemLost,Long> {

}
