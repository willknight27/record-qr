import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(private api: ApiAsistenciaService,
    private storage: StorageService) { }
  
  // Usuarios
  usuarios:Usuario[];

  usuario:Usuario = {
    id: 0,
    nombre:  '',
    nombreUsuario: '',
    email: '',
    password: '',
    carrera: '',
    rut: '',
  };

  // Usuario conectado guardado en el localStorage
  usuarioConectado: string

  ngOnInit() { 
    this.cargarUsuario()
    this.getDatosUsuario()
  }

  ionViewDidEnter(){
    this.cargarUsuario()
    // Actualizar la lista de asistencias
    this.getDatosUsuario()

  }

  // Usuario cargado desde el localstorage
  cargarUsuario() {
    this.usuarioConectado = this.storage.getUsuario();
  }

  // Usuario conectado
  getDatosUsuario() {

    //Obtener a todos los usuarios
    this.api.getUsuarios().subscribe((data=>{
      this.usuarios= data;
      
      // Obtener objeto del usuario conectado
      const usuarioLogin = this.usuarios.find(usuario => usuario.nombreUsuario === this.usuarioConectado)
      
      this.usuario = usuarioLogin;
    }))

  }

}
