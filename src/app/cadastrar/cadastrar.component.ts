import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { User } from "../model/User"
import { AuthService } from "../service/auth.service"

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  confirmarSenha: string
  tipouser: string
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
    console.log(this.confirmarSenha)
  }

  tipoUser(event: any){
    this.tipouser = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipouser

    if (this.user.senha != this.confirmarSenha){
      alert('Senhas não coincidem')
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário cadastro com sucesso!')
        this.router.navigate(['/login'])
      })
    }

  }

}