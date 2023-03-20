import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
})
export class QrcodeComponent {
  constructor(
    private route: ActivatedRoute,

    private router: Router
  ) {}
  selected_geral = { id: '', name: '', linkedin: '', github: '' };

  url: SafeUrl = '';
  onChangeURL(url: SafeUrl) {
    console.log(url);
    this.url = url;
  }
  newMember = (selected_geral: any) => {
    this.router.navigate(['new-member', selected_geral.id]);
  };
}
