import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';


interface FoundItem {
  id: number;
  itemName: string;
  description: string;
  foundLocation?: string;
  date: string;
  contactName: string;
  email: string;
  phoneNumber: string;  
}

@Component({
  selector: 'app-items-found',
  templateUrl: './items-found.component.html',
  styleUrls: ['./items-found.component.css']
})
export class ItemsFoundComponent implements OnInit {
  foundItems: FoundItem[] = [];
  loading: boolean = true;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loadLostItems();
  }

  async loadLostItems() {
    try {
      this.foundItems = await this.itemService.getFoundItems();
      console.log('Lost items received:', this.foundItems);
    } catch (error) {
      console.error('Error fetching found items:', error);
    } finally {
      this.loading = false;
    }
  }

  async deleteItem(itemId: number) {
    if (confirm('Are you sure you want to delete this report?')) {
      try {
        const response = await this.itemService.deleteFoundItem(itemId);
        alert(response.message);
        
        // Remove the deleted item from UI
        this.foundItems = this.foundItems.filter(item => item.id !== itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item. Please try again.');
      }
    }
  }
}
