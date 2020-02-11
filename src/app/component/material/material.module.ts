import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
