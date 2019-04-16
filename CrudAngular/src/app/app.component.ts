import { Component } from '@angular/core';
import {Libreria } from './models/libreria';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  libreriaArray : Libreria[] = [];

  selectedLibros: Libreria = new Libreria();

  openForEdit(libreria: Libreria){
    this.selectedLibros = libreria;
  }

  addOrEdit(){
    if(this.selectedLibros.id === 0){
      this.selectedLibros.id = this.libreriaArray.length + 1;
      this.libreriaArray.push(this.selectedLibros);
    }
    this.selectedLibros = new Libreria();
  }

  deleted(){
    this.libreriaArray = this.libreriaArray.filter(x => x != this.selectedLibros);
    this.selectedLibros = new Libreria();
  }
}
