import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  v_rut = new FormControl('');
  v_nombre = new FormControl('');
  v_edad = new FormControl('');

  usuario = new FormGroup({
    v_rut : new FormControl(''),
    v_nombre : new FormControl(''),
    v_edad : new FormControl('')
  });

  lista_usuario = new Array();
  user: any;
  grabar() {
    console.log('Comienzo el proceso');
    this.user = {
      rut : this.usuario.controls.v_rut.value,
      nombre : this.usuario.controls.v_nombre.value,
      edad : this.usuario.controls.v_edad.value
    };
    console.log(this.user);
    this.lista_usuario.push(this.user);
    localStorage.setItem('datos', JSON.stringify(this.lista_usuario));
  }
}
