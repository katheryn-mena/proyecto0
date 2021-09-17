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

  grabar() {
    persona = new FormGroup({
      v_rut = new FormControl(''),
      v_nombre = new FormControl(''),
      v_edad = new FormControl('')
    })
  }

}
