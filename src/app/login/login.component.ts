import { Component, OnInit, HostListener, } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  titulo_login="Tela Login"
  nome="";
 
  
  consultaLoginSenha(){
    alert(this.nome);
  }


  constructor() { }

  ngOnInit() {
  }

}
