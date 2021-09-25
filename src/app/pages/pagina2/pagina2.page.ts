import { Component, OnInit } from '@angular/core';
import { EADDRINUSE } from 'constants';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    this.listar();
  }

  lista_usuario = [
    {
      rut: "19921988-k",
      nombre: "Katheryn",
      edad: 22     
  },{
      rut: "17616631-2",
      nombre: "Vicente",
      edad: 30
  },{
      rut: "11798904-6",
      nombre: "Erica",
      edad: 52
  },{
      rut: "23086770-4",
      nombre: "Josue",
      edad: 12
  },{
      rut: "6796217-4",
      nombre: "Justo",
      edad: 61
  }];

  actualizar(rut:String) {
    alert('Ha dado click en actualizar' + rut);
  }

  eliminar(rut:String) {
    alert('Ha dado click en eliminar' + rut);
  }

  listar() {
    var datos = localStorage.getItem('datos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(';');
    var usua;
    var lista_temp = new Array();

    for(let index = 0; index <arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var usuarios = JSON.parse(registro);
      usua= {
        rut: usuarios.rut,
        nombre: usuarios.nombre,
        edad: usuarios.edad
      };
      lista_temp.push(usua);
    }
    this.lista_usuario = lista_temp
  }


}
