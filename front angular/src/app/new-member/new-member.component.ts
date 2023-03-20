import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from '../members-detail/api.service';
@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private appComponente: AppComponent
  ) {}
  selected_geral = { id: '', name: '', linkedin: '', github: '' };
  selected_id: any;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id')!);
      this.selected_id = id;
      this.loadMenber(id);
    });
  }
  // metodo get - mostrar na tela
  loadMenber(id: any) {
    this.api.getMember(id).subscribe(
      (data) => {
        // mombers nome da tabela no banco
        // console.log(data);
        this.selected_geral = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }
  // metodo PUT- atualizar
}
