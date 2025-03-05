package com.swati.LostFound_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swati.LostFound_backend.model.ItemFound;

public interface ItemFoundRepository extends JpaRepository<ItemFound,Long> {

}
