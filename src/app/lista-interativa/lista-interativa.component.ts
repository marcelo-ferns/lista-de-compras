import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Item {
  nome: string;
  comprado: boolean;
}

@Component({
  selector: 'app-lista-interativa',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './lista-interativa.component.html',
  styleUrls: ['./lista-interativa.component.css']
})
export class ListaInterativaComponent {

  listaCompras = new FormGroup({
    item: new FormControl('', Validators.required),
  });

  lista: Item[] = [];
  indiceEdicao: number | null = null;

  adcItem() {
    const itemCampo = this.listaCompras.get('item')?.value;

    if (itemCampo) {
      if (this.indiceEdicao !== null) {
        this.lista[this.indiceEdicao].nome = itemCampo;
        this.indiceEdicao = null;
      } else {
        this.lista.push({ nome: itemCampo, comprado: false });
      }
      this.listaCompras.reset();
    }
  }

  prepararEdicao(indice: number) {
    this.indiceEdicao = indice;
    this.listaCompras.get('item')?.setValue(this.lista[indice].nome);
  }

  salvarEdicao() {
    if (this.indiceEdicao !== null && this.listaCompras.valid) {
      this.lista[this.indiceEdicao].nome = this.listaCompras.get('item')?.value!;
      this.indiceEdicao = null;
      this.listaCompras.reset();
    }
  }

  cancelarEdicao() {
    this.indiceEdicao = null;
    this.listaCompras.reset();
  }

  removerItem(indice: number) {
    this.lista.splice(indice, 1);
  }

  marcarComprado(indice: number) {
    this.lista[indice].comprado = !this.lista[indice].comprado;
  }
}
