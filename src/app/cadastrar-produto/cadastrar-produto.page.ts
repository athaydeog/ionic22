import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage {
  nomeProduto: string = '';
  quantidadeProduto: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  cadastrarProduto() {
    this.http.post('http://localhost:3000/produtos', {
      nome: this.nomeProduto,
      quantidade: this.quantidadeProduto,
    })
      .subscribe(() => {
        this.router.navigate(['/lista-produtos']);
      });
  }
}
