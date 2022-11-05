import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:44363/api/'

  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategoryid/?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+ "products/add", product)
  }
}
//biz burda apimizle bağlantı kuruyoruz 

