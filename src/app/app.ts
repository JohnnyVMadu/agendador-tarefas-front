import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { TopMenu } from './shared/components/global/top-menu/top-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu],
  templateUrl:'./app.html',
  styleUrl:'./app.scss'
})
export class App {
  protected readonly title = signal('agendador-tarefas');
}
