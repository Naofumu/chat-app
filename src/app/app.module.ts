import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AppModule { }
