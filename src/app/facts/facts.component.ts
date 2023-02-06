import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
@Input() up:string='';
@Input() down:string='';

constructor(){}
  ngOnInit(){
 
  }


}
