

import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


interface LoginForm{
  email:FormControl,
  senha:FormControl,

}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService,


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm> ;//INTERROGAÇÃO PARA DIZER QUE ISSO SERA DECLARO EM ALGUM MOMENTO




  //construtor para formulário de login via reactive Forms Module ( necessário inporta-lo)
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService


  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]) //nenhuma senha pode ser menor que 6 caracteries

    })


  }

  //função submit
  submit(){

    this.loginService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe({
      next:() => this.toastrService.success("Login realizado com sucesso!"),
      error: ()=> this.toastrService.error("Erro inesperado! Tente novamente")
    })


  }

    //função de inscrição
    navigate(){
     this.router.navigate(["signup"]) //direciona p pagina de isncrição ( precisa ser um aray)

    }



 }
