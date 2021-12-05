import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Asistencia, Email, QrJSON, Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';
import { EmailService } from 'src/app/services/email.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.component.html',
  styleUrls: ['./escanear.component.scss'],
})
export class EscanearComponent implements OnInit {

  // nombre usuario conectado
  usuarioConectado: string
  usuarioID: number
  usuarios: Usuario[];

  // lista de todas las aistencias
  asistencias: Asistencia[];


  asistencia: Asistencia = {

    fecha: '',
    idCurso: '',
    idUsuario: null,
  }

  // Estructura QR JSON
  qrJSON: QrJSON = {

    idAsignatura: "",
    seccion: "",
    asignatura: "",
    docente: "",
    correo: "",
  }

  constructor(private storage: StorageService,
    private barcodeScanner: BarcodeScanner,
    private api: ApiAsistenciaService,
    private servicioEmail: EmailService) { }

  ngOnInit() {
    this.cargarUsuario()
  }

  cargarUsuario() {
    /* this.usuarioConectado = await this.dataLocal.getUsuario() */
    this.usuarioConectado = this.storage.getUsuario();
  }

  /* obtenerID() {
    this.api.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      const usuario: Usuario = this.usuarios.find(usuario => usuario.nombreUsuario === this.usuarioConectado);
      this.usuarioID = usuario.id;
    })
  } */


  scan() {

    console.log(this.usuarios)
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      this.api.getUsuarios().subscribe((data) => {
        this.usuarios = data;
        const usuario: Usuario = this.usuarios.find(usuario => usuario.nombreUsuario === this.usuarioConectado);
        this.usuarioID = usuario.id;

        this.asistencia.idUsuario = this.usuarioID;

        const fecha = new Date().toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).split(' ').join(' ');

        this.asistencia.fecha = fecha
        // this.asistencia.idCurso = barcodeData.text;

        /* Convertir el text del QR a objeto javascript*/
        this.qrJSON = JSON.parse(barcodeData.text)
        this.asistencia.idCurso = this.qrJSON.idAsignatura + '-' + this.qrJSON.seccion;



        // Obtener todas las asistencias para contar cuantos objetos tiene el array en firebase
        this.api.getAsistencias().subscribe((data) => {
          this.asistencias = data
          let conteo = this.asistencias.length

          this.api.postAsistencia(conteo, this.asistencia).subscribe(() => {
            console.log('asistencia creada')


            // formulario correo
            this.servicioEmail.email.to = this.qrJSON.correo;
            this.servicioEmail.email.cc = usuario.email;
            this.servicioEmail.email.body = `Asignatura: ${this.qrJSON.asignatura}\nSección: ${this.asistencia.idCurso}\nFecha Asistencia: ${fecha}`
            
            //Abrir app de correo
            this.servicioEmail.enviarEmail(this.servicioEmail.email);
          })
        })


      })

    }).catch(err => {
      console.log('Error', err);
    });
  }

  

}
