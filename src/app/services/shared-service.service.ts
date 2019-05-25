import { Injectable } from '@angular/core';

export interface PeriodicElement {
  no: number;
  buyer: person;
  seller: person;
  date: string;
  status: string;
  item: Item[];
}

export interface person {
    name: string;
    email: string;
    address: string;
    contact: string;
}

export interface Item {
  id: number;
  name: string;
  price: number;
  unit: number;
}

export class SharedService {

  dataSource : PeriodicElement[] = [
    {
      no: 1,
      buyer: {
        name: "Schoen, Conn and Mills",
        email: "shahalihriody@gmail.com",
        address: "pathantula",
        contact: "01992057252"
      },
      seller: {
        name: "UI Lib",
        email: "uilib@ymail.com",
        address: "shurma",
        contact: "017752545"
      },
      date: "March 9, 2019",
      status: "pending",
      item: [
        {name: "item1",id: 5,price: 50, unit: 9},
        {name: "item2",id: 6,price: 70, unit: 15},
        {name: "item3",id: 7,price: 90, unit: 19},
        {name: "item4",id: 8,price: 60, unit: 19}
      ]
    },

    {
      no: 2,
      buyer: {
        name: "Bilbo Begins, Shire, Bree",
        email: "shahalihriody@gmail.com",
        address: "pathantula",
        contact: "01992057252"
      },
      seller: {
        name: "UI Lib",
        email: "uilib@ymail.com",
        address: "shurma",
        contact: "017752545"
      },
      date: "March 9, 2019",
      status: "pending",
      item: [
        {name: "item1",id: 5,price: 50, unit: 9},
        {name: "item2",id: 6,price: 70, unit: 15},
        {name: "item3",id: 7,price: 90, unit: 19},
        {name: "item4",id: 8,price: 60, unit: 19}
      ]
    },

    {
      no: 3,
      buyer: {
        name: "Mc Donald",
        email: "shahalihriody@gmail.com",
        address: "pathantula",
        contact: "01992057252"
      },
      seller: {
        name: "UI Lib",
        email: "uilib@ymail.com",
        address: "shurma",
        contact: "017752545"
      },
      date: "March 9, 2019",
      status: "pending",
      item: [
        {name: "item1",id: 5,price: 50, unit: 9},
        {name: "item2",id: 6,price: 70, unit: 15},
        {name: "item3",id: 7,price: 90, unit: 19},
        {name: "item4",id: 8,price: 60, unit: 19}
      ]
    }
  ];

  constructor() { 
  }

  getSingleData(id: number){
    return this.dataSource[id];
  }
}
