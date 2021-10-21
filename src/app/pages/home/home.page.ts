import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  fecha = new Date;

  constructor( private router: Router) {

    this.router.navigate(['home/escanear']);
  }

  ngOnInit() {
  }



}
