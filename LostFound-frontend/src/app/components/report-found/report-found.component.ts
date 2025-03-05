import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-report-found',
  templateUrl: './report-found.component.html',
  styleUrls: ['./report-found.component.css']
})
export class ReportFoundComponent {
  constructor(private itemservice: ItemService,private router: Router) {}
  
    async submitFoundItem(form: NgForm) {
      if (form.invalid) {
        alert('Please fill out all required fields correctly.');
        return;
      }       
  
      const formData= {      
        itemName:form.value.name,
        description: form.value.description,
        foundLocation: form.value.lastSeenLocation,
        date:  new Date(form.value.date).toISOString().split('T')[0],
        contactName: form.value.contactName,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber
      };
  
      try {
        console.log('Submitting Found Item:', formData);
        const response = await this.itemservice.reportFound(formData);
        console.log('Found item reported successfully:', response);
        alert('Found item reported successfully!');
        form.resetForm(); 
      this.router.navigate(['/']); 
      } catch (error) {
        console.error('Error reporting found item:', error);
        alert('Failed to report found item.');
      }
    }
  

}
