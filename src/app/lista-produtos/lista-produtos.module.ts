import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListaProdutosPageRoutingModule } from './lista-produtos-routing.module';
import { ListaProdutosPage } from './lista-produtos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListaProdutosPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ListaProdutosPage]
})
export class ListaProdutosPageModule {}

