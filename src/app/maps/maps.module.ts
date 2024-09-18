import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapsRoutingModule } from './maps-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';


@NgModule({
    imports: [
        CommonModule,
        MapsRoutingModule
    ],
    exports: [],
    declarations: [
      SideMenuComponent,
      MiniMapComponent,
      MapsLayoutComponent,
      FullScreenPageComponent,
      MarkersPageComponent,
      PropertiesPageComponent,
      ZoomRangePageComponent
    ],
})
export class MapsModule { }
