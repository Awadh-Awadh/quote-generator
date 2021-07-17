import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Work Hard','Awadh','Siman', new Date(1988,12,12))
    
  ]
  vote: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
    this.vote += this.vote;
    
  }
  deleteGoal(index){
    this.quotes.splice(index,1)
  }
}
