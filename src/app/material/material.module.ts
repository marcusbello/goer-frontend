import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'


const materialModule = [
  MatToolbarModule
]


@NgModule({
  imports: [materialModule],
  exports: [materialModule]
})
export class MaterialModule { }
