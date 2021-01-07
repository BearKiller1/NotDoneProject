import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  link = "https://jsonplaceholder.typicode.com/posts";
  data:any;
  tmp = Array();
  constructor(private http:HttpClient) { }

  geteach(id:any){
    return this.http.get(this.link +"?id="+id);
  }

}
