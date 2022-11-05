import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiLoading = false;
  filterText = "";
  constructor(private productService: ProductService,
     private activatedRoute: ActivatedRoute, 
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductByCategory(params["categoryId"]);
      } else {
        this.getProduct();
      }
    })
  }

  getProduct() {
    this.productService.getProduct().subscribe(response => {
      this.products = response.data;
      this.apiLoading = true;
    })
  }
  getProductByCategory(categoryId: number) {
    this.productService.getProductByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.apiLoading = true;
    })// biz burda servislerden gelen bilgileri alıp htmlde göstermeye çalışıyoruz 
  }

  addToCat(product:Product){
    this.toastrService.success("Eklendi",product.productName);
    this.cartService.addToCart(product);
  }

}
