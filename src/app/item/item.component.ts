import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Work Hard','Awadh','Siman')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
