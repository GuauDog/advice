import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage';
import { GeneralService } from '../services/general.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  id: number;
  nombre: string;
  email: string;
  passwordCon: string;
  password: string;

  constructor(
    private GnService: GeneralService,
    private storage: Storage,
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private storageService: StorageService,

  ) { }



  Registrar() {
    //validacion de campos vacios en registro usuario
    if (this.nombre == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Nombre no puede estar vacio.');
      return false;
    }

    if (this.email == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Correo Electronico no puede estar vacio.');
      return false;
    }

    if (this.password == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Telefono no puede estar vacio.');
      return false;
    }

    if (this.passwordCon == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Contraseña no puede estar vacio.');
      return false;
    }
    if (this.password  != this.passwordCon ) {
      this.GnService.presentAlertErrorCampos('Las contraseñas no son iguales');
      return false;
    }

    this.addUser();
  }

  addUser() {

    let DataUser = {
      Nombre: this.nombre,
      Email: this.email,
      contrasena: this.password,
    }


    //Registro usuario tipo Basico
    this.storage.set('Data-User', DataUser);


    this.GnService.presentAlertRespuestaRegistro('El usuario fue registrado correctamente');
    this.router.navigate(['login']);

  }

  Cancelar() {

    this.router.navigate(['login']);

  }

}
