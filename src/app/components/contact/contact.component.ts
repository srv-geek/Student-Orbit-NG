import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    subject: 'Support',
    message: ''
  };

  submitContactForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert(`Thank you, ${this.contact.name}! We will get back to you soon.`);
      // Here, you can call a service to send this data to the backend
    } else {
      alert("Please fill in all fields.");
    }
  }
  
}
