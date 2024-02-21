import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseurl="https://sheetdb.io/api/v1/xw81dsw9iuuva";
  HttpClient: any;
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Food[]>{
     return this.http.get<Food[]>(this.baseurl);
    
    }
    
  }

