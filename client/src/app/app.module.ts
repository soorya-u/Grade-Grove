import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentComponent } from './components/department/department.component';

import { RouteReuseStrategy } from '@angular/router';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {}

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return false;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResultsComponent,
    ProfileComponent,
    AboutComponent,
    DepartmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
