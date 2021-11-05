import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(private api: ApiAsistenciaService,
    private dataLocal: DataLocalService) { }
  
  // Usuarios
  usuarios:Usuario[];
  usuario:Usuario;

  // Usuario conectado guardado en el localStorage
  usuarioConectado: string

  ngOnInit() { 
    this.cargarUsuario()
    this.getDatosUsuario()
  }

  // Usuario cargado desde el localstorage
  async cargarUsuario() {
    /* this.usuarioConectado = await this.dataLocal.getUsuario() */
    this.dataLocal.getUsuario().subscribe(data => {
      this.usuarioConectado = data;
    })
  }

  // Usuario conectado
  getDatosUsuario() {

    //Obtener a todos los usuarios
    this.api.getUsuarios().subscribe((data=>{
      this.usuarios= data;

      // Obtener objeto del usuario conectado
      let usuario = this.usuarios.find(usuario => usuario.nombreUsuario === this.usuarioConectado)
      this.usuario = usuario
    }))

  }

}
