import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule } from '@angular/material/badge';
@NgModule({
  declarations: [ToolbarComponent,
    SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    ToolbarComponent,
    RouterModule,
    SpinnerComponent
  ]
})
export class SharedModule { }