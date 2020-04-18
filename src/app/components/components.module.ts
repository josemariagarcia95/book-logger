import { BookRowComponent } from './book-row/book-row.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule( {
  declarations: [ BookRowComponent ],
  imports: [
    CommonModule
  ],
  exports: [ BookRowComponent ]
} )
export class ComponentsModule {}
