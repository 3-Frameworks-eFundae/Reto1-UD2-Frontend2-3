import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AppFilterPipe } from '../pipes/app-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AppFilterPipe, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Reto1-UD2-Frontend2-3';
  listaProductos: any[];
  filtro: string | null = null;
  texto: string | null = null;

  constructor(appService: AppService) {
    this.listaProductos = appService.listaProductos;
  }

}
