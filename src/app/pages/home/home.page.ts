import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverUsuarioComponent } from 'src/app/components/popover-usuario/popover-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioConectado: string;
  //fecha = new Date;

  constructor(private router: Router,
    private popoverCtrl: PopoverController,
    private activedRouter: ActivatedRoute) {

    this.activedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //asignar parametro del nombre de usuario
        this.usuarioConectado = this.router.getCurrentNavigation().extras.state.usuarioValido;
      }
    });

}

ngOnInit() {
  // this.router.navigate(['home/escanear']);
}

  async presentPopover(ev: any) {
  const popover = await this.popoverCtrl.create({
    component: PopoverUsuarioComponent,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true,
    mode: 'ios'
  });
  await popover.present();


}


}
