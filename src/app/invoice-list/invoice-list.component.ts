import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { SharedService } from '../services/shared-service.service';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})

export class InvoiceListComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['Number', 'Bill From', 'Bill To', 'Status','Actions'];
  

  constructor(public data : SharedService) {

  }

  ngOnInit() {
  }

  test(row){
    console.log(row);
  }

  delete(index){
    this.data.dataSource.splice(index,1);
    this.table.renderRows();
  }

}
