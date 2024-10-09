import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaInterativaComponent } from './lista-interativa/lista-interativa.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaInterativaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
