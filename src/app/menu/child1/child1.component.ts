import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  info:any;
  start = 12;
  end = 22;
  
  foundInArray = 0;
  foundInDB = 0;
  
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.info = [];
    for (let i = this.start; i <= this.end; i++) {
      console.log("index -> " + i);
      
      this.Obj.geteach(i).subscribe( (data:any) => {
        console.log(data);
        // [0] imitom rom json array 0 & 1 elementisgan aris consoleshi
        this.info.push(data[0]);
        
        console.log(this.info);
      });
    }
  }
  
  search(key:any){
    var keyword = key.target.value; // get inserted data from input
    for (let i = 0; i < this.info.length; i++) {
      if(keyword == this.info[i].title) // if inserted data is into the array we found
        this.foundInArray = this.info[i].id;
    }
    
  }
  
  searchByApi(key:any){
    var keyword = key.target.value;
    
    this.Obj.geteach(keyword).subscribe( (data:any) => {
      this.foundInDB = data[0].title;
    });
  }
  
}
