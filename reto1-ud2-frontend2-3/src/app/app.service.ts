import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  listaProductos = [
    { id: 1, nombre: 'Producto B', precio: 14.99, categoria: 'B' },
    { id: 2, nombre: 'Producto D', precio: 9.99, categoria: 'A' },
    { id: 3, nombre: 'Producto A', precio: 29.99, categoria: 'A' },
    { id: 4, nombre: 'Producto E', precio: 5.99, categoria: 'C' },
    { id: 5, nombre: 'Producto C', precio: 7.99, categoria: 'B' }
  ];

  constructor() { }
}
