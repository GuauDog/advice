import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: any;
  password: any;
  constructor(
    private GnService: GeneralService,
    private router: Router,
    private storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }


  async continue() {
    //Validacion User
    if (this.email == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Correo Electronico no puede estar vacio.');
      return false;
    }

    if (this.password == undefined) {
      this.GnService.presentAlertErrorCampos('El campo Contraseña no puede estar vacio.');
      return false;
    }

    this.Login();

  }

  Login() {

    this.storage.get('Data-User').then((val) => {

      console.log('Your age is', val);

      if (val == null) {

        this.GnService.presentAlertErrorCampos('El usuario no existe por favor Registrese en este dispositivo.');
        return false;

      }

      if (this.email === val.Email && this.password === val.contrasena) {

        this.GnService.presentAlertErrorCampos('sesion iniciada');

        this.router.navigate(['./home']);

      } else {

        this.GnService.presentAlertErrorCampos('El usuario no existe por favor Registrese en este dispositivo.');

      }

    });


  }



  RouterRegistro() {

    this.router.navigate(['registro']);

  }
}


