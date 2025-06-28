import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = '/api/brand';

  constructor(private http: HttpClient) {}

  getAllBrands() {
    return this.http.get<any>(`${this.apiUrl}/getallbrands`);
  }



  storeBrand(data: { brand_name: string; description: string }) {
    return this.http.post(`${this.apiUrl}/storebrand`, data);
  }
}

