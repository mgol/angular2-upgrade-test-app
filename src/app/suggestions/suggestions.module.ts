import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionsComponent } from './suggestions.component';
// import { Ng1SuggestionsComponentWrapper } from '../ng1-suggestions.component-wrapper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SuggestionsComponent,
    // Ng1SuggestionsComponentWrapper,
  ],
  exports: [
    SuggestionsComponent,
  ],
})
export class SuggestionsModule { }
