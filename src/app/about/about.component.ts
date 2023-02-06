import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 @Input() first:string='';
 @Input() second:string='';
  
  constructor(private apiCaller:HttpClient){}
  
  
  ngOnInit() {
    
  }


}


