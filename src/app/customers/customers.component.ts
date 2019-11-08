import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
