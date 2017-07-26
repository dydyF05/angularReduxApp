import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http"
import {RouterModule} from "@angular/router"
import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms"
import { AppComponent } from "./ui/app.component";

import { UserService } from "./api/UserService";

import { AppStore, createAppStoreFactoryWithOptions } from "angular2-redux";
import reducers from "./reducers/Main";

export const appStoreFactory = createAppStoreFactoryWithOptions({
  reducers,
  debug:true
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [UserService, { provide: AppStore, useFactory: appStoreFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
