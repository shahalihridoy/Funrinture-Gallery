import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService, person, Item } from '../services/shared-service.service';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  data;
  cost: number = 0;
  vat: number = 0;

  displayedColumns: string[] = ['Number', 'Item Name', 'Unit Price', 'Unit','Cost'];

  constructor(private route : ActivatedRoute, private dataService : SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.data = this.dataService.getSingleData(param.id);
      this.calculateCost();
      this.vat = 0.15*this.cost;
    });
  }

  calculateCost(){
    this.data.item.forEach(element => {
     this.cost += element.unit*element.price;
    });
  }

}
