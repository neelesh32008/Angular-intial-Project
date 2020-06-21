import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMainComponent } from "./app.main.component";
import { CoreModule } from "../core/core.module";
import { RouterModule } from "@angular/router";
import {
  ScrollPanelModule,
  ProgressBarModule,
  TabPanel,
  TabMenuModule,
  TabViewModule,
  ButtonModule
} from "primeng/primeng";

@NgModule({
  declarations: [
    AppMainComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ScrollPanelModule,
    ProgressBarModule,
    TabMenuModule,
    TabViewModule,
    ButtonModule
  ],
  exports: [
    AppMainComponent,
  ]
})
export class LayoutModule { }
