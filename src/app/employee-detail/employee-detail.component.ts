import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HomeComponent } from '../home/home.component';
// const onprint = require('../renderer.js');
// import { PosPrintData, PosPrintOptions, PosPrintPosition, PosPrintTableField, PosPrintType } from "electron-pos-printer/dist/models";
import * as path from "path";
// import { PosPrintData, PosPrintOptions } from "electron-pos-printer";
// import { PosPrinter } from "electron-pos-printer/dist/post-printer";
// var isRenderer = require('is-electron-renderer')
// let { remote } = require("electron");
// const { PosPrinter } = remote.require("electron-pos-printer");

// module.exports = onprint.default;

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {


  constructor() { }

  ngOnInit() { }

  // print() {

  //   const items = HomeComponent.prototype.ItemData
  //   const item = [{
  //     "Trans_ID": 0,
  //     "Staff_ID": 333,
  //     "Number": 13248,
  //     "VAT_Code": null,
  //     "Description": "YELLOW PLANTAIN",
  //     "Price": 1.99,
  //     "Quantity": 1
  //   },
  //   {
  //     "Trans_ID": 0,
  //     "Staff_ID": 333,
  //     "Number": 13248,
  //     "VAT_Code": null,
  //     "Description": "YELLOW PLANTAIN",
  //     "Price": 1.99,
  //     "Quantity": 1
  //   },
  //   {
  //     "Trans_ID": 0,
  //     "Staff_ID": 333,
  //     "Number": 13248,
  //     "VAT_Code": null,
  //     "Description": "YELLOW PLANTAIN",
  //     "Price": 1.99,
  //     "Quantity": 1
  //   }
  //   ];

  //   const ItemTable: any = {
  //     type: 'table',
  //     // style the table
  //     style: 'text-align:left',
  //     // list of the columns to be rendered in the table header
  //     tableHeader: ['Item', 'Quantity', 'Price'],
  //     // multi dimensional array depicting the rows and columns of the table body
  //     // tableBody: this.itemsList,
  //     // custom style for the table header
  //     tableHeaderStyle: 'visibility:collapse',
  //     // custom style for the table body
  //     tableBodyStyle: 'border: 0.5px solid #ddd',
  //     css: { "font-weight": "700", "font-size": "12px", "text-align": "center" },
  //     // custom style for the table footer
  //     tableFooterStyle: 'background-color: #000; color: white;',
  //   }

  //   const data: PosPrintData[] = [{
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'SPICE OF ASIA',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px", "color": "black" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: '54 JOHN STREET',
  //     position: 'center',
  //     style: `text-align:center`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'ABERDEEN AB25 1LL',
  //     position: 'center',
  //     style: `text-align:center`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: `TEL: 01224 645654`,
  //     // value: `TEL - ${items[0].Number}`,
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: `OPEN:  MON-SAT  9AM-9PM _ SUN 10AM-8PM`,
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "13px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: '----------------------------------------------------------',
  //     //position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   // Trans ID // staff id
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: `TRANS ID - ${items[0].Trans_ID}`,
  //     position: 'left',
  //     style: `margin-left: 35px`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: `STAFF ID - ${items[0].Staff_ID}`,
  //     //position: 'left',
  //     style: `margin-left: 35px;`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     // value: `${currentDate[0]}`,
  //     //position: 'left',
  //     css: { "font-size": "15px", "margin-left": "235px", "margin-top": "-19px", "margin-bottom": "6px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: '----------------------------------------------------------',
  //     //position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //     items,
  //   {

  //     type: 'table',
  //     // style the table
  //     style: 'border: 1px solid #ddd',
  //     // list of the columns to be rendered in the table header
  //     tableHeader: ['SubTotal', 'Cash payment'],
  //     // multi dimensional array depicting the rows and columns of the table body
  //     // tableBody: [itemsSubtotal],
  //     css: { "font-weight": "700", "font-size": "18x" },
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: '----------------------------------------------------------',
  //     //position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   {

  //     type: 'text',
  //     value: `* Number of Items ${items.length} *`,
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "18px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: '----------------------------------------------------------',
  //     //position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'Thank you for your custom!',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "16px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'Please Come Again!',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "16px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'Please keep the receipt to retun the item',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "16px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'RETURN NOT ACCEPTED FOR VEG, CHILLED & FROZEN FOODS ITEMS',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   {
  //     type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
  //     value: 'VAT  315061737',
  //     position: 'center',
  //     style: `text-align:center;`,
  //     css: { "font-size": "15px" }
  //   },
  //   ]


  //   // let printers = webContents.getPrinters(); //list the printers
  //   // console.log(printers);

  //   // printers.map((item, index) => {
  //   //     //write in the screen the printers for choose
  //   //     document.getElementById("list_printers").innerHTML +=
  //   //         ' <input type="radio" id="printer_' +
  //   //         index +
  //   //         '" name="printer" value="' +
  //   //         item.name +
  //   //         '"><label for="printer_' +
  //   //         index +
  //   //         '">' +
  //   //         item.name +
  //   //         "</label><br>";
  //   // });

  //   let printerName = 'EPSON TM-T82X Receipt';
  //   const options = {
  //     preview: true, // Preview in window or print
  //     width: '320px', //  width of content body
  //     //margin: '0 0 0 2px',
  //     copies: 1, // Number of copies to print
  //     printerName: printerName, // printerName: string, check it at webContent.getPrinters()
  //     timeOutPerLine: 400,
  //     silent: true,
  //     //pageSize: { height: 301000, width: 71000 }  // page size
  //   };
  //   PosPrinter.print(data, options)
  //     .then(() => { })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }




  

  // onCode() {

  //   // this.Incoming.push({ 0: "Supportive parents", 1: "Being able to solve a hard problem", 3: "Good food", 4: "Fun game with friends", 5: "Good food", 6: "Being healthy" });


  //   // this.Incoming.push("Supportive parents");
  //   // this.Incoming.push("Being able to solve a hard problem");
  //   // this.Incoming.push("Good food");
  //   // this.Incoming.push("Fun game with friends");
  //   // this.Incoming.push("Good food");
  //   // this.Incoming.push("Being healthy");

  //   this.enableoutput = true;

  //   let FirstInput: number = 2;

  //   if (FirstInput = 2) {
  //     this.Incoming.push("Good food");
  //     this.Incoming.push("Being able to solve a hard problem");
  //     this.Incoming.push("Supportive parents");
  //     this.Incoming.push("Fun game with friends");
  //     this.Incoming.push("Good food");
  //     this.Incoming.push("Being healthy");
  //     let sortt = [];
  //     sortt = this.Incoming;

  //     console.log(this.Incoming);

  //     let s = 0;
  //     // let m = 1;
  //     this.Incoming.forEach(result => {
  //       var len = this.Incoming.length;
  //       // sortt = this.Incoming;

  //       // if (sortt.length != s) {
  //       let t = 0;
  //       let m: number;
  //       // result.forEach(result => {

  //       for (m = 1, len == t; m++;) {
  //         if (sortt[s] == sortt[m]) {
  //           this.Uploading.push(sortt[s]);
  //           // this.Uploading.push(result[m]);
  //           sortt[s] = "";
  //           sortt[m] = "";
  //           let c = 1;
  //           s++
  //           t++;
  //         }
  //       }
  //       // s++;
  //       // }
  //       //   if (result[t] == result[m]) {
  //       //     this.Uploading.push(result[s]);
  //       //     // this.Uploading.push(result[m]);
  //       //     result[s].pop();
  //       //     result[m].pop();
  //       //   }
  //       //   t++;
  //       //   m++;
  //       // }

  //       // m++;

  //       // else { }
  //     });
  //     // s++;
  //     // if (0)
  //     //   sortt.push({})
  //   }
  //   FirstInput = 1;
  // }
}
