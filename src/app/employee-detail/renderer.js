let { remote } = require("electron");
const { PosPrinter } = remote.require("electron-pos-printer");
import { HomeComponent } from '../home/home.component';

// let webContents = remote.getCurrentWebContents();
// let printers = webContents.getPrinters(); //list the printers
// console.log(printers);
let { ItemData } = require('../home/home.component');

const items = HomeComponent.prototype.ItemData;
// console.log(ItemData)
const item = [{
        "Trans_ID": 0,
        "Staff_ID": 333,
        "Number": 13248,
        "VAT_Code": null,
        "Description": "YELLOW PLANTAIN",
        "Price": 1.99,
        "Quantity": 1
    },
    {
        "Trans_ID": 0,
        "Staff_ID": 333,
        "Number": 13248,
        "VAT_Code": null,
        "Description": "YELLOW PLANTAIN",
        "Price": 1.99,
        "Quantity": 1
    },
    {
        "Trans_ID": 0,
        "Staff_ID": 333,
        "Number": 13248,
        "VAT_Code": null,
        "Description": "YELLOW PLANTAIN",
        "Price": 1.99,
        "Quantity": 1
    }
]

currentDate = []

function date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    // todayTime = mm + '/' + dd + '/' + yyyy + '  ' + HH + MM;
    console.log(today)
        // console.log(todayTime)
    currentDate.push(today);
}
date();
const itemsList = []
for (a in items) {
    itemsList.push([items[a].Description, items[a].Quantity, items[a].Price]);
}
const itemsSubtotal = ['5.10', '3.21']
const ItemTable = {
    type: 'table',
    // style the table
    style: 'text-align:left',
    // list of the columns to be rendered in the table header
    tableHeader: ['Item', 'Quantity', 'Price'],
    // multi dimensional array depicting the rows and columns of the table body
    tableBody: itemsList,
    // custom style for the table header
    tableHeaderStyle: 'visibility:collapse',
    // custom style for the table body
    tableBodyStyle: 'border: 0.5px solid #ddd',
    css: { "font-weight": "700", "font-size": "12px", "text-align": "center" },
    // custom style for the table footer
    tableFooterStyle: 'background-color: #000; color: white;',
}
const data = [{
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'SPICE OF ASIA',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px", "color": "black" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: '54 JOHN STREET',
        position: 'center',
        style: `text-align:center`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'ABERDEEN AB25 1LL',
        position: 'center',
        style: `text-align:center`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `TEL: 01224 645654`,
        // value: `TEL - ${items[0].Number}`,
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `OPEN:  MON-SAT  9AM-9PM _ SUN 10AM-8PM`,
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "13px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: '----------------------------------------------------------',
        //position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    // Trans ID // staff id
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `TRANS ID - ${items[0].Trans_ID}`,
        position: 'left',
        style: `margin-left: 35px`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `STAFF ID - ${items[0].Staff_ID}`,
        //position: 'left',
        style: `margin-left: 35px;`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: `${currentDate[0]}`,
        //position: 'left',
        css: { "font-size": "15px", "margin-left": "235px", "margin-top": "-19px", "margin-bottom": "6px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: '----------------------------------------------------------',
        //position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    ItemTable,
    {

        type: 'table',
        // style the table
        style: 'border: 1px solid #ddd',
        // list of the columns to be rendered in the table header
        tableHeader: ['SubTotal', 'Cash payment'],
        // multi dimensional array depicting the rows and columns of the table body
        tableBody: [itemsSubtotal],
        css: { "font-weight": "700", "font-size": "18x" },
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: '----------------------------------------------------------',
        //position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    {

        type: 'text',
        value: `* Number of Items ${items.length} *`,
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "18px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: '----------------------------------------------------------',
        //position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'Thank you for your custom!',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "16px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'Please Come Again!',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "16px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'Please keep the receipt to retun the item',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "16px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'RETURN NOT ACCEPTED FOR VEG, CHILLED & FROZEN FOODS ITEMS',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
    {
        type: 'text', // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'VAT  315061737',
        position: 'center',
        style: `text-align:center;`,
        css: { "font-size": "15px" }
    },
]


function print() {
    // var parentDOM = document.getElementById('printerConfig');
    // let printers = webContents.getPrinters(); //list the printers
    // console.log(printers);

    // printers.map((item, index) => {
    //     //write in the screen the printers for choose
    //     document.getElementById("list_printers").innerHTML +=
    //         ' <input type="radio" id="printer_' +
    //         index +
    //         '" name="printer" value="' +
    //         item.name +
    //         '"><label for="printer_' +
    //         index +
    //         '">' +
    //         item.name +
    //         "</label><br>";
    // });
    // console.log(ItemData)
    console.log('Print Works');

    let printerName = 'CITIZEN CT-E351';
    const options = {
        preview: false, // Preview in window or print
        width: '320px', //  width of content body
        //margin: '0 0 0 2px',
        copies: 1, // Number of copies to print
        printerName: printerName, // printerName: string, check it at webContent.getPrinters()
        timeOutPerLine: 400,
        silent: true,
        //pageSize: { height: 301000, width: 71000 }  // page size
    };

    // const now = {
    //   type: "text",
    //   value: "" + date(),
    //   style: `text-align:center;`,
    //   css: { "font-size": "12px", "font-family": "sans-serif" },
    // };

    //const d = [...data, now];
    PosPrinter.print(data, options)
        .then(() => {})
        .catch((error) => {
            console.error(error);
        });
    // if (printerName && widthPage) {

    // } else {
    //   alert("Select the printer and the width");
    // }
}


export default onprint;