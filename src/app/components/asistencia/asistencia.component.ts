import { Component, OnInit } from '@angular/core';
import { Asistencia, Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  // Usuario conectado guardado en el localStorage
  usuarioConectado: string

  // Arrglo de asistencias
  //asistencias:Asistencia[];
  todasAsistencias : Asistencia[]
  //usuarios:Usuario[];


  constructor( private dataLocal: DataLocalService, private api: ApiAsistenciaService ) { }

  ngOnInit() {
    this.cargarUsuario()
    this.verAsistencias()
  }


  async cargarUsuario() {
    /* this.usuarioConectado = await this.dataLocal.getUsuario() */
    this.dataLocal.getUsuario().subscribe(data => {
      this.usuarioConectado = data;
    })

  }

  verAsistencias(){
    this.api.getAsistencias().subscribe((data=>{
      this.todasAsistencias= data;
    }))
  }

  /* verAsistencias(){

    //obtener id de usuario segun su nombre
    this.api.getUsuarios().subscribe((data)=>{
      this.usuarios =data
      let usuario = this.usuarios.find(usuario => usuario.nombreUsuario === this.usuarioConectado)
      let id = usuario.id

      // Obtener todos las asistencias
      this.api.getAsistencias().subscribe((data)=>{
        this.todasAsistencias = data
        console.log(this.todasAsistencias)
        // obtener las aistencias segun el id del usuario logeado
        this.asistencias = this.todasAsistencias.filter(lista => lista.idUsuario == id)
      })

    })

    
  } */


}
