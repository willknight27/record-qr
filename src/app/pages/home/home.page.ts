import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverUsuarioComponent } from 'src/app/components/popover-usuario/popover-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  fecha = new Date;

  constructor(private router: Router,
              private popoverCtrl: PopoverController) {

    this.router.navigate(['home/escanear']);
  }

  ngOnInit() {
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
