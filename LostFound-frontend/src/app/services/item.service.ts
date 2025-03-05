import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { 
    
  }
  async getLostItems(): Promise<any> {
    try {
      const response = await fetch('http://localhost:8080/api/v1/lostitems');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async getFoundItems(): Promise<any> {
    try {
      const response = await fetch('http://localhost:8080/api/v1/founditems');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async reportLost(data:any):Promise<any>{
    try {
      const response = await fetch('http://localhost:8080/api/v1/reportlost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async reportFound(data: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:8080/api/v1/reportfound', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async deleteLostItem(id: number): Promise<any> {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/lostitems/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { message: `Post with ID ${id} deleted successfully` };
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async deleteFoundItem(id: number): Promise<any> {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/founditems/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { message: `Post with ID ${id} deleted successfully` };
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }


}

