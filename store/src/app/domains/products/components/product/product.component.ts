import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: number;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('add to cart');
    this.addToCart.emit('Este es un mensaje del componente hijo ' + this.title);
  }
}
