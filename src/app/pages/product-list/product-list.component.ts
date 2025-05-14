import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']  
})

// This class defines an Angular component that implements OnInit lifecycle hook
export class ProductListComponent implements OnInit {

  // Declare a property named 'products' which is an array of Product objects
  products: Product[] = [];

  // The constructor injects a service of type ProductService.
  // This is Angular's dependency injection at work, allowing the component to use the service.
  constructor(private productService: ProductService) {}

  // ngOnInit is a lifecycle hook that runs after the component is initialized.
  // It is the best place to load data from a server.
  ngOnInit(): void {
    
    // Call the getProducts method from the ProductService.
    // This method likely returns an Observable<Product[]>.
    // We subscribe to this Observable to receive the data when it's ready.
    // Once the data is received, we assign it to the products array.
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}

