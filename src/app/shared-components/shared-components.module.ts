import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowPopUpComponent } from './shadow-pop-up/shadow-pop-up.component';

@NgModule({
  declarations: [ShadowPopUpComponent],
  imports: [CommonModule],
  exports: [ShadowPopUpComponent],
})
export class SharedComponentsModule {}
