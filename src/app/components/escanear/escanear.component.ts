import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.component.html',
  styleUrls: ['./escanear.component.scss'],
})
export class EscanearComponent implements OnInit {

  usuarioConectado:string

  constructor( private dataLocal: DataLocalService ) { }

  ngOnInit() {
    this.cargarUsuario()
  }

  async cargarUsuario(){
    /* this.usuarioConectado = await this.dataLocal.getUsuario() */
    this.dataLocal.getUsuario().subscribe(data =>{
      this.usuarioConectado = data;
    })
    
  }

}
