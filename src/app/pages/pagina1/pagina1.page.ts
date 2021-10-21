import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = new FormGroup({
    v_rut : new FormControl('', Validators.required),
    v_nombre : new FormControl('',[Validators.required, Validators.minLength(3)]),
    v_edad : new FormControl('', [Validators.required, Validators.min(0), Validators.max(130)])
  });

  lista_usuario = new Array();
  user: any;
  grabar() {
    this.user = {
      rut : this.usuario.controls.v_rut.value,
      nombre : this.usuario.controls.v_nombre.value,
      edad : this.usuario.controls.v_edad.value
    };
    this.lista_usuario.push(this.user);
    localStorage.setItem('datos', JSON.stringify(this.lista_usuario));
    alert('Usuario almacenado')

    this.usuario.controls.v_rut.setValue('');
    this.usuario.controls.v_nombre.setValue('');
    this.usuario.controls.v_edad.setValue('');
  }
}
