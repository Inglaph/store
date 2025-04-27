import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

class Product {
  id: number;
  title: string;
  price: number;
  image: string;

  constructor(id: number, title: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products = [
    new Product(1, 'Product 1', 100, '../../../../../assets/images/products/1-DT40-2-F.png'),
    new Product(2, 'Product 2', 200, '../../../../../assets/images/products/2-DT40-2-N.png'),
    new Product(3, 'Product 3', 300, '../../../../../assets/images/products/3-FLT25-F.png'),
    new Product(4, 'Product 4', 400, '../../../../../assets/images/products/4-FLT25-N.png'),
    new Product(5, 'Product 5', 100, '../../../../../assets/images/products/1-DT40-2-F.png'),
    new Product(6, 'Product 6', 200, '../../../../../assets/images/products/2-DT40-2-N.png'),
    new Product(7, 'Product 7', 300, '../../../../../assets/images/products/3-FLT25-F.png'),
    new Product(8, 'Product 8', 400, '../../../../../assets/images/products/4-FLT25-N.png'),
  ];

  fromChild(event: string) {
    console.log('desde el padre');
    console.log(event);
  }
}
