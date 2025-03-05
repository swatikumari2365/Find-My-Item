import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report-lost',
  templateUrl: './report-lost.component.html',
  styleUrls: ['./report-lost.component.css']
})
export class ReportLostComponent {
  constructor(private itemservice: ItemService,private router: Router) {}

  async submitLostItem(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }  
   

    const formData= {      
      itemName:form.value.name,
      description: form.value.description,
      lastSeenLocation: form.value.lastSeenLocation,
      date:  new Date(form.value.date).toISOString().split('T')[0],
      contactName: form.value.contactName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber
    };

    try {
      console.log('Submitting Lost Item:', formData);
      const response = await this.itemservice.reportLost(formData);
      console.log('Lost item reported successfully:', response);
      alert('Lost item reported successfully!');
      form.resetForm(); 
      this.router.navigate(['/']); 
    } catch (error) {
      console.error('Error reporting lost item:', error);
      alert('Failed to report lost item.');
    }
  }

  
}
