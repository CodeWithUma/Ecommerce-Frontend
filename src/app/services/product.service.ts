import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root', // Makes it available app-wide
})

// This class provides product-related data and operations.
// It's meant to be injected into components or other services that need product data.
export class ProductService {

  // The constructor injects Angular's HttpClient service, used for making HTTP requests.
  constructor(private http: HttpClient) {}

  // This method returns an Observable that emits an array of Product objects.
  // It performs an HTTP GET request to fetch product data from the given JSON file.
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}

