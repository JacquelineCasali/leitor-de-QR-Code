import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css'],
})
export class MembersDetailComponent implements OnInit {
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
  update() {
    this.api.updateMember(this.selected_geral).subscribe(
      (data) => {
        // mombers nome da tabela no banco

        console.log(data);
        this.selected_geral = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  // newMember() {
  //   this.router.navigate(['new-member', geral.id]);
  // }
  newMember = (selected_geral: any) => {
    this.router.navigate(['new-member', selected_geral.id]);
  };

  qrcodeMember = () => {
    this.router.navigate(['qrcode']);
  };

  // deletar membro
  delete() {
    this.api.deleteMember(this.selected_id).subscribe(
      (data) => {
        //  deletando menbro
        let index;
        this.appComponente.gerals.forEach((e, i) => {
          if (e.id == this.selected_id) index = i;
        });
        this.appComponente.gerals.splice(1);
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }
}
