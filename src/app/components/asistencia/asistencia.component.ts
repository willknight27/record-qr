import { Component, OnInit } from '@angular/core';
import { Asistencia, Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  panelOpenState = false;

  // Usuario conectado guardado en el localStorage
  usuarioConectado: string

  // Arrglo de asistencias
  asistencias:Asistencia[];
  todasAsistencias : Asistencia[]
  
  usuarios:Usuario[];


  constructor( private storage: StorageService, private api: ApiAsistenciaService ) { }

  ngOnInit() {
    this.cargarUsuario()
    this.verAsistencias()
    
  }

  ionViewDidEnter(){
    // Actualizar la lista de asistencias
    this.verAsistencias()
  }

  // Usuario cargado desde el localstorage
  cargarUsuario() {
    /* this.usuarioConectado = await this.dataLocal.getUsuario() */
    this.usuarioConectado = this.storage.getUsuario();
    

  }

  /* verAsistencias(){
    this.api.getAsistencias().subscribe((data=>{
      this.todasAsistencias= data;
    }))
  } */

  verAsistencias(){

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

    
  }


}
