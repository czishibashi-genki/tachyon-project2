import { Injectable } from '@angular/core';
import { Book } from '../domains/book';
import { SpreadsheetClient } from '../modules/spreadsheet-client.service'
// declare var gapi: any;
// import * as dataDrive from 'data-drive';

@Injectable()
export class BookService {
  sheetName = 'book';
  constructor(private sheetClient: SpreadsheetClient) {
    // let dd = require('data-drive')
  }

  findAll() {
    console.log('findAll');
    return this.sheetClient.get('book', 'A1:10');//.subscribe(
      // res => {
      //   return res.json().values.map( row => {
      //     return new Book(row[0]);
      //   });
    // let url = 'https://sheets.googleapis.com/v4/spreadsheets/1mUSW4E9sG3PWtOPSKnMIs42XquUusMSJU7MBLKdD78g/values/A1\?Authorization\=' + this.userAuthToken;
    // this.http.get(url)
    // .map(console.log(this.extractData);
    // console.log('search');
  }
}
