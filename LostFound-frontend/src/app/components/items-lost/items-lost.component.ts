import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';


interface LostItem {
  id: number;
  itemName: string;
  description: string;
  lastSeenLocation?: string;
  date: string;
  contactName: string;
  email: string;
  phoneNumber: string;  
}

@Component({
  selector: 'app-items-lost',
  templateUrl: './items-lost.component.html',
  styleUrls: ['./items-lost.component.css']
})
export class ItemsLostComponent implements OnInit {
  lostItems: LostItem[] = [];
  loading: boolean = true;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loadLostItems();
  }

  async loadLostItems() {
    try {
      this.lostItems = await this.itemService.getLostItems();
      console.log('Lost items received:', this.lostItems);
    } catch (error) {
      console.error('Error fetching lost items:', error);
    } finally {
      this.loading = false;
    }
  }

  openClaimForm() {
    window.open('https://forms.gle/pUxxDxoLiTHmViSp9', '_blank');
  }

  async deleteItem(itemId: number) {
    if (confirm('Are you sure you want to delete this report?')) {
      try {
        const response = await this.itemService.deleteLostItem(itemId);
        alert(response.message);
        
        // Remove the deleted item from UI
        this.lostItems = this.lostItems.filter(item => item.id !== itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item. Please try again.');
      }
    }
  }
}
