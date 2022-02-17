import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    public storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }





  // Alert Error
  async presentAlertErrorCampos(data) {

    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      header: 'Atención',
      subHeader: '',
      message: data,
      buttons: ['Continuar']

    });

    await alert.present();
  }

  // Alert de respuesta
  async presentAlertRespuestaRegistro(data) {

    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      header: 'Atención',
      subHeader: '',
      message: data,
      buttons: ['Continuar']

    });

    await alert.present();

  }
  async showToast(msg) {

    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }
 

}
