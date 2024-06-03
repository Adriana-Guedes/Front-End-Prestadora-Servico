import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  //necessário importar o INPUT ( titulo que viram ou do html do formulario login ou cadastro)
 @Input() title: string = "";
 @Input() primaryBtnText: string = "";
 @Input() secondaryBtnText: string = "";

 //verifica se tem o minimo de caracteries da senha antes de habilitar o botão de LOGIN
 @Input() disablePrimaryBtn: boolean = true;

 //para o batão de enviar os dados para login
 @Output("submit") onSubmit = new EventEmitter(); //novo emissor de eventos

 //para o batão para direcionar o usuario para cadastro
 @Output("navigate") onNavigate = new EventEmitter(); //novo emissor de eventos


 //função submit para obtão de enviar
 submit(){
  this.onSubmit.emit();

 }

 navigate(){
  this.onNavigate.emit();

 }
}
