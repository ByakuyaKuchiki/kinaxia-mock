
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListeFicheComponent } from '../liste-fiche/liste-fiche.component';
import { CreateFicheComponent } from '../create-fiche/create-fiche.component';
import { CtrlInterneComponent } from '../ctrl-interne/ctrl-interne.component';
import { GestionRisqueComponent } from '../gestion-risque/gestion-risque.component';
import { SyntheseCentreComponent } from '../synthese-centre/synthese-centre.component';
import { StatistiqueEmployeComponent } from '../statistique-employe/statistique-employe.component';
import { GestionUtilisateurComponent } from '../gestion-utilisateur/gestion-utilisateur.component';
import { GestionCentreServiceComponent } from '../gestion-centre-service/gestion-centre-service.component';
import { GestionDirectionComponent } from '../gestion-direction/gestion-direction.component';
import { CreateFiche2Component } from '../create-fiche2/create-fiche2.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'listeFiche', component: ListeFicheComponent},
  {path: 'createFiche', component: CreateFicheComponent},
  {path: 'crtlInterne', component: CtrlInterneComponent},
  {path: 'gestionRisque', component: GestionRisqueComponent},
  {path: 'syntheseCentre', component: SyntheseCentreComponent},
  {path: 'statistiqueEmploye', component: StatistiqueEmployeComponent},
  {path: 'gestionUtilisateurComponent', component: GestionUtilisateurComponent},
  {path: 'gestionCentreServiceComponent', component: GestionCentreServiceComponent},
  {path: 'gestionDirectionComponent', component: GestionDirectionComponent},
  {path: 'createFiche2Component', component: CreateFiche2Component}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
