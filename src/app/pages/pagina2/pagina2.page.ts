import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private router: Router) { }

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
    this.router.navigate(['/pagina3',rut])
  }

  eliminar(rut:String) {
    var datos = localStorage.getItem('datos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(';');
    var user;
    var lista_temp = new Array();

    for(let index = 0; index <arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var usuarios = JSON.parse(registro);
      user= {
        rut: usuarios.rut,
        nombre: usuarios.nombre,
        edad: usuarios.edad
      };
      if (usuarios.rut != rut) {
        lista_temp.push(user);
      }
    }
    this.lista_usuario = lista_temp;
    localStorage.setItem('datos', JSON.stringify(this.lista_usuario));
    alert('Persona eliminada: ' +rut);
  }    
    

  listar() {
    var datos = localStorage.getItem('datos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(';');
    var user;
    var lista_temp = new Array();

    for(let index = 0; index <arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var usuarios = JSON.parse(registro);
      user= {
        rut: usuarios.rut,
        nombre: usuarios.nombre,
        edad: usuarios.edad
      };
      lista_temp.push(user);
    }
    this.lista_usuario = lista_temp;
  }


}
