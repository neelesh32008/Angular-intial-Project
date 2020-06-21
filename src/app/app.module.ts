import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { AppRoutes } from "./app-routing.module";


import { AppComponent } from "./app.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";

import { Token } from "./interceptors/token";
import { UserService } from "./core/services/user.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, AppNotfoundComponent],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    UserService, Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Token,
      multi: true,
      deps: [UserService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
