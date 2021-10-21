import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  private animation: AnimationItem;

  options: AnimationOptions = {
    path:'assets/lottie/animation-404.json'
  }

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  

}
