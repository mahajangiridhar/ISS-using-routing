import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';
import { FairListComponent } from './shared/components/fair-list/fair-list.component';

const routes: Routes = [
  {path: '', component: FairDetailsComponent},
  {path: 'fair-list/:id', component: FairDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
