import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent,
    MenuPopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  
  ],
  providers: [MenuService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
