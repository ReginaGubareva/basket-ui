import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './component/material/material.module';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './component/news/news.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AssociationComponent } from './component/association/association.component';
import { BottomBarComponent } from './component/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewsComponent,
    NotfoundComponent,
    HomeComponent,
    AssociationComponent,
    BottomBarComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
