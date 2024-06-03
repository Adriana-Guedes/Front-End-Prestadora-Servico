import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /*LOGICA  P ENVIAR OS DADOS DE LOGIN P BACK END E PEGAR O RETORNO DO BACK END
  SALVANDO O TOKEN NA SESSÃO DO USUARIO*/
  constructor( private httpClient: HttpClient) { } //necessário importar HttpClient no app.config


  //função vai receber os paramentros
  login(name: string, password: string){
    return this.httpClient.post<LoginResponse>("/login", {name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token) //salva o token na sessão
        sessionStorage.setItem("username", value.name) //salva o nome na sessão

      })

    )
  }
}
