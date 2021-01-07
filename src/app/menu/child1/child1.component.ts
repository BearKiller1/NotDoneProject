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
  test:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    for (let i = this.start; i < this.end; i++) {
      this.Obj.geteach(i).subscribe( (data:any) => {
        var tmp = data;
        this.test.push(tmp);
        console.log(this.test);
      });
    }
  }

}
