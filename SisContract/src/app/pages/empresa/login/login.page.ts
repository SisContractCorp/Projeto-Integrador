import { Component, OnInit } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';

import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private _route : Router,
    private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    private _auth : Auth,
    private _empresaFBS : EmpresaService,
    private alertController: AlertController,
    private formBuilder : FormBuilder,
    private _router: Router,
    private myApp:AppComponent) {
  }
  cpf_cnpj: number;
  isSubmitted: boolean;
  decimal_Section: string = '.';
  confirm_digit: string = '-';
  second_partCNPJ: string = '/';
  form_login: FormGroup;
  auth = getAuth();

  //login por cpf e cnpj, ver quantidade de numeros ... cpf 11 - cnpj 14

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.form_login = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
    })
  }

  get errorControl(){
    return this.form_login.controls;
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastro"]);
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.form_login.valid){
      this.presentAlert('SisContract', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.authLogin();
    }
  }

  async authLogin(){
    this._empresaFBS.loginFB(this.form_login.controls['email'].value,this.form_login.controls['senha'].value).then((credenciais)=>{
      const uuser = credenciais.user;
      this.myApp.tipoUser("j");
      //console.log(uuser);
      this._router.navigate(['/empresahome']);
    }).catch((err)=>{
      console.log(err);
      this.presentAlert('SisContract','falha no cadastro','Tente novamente.');
    })
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  onClick(){
    this._router.navigate(['/recuperar-senhaEmpresa']);
  }
}
