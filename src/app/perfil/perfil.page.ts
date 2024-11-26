import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/interfaces/users';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre:string="";
  email:string="";
  userData: any;

  modificarForm: FormGroup;
  imagenPerfil: string = ''; // String para almacenar la imagen seleccionada

  usuario: Users={
    id:0,
    rut:"",
    username:"",
    password:"",
    email:"",
    imagenPerfil:"",
    isactive: false
  }

  constructor(private menucontroller:MenuController, 
              private httpclient: HttpClient, 
              private router: Router, 
              private auth:AuthService,
              private alertcontroller: AlertController,
              private fBuilder: FormBuilder) {
                this.modificarForm = this.fBuilder.group({
                  'username': new FormControl ("", [Validators.minLength(6)]), //Opcional
                  'email': new FormControl ("", [Validators.email]), //Opcional
                  'password': new FormControl ("", [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]), //Opcional
                  'imagenPerfil': new FormControl("")  //Opcional
                })
              }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    this.obtenerData();
    console.log('Usuario leido: ',this.usuario)
    
  }

  EditarPerfil(){
    if (this.modificarForm.valid){
      this.auth.getByUsername(this.modificarForm.value.username).subscribe(resp=>{
        this.userData = resp; 
          this.usuario.username = this.modificarForm.value.username || this.usuario.username; //Se actualiza solo cuando no está vacio
          this.usuario.password = this.modificarForm.value.password || this.usuario.password; //Se actualiza solo cuando no está vacio
          this.usuario.email = this.modificarForm.value.email || this.usuario.email; //Se actualiza solo cuando no está vacio
          if (this.imagenPerfil){ 
            this.usuario.imagenPerfil = this.imagenPerfil;
          }
          this.auth.PutUsuario(this.usuario).subscribe();
          sessionStorage.setItem('username', this.usuario.username); //Actualiza el sessionStorage para mantener la sesión iniciada al editar el usuario
          this.modificarForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Perfil de usuario',
      message: 'Bienvenid@! ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  obtenerData(){
    this.auth.getByUsername(this.nombre).subscribe(resp =>{
      this.userData = resp
      this.usuario.id = this.userData[0].id
      this.usuario.username = this.userData[0].username;
      this.usuario.rut = this.userData[0].rut;
      this.usuario.password = this.userData[0].password;
      this.usuario.email = this.userData[0].email;
      if(!this.imagenPerfil){
        this.usuario.imagenPerfil = this.userData[0].imagenPerfil;
        this.imagenPerfil = this.usuario.imagenPerfil ?? '';
      }
      this.usuario.isactive = this.userData[0].isactive;
      console.log('usuario: ', this.usuario.username)
      console.log('id: ', this.usuario.id)
    
    });
  }
  
  mostrarMenu(){
    this.menucontroller.open('first');
  }

  async seleccionarImagen() {
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
  
    this.imagenPerfil = 'data:imagen/jpeg;base64,' + imagen.base64String;
  }

}