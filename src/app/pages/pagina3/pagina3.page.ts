import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var datitos = this.activatedRoute.snapshot.paramMap.get('valor');
    //alert(datitos);
    this.buscar(datitos);
  }

  usuario = new FormGroup ({
    v_rut: new FormControl(''),
    v_nombre: new FormControl(''),
    v_edad: new FormControl('') 
  });

  buscar(rut:String){
    var datos = localStorage.getItem('datos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(';');
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var usuarios = JSON.parse(registro);
      if (usuarios.rut == rut) {
        this.usuario.controls.v_rut.setValue(rut);
        this.usuario.controls.v_nombre.setValue(usuarios.nombre);
        this.usuario.controls.v_edad.setValue(usuarios.edad);
      }      
    }
  }

  actualizar() {
    
  }
}
