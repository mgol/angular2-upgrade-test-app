import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleTextComponent } from './title-text/title-text.component';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    TitleTextComponent,
  ],
  entryComponents: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    // AppRoutingModule,
    SuggestionsModule,
    UpgradeModule,
  ],
  providers: [],
})
export class AppModule {
  ngDoBootstrap() {
    // This is a placeholder to stop the boostrapper from complaining.
  }
}
