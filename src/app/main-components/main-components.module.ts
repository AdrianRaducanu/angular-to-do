import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { AllToDoComponent } from './all-to-do/all-to-do.component';
import { OneToDoComponent } from './one-to-do/one-to-do.component';
import { SearchToDoComponent } from './search-to-do/search-to-do.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    AddToDoComponent,
    AllToDoComponent,
    OneToDoComponent,
    SearchToDoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedComponentsModule,
    HttpClientModule,
  ],
  exports: [AddToDoComponent, AllToDoComponent],
})
export class MainComponentsModule {}
