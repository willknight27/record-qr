import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-popover-usuario',
  templateUrl: './popover-usuario.component.html',
  styleUrls: ['./popover-usuario.component.scss'],
})
export class PopoverUsuarioComponent implements OnInit {

  constructor( private router:Router,
                private popoverCtrl: PopoverController,
                private alertCtrl: AlertController,
                private dataLocal:DataLocalService) { }

  ngOnInit() {}
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      
      header: 'Confirmación',
      message: "¿Está seguro que desea salir?",
      buttons:
      [
        {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('usuario')
            localStorage.removeItem('isLogin');
            this.router.navigate(['/login'])
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });

    await alert.present();
  }

  onClick(){

    this.popoverCtrl.dismiss()
    this.presentAlert();

  }

}
