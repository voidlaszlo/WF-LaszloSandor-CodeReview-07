import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  list:Customer[];
  constructor(private service:CustomerService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {id: item.payload.doc.id,
          ...item.payload.doc.data() } as Customer
      })
    })
  }

  onEdit(cust:Customer) {
    this.service.formData = Object.assign({}, cust);
  }

  onDelete(id:string) {
    if(confirm("Are you sure?")) {
      this.firestore.doc('customers/'+id).delete();
    }
  }

}
