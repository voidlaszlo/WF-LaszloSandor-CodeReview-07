import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private service:CustomerService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?:NgForm) {
    if(form != null)
    form.resetForm()
    this.service.formData = {
      id : null,
      fullName : "",
      fromPlace : "",
      toPlace : "",
    };
  }

  onSubmit(form:NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('customers').add(data);
    else
      this.firestore.doc('customers/'+form.value.id).update(data);
    this.resetForm(form);
  }

}
