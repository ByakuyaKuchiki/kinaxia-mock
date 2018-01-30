import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  dropdowns: any[];

  constructor() {
      this.dropdowns = [{
        name: 'Fiche de vérification',
        menus: [{
          name: 'Liste des Fiches',
          path: 'listeFiche'
        // tslint:disable-next-line:whitespace
        },{
          name: 'Création des Fiches',
          path: 'createFiche'
        }]
      },
      {
        name: 'Rapport ',
        menus: [{
          name: 'Controle Interne',
          path: 'crtlInterne'
        }, {
          name: 'Gestion des Risques',
          path: 'gestionRisque'
        }, {
          name: 'Synthèse des Centres',
          path: 'syntheseCentre'
        }, {
          name: `Statistiques d'un Employé`,
          path: 'statistiqueEmploye'
        }]
      },
      {
        name: 'Admin ',
        menus: [{
          name: 'Gestion des Utilisateurs',
          path: 'gestionUtilisateurComponent'
        }, {
          name: 'Gestion Centre de Service',
          path: 'gestionCentreServiceComponent'
        }, {
          name: 'Gestion Directions',
          path: 'gestionDirectionComponent'
        }]
      }];

   }

}
