import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  about1:aboutInfo[]=[];
  about2:aboutInfo[]=[];
  facts:factsInfo[]=[];
  skills:skillsInfo[]=[];
  Services:ServicesInfo[]=[];
  constructor(private apiCaller:HttpClient){}
  
  ngOnInit() {
    this.aboutData();
    this.factsData();
    this.SkillsData();
    this.ServicesData();
  }

aboutData(){
  this.apiCaller.get('http://localhost:3000/about')
     .subscribe((d : any)=>{
   for (let i = 0; i < 4; i++) {
    var a = new aboutInfo();
   a.first=d.Sheet1[i]['A'];
   a.second=d.Sheet1[i]['B'];
   this.about1.push(a);
   }
   for (let i = 4; i < d.Sheet1.length; i++) {
    var ab = new aboutInfo();
   ab.first=d.Sheet1[i]['A'];
   ab.second=d.Sheet1[i]['B'];
   this.about2.push(ab);
   }
     })

}


factsData(){
  this.apiCaller.get('http://localhost:3000/facts')
  .subscribe((d : any)=>{
for (let i = 0; i < d.Sheet2.length; i++) {
 var a = new factsInfo();
a.up=d.Sheet2[i]['A'];
a.down=d.Sheet2[i]['B'];
this.facts.push(a);
}
  })
}

SkillsData(){
  this.apiCaller.get('http://localhost:3000/skills')
  .subscribe((d : any)=>{
for (let i = 0; i < d.Sheet3.length; i++) {
 var a = new skillsInfo();
a.name=d.Sheet3[i]['A'];
a.percent=d.Sheet3[i]['B'];
this.skills.push(a);
}
  })
}

ServicesData(){
  this.apiCaller.get('http://localhost:3000/Services')
  .subscribe((d : any)=>{
for (let i = 0; i < d.Sheet4.length; i++) {
 var a = new ServicesInfo();
a.f=d.Sheet4[i]['A'];
a.s=d.Sheet4[i]['B'];
a.time=d.Sheet4[i]['C'];
this.Services.push(a);

}
})
}

}



class aboutInfo{

  first:string='';
  second:string='';
}
class factsInfo{
  up:string='';
  down:string='';

}

class skillsInfo{
  name:string='';
  percent:string='';

}
class ServicesInfo{
  f:string='';
  s:string='';
  time:number=0;
}