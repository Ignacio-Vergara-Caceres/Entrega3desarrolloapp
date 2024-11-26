import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  userdata: any;

  usuario ={
    id:0,
    username:"",
    password:"",
    rut:"",
    email:"",
    isactive: false
  }

  loginForm : FormGroup;    //es una clase

  constructor(private authservice: AuthService,
              private alertcontroller: AlertController,
              private toast: ToastController,
              private router: Router,
              private fbuilder: FormBuilder) {
                this.loginForm = this.fbuilder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(6)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8)])
                 })
               }

  ngOnInit() {
  }

  login(){
    
    if (!this.loginForm.valid){
      return
    }

    const username=this.loginForm.value.username;
    const password=this.loginForm.value.password;

    this.authservice.getuserbyusername(username).subscribe(resp => { 
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario={
        id: this.userdata[0].id,
        username: this.userdata[0].username,
        password: this.userdata[0].password,
        rut: this.userdata[0].rut,
        email:this.userdata[0].email,
        isactive: this.userdata[0].isactive
      }
      if (this.usuario.password !== password) {
        this.loginForm.reset();
        this.ErrorUsuario(); 
        return;
      }
      if (!this.usuario.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      this.IniciarSesion(this.usuario);
     })
  }//finmetodoLogin

  private IniciarSesion(usuario:any){
    sessionStorage.setItem('username', usuario.username);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('rut',usuario.rut);
    sessionStorage.setItem('email',usuario.email);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada '+ this.usuario.username);
    this.router.navigate(['/home']);

  }

  
  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  
  async UsuarioInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }

  
async ErrorUsuario(){
  const alerta = await this.alertcontroller.create({ 
    header : 'Error..',
    message : 'Revise sus credenciales',
    buttons : ['OK']
  })
  alerta.present();
}

async UsuarioNoExiste(){
  const alerta = await this.alertcontroller.create({ 
    header : 'No existe...',
    message : 'Debe registrarse..',
    buttons : ['OK']
  })
  alerta.present();
}
}