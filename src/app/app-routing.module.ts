import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgetsListComponent } from './gadgets-list/gadgets-list.component';
import { CreateGadgetsComponent } from './create-gadgets/create-gadgets.component';
import { EditGadgetsComponent } from './edit-gadgets/edit-gadgets.component';

const routes: Routes = [
  {path:'gadgets-list',component:GadgetsListComponent},
  {path:'create-gadgets',component:CreateGadgetsComponent},
  {path:'edit-gadgets/:id',component:EditGadgetsComponent},
  {path:'',redirectTo:'gadgets-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
