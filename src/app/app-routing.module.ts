import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';


const routes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'styleBinding', component: StyleBindingComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
