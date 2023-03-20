import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front angular';
  // // exibir na mesma tale
  selected_geral = { id: 0, name: '', linkedin: '', github: '' };

  gerals = [
    {
      name: 'Member 01',
      id: 1,
      linkedin: 'http://www.linkedin.com/1',
      github: 'http://www.github.com/1',
    },
    {
      name: 'Member 02',
      id: 2,
      linkedin: 'http://www.linkedin.com/1',
      github: 'http://www.github.com/1',
    },
  ];
  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }
  // buscar dados da api
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      (data) => {
        // mombers nome da tabela no banco
        this.gerals = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  };
  // adicionando o click
  menberClicked = (geral: any) => {
    this.router.navigate(['member-detail', geral.id]);
  };
}
