import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MisApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//app pages
import { AboutPage } from '../pages/about/about';
import { CountryPage } from '../pages/country/country';
import { RegionPage } from '../pages/region/region';
import { TabsPage } from '../pages/tabs/tabs';

//service
import { MisService } from '../providers/mis-service';
import { ConnectivityService } from '../providers/connectivity-service';



@NgModule({
  declarations: [
    MisApp,
    AboutPage,
    CountryPage,
    RegionPage,
    TabsPage,

  ],
  imports: [
    IonicModule.forRoot(MisApp, {
      popoverEnter: 'popover-md-pop-in',
      popoverLeave: 'popover-md-pop-out'
    }),
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MisApp,
    AboutPage,
    CountryPage,
    RegionPage,
    TabsPage,

  ],
  providers: [ConnectivityService, MisService]
})
export class AppModule { }
