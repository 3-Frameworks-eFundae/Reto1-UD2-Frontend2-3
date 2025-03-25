export class Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;

    constructor(id: number, nombre: string, precio: number, categoria: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}