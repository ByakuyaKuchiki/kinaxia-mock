import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouteLinkComponent } from './route-link/route-link.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';
import { CtrlInterneComponent } from './ctrl-interne/ctrl-interne.component';
import { GestionRisqueComponent } from './gestion-risque/gestion-risque.component';
import { SyntheseCentreComponent } from './synthese-centre/synthese-centre.component';
import { StatistiqueEmployeComponent } from './statistique-employe/statistique-employe.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { GestionCentreServiceComponent } from './gestion-centre-service/gestion-centre-service.component';
import { GestionDirectionComponent } from './gestion-direction/gestion-direction.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { CreateFiche2Component } from './create-fiche2/create-fiche2.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    RouteLinkComponent,
    DropMenuComponent,
    ListeFicheComponent,
    CreateFicheComponent,
    CtrlInterneComponent,
    GestionRisqueComponent,
    SyntheseCentreComponent,
    StatistiqueEmployeComponent,
    GestionUtilisateurComponent,
    GestionCentreServiceComponent,
    GestionDirectionComponent,
    CreateFiche2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TableModule,
    NgbModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
