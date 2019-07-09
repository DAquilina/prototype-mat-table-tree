import { NgModule } from "@angular/core";
import { CdkTableModule } from "@angular/cdk/table";
import { MatButtonModule, MatIconModule, MatTableModule, MatTreeModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TreeContainerComponent } from "./tree-container/tree-container.component";


@NgModule({
  declarations: [
    AppComponent,
    TreeContainerComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
