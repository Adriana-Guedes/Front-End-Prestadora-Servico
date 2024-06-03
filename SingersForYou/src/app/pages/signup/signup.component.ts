

import { LoginService } from '../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



interface SignupForm{
  nome:FormControl,
  email:FormControl,
  senha:FormControl,
  senhaConfirm:FormControl
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService,


  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;//INTERROGAÇÃO PARA DIZER QUE ISSO SERA DECLARO EM ALGUM MOMENTO




  //construtor para formulário de login via reactive Forms Module ( necessário inporta-lo)
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService


  ){
    this.signupForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]), //nenhuma senha pode ser menor que 6 caracteries
      senhaConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]) //nenhuma senha pode ser menor que 6 caracteries


    })


  }

  //função submit
  submit(){

    this.loginService.login(this.signupForm.value.email, this.signupForm.value.senha).subscribe({
      next:() => this.toastrService.success("Login realizado com sucesso!"),
      error: ()=> this.toastrService.error("Erro inesperado! Tente novamente mais tarde!")
    })


  }

    //função de inscrição
    navigate(){
     this.router.navigate(["login"]) //direciona p pagina de isncrição ( precisa ser um aray)

    }



 }
