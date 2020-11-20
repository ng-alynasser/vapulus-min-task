import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const ANGULAR_MATERIAL_MODULES = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  exports: [...ANGULAR_MODULES, ...ANGULAR_MATERIAL_MODULES],
})
export class SharedModule {}
