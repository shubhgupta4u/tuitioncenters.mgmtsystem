import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimoverflowtextPipe } from './trimoverflowtext.pipe';
import { FilterIsactivePipe } from './filter-isactive.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterIsactivePipe,
    TrimoverflowtextPipe,
    SafeHtmlPipe
  ],
  exports:[
    FilterIsactivePipe,
    TrimoverflowtextPipe,
    SafeHtmlPipe,
  ]
})
export class PipesModule { }
