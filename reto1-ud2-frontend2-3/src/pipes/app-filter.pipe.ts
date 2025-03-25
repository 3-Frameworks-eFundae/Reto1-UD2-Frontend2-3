import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class AppFilterPipe implements PipeTransform {

  transform(listaProductos: any[], filtro: string | null, texto: string | null = null): any[] {
    if (filtro == null || texto == null) {
      return listaProductos;
    }

    let nuevaLista = filtro == "precio" || filtro == "id"
      ? listaProductos.filter(producto => producto[filtro] == texto) 
      : listaProductos.filter(producto => producto[filtro].toUpperCase().includes(texto.toUpperCase()));

    if (nuevaLista.length == 0) {
      return listaProductos;
    }
    return nuevaLista;
  }


}
