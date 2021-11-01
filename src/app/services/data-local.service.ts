import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage-angular'
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, from, of } from 'rxjs';
import { filter, switchMap} from 'rxjs/operators';



const STORAGE = 'userLogin'

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private storageReady = new BehaviorSubject(false);

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    this.storageReady.next(true);
  }

  getUsuario(){
    
    return this.storageReady.pipe(
      filter(ready=> ready),
      switchMap(_ =>{
        return from(this.storage.get(STORAGE)) || of('')
      })
    )


  }

  async setUsuario(usuario){

    return this.storage.set(STORAGE,usuario);
  }

  async removeUsuario(){
    return this.storage.remove(STORAGE)
  }


}
