import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'member-detail/:id', component: MembersDetailComponent },
  // { path: 'new-member', component: NewMemberComponent },

  { path: 'new-member/:id', component: NewMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MembersDetailComponent];
