# Formation Angular 11 - Avril 2021

---

**06/04 - 1ère journée**

## Ice Breaker

- Julien :
  - 10 ans d'XP, développeur Java (Swing, FX, GWT) 
  - Pouvoir débugger une application Angular
- Stéphane : 
  - 15 ans d'XP, back IHM, client lourd / léger 
  - Me clarifier les concepts TypeScript et Angular
  - Maitriser le framework Angular 
- Bastien : 
  - 3 ans d'XP, beaucoup de Java, 2 ans 1/2 sur Angular 
  - Revoir Angular et ses concepts 
  - Voir les spécificités d'Angular 11

**07/04 - 2ème journée**

## Revue

- Les décorateurs 
  - Pipe, Module, Composant, Service, Directive
  - mavariable
    - {{ mavariable }}
    - <\h1 [title]="mavariable">..
    - <button (click)="maFonction()">...
    - [(ngModel)]="mavariable", [()], import Forms Module, définir un name 
    - {{ mavariable | date:'':'' }}
- Angular cli 
  - Structurer un projet 
  - Générer des éléments 
  - Delivery, build, déployer en local 
- TypeScript
  - constructor(private http: HttpClient)
  - maFunctionPourrie(): string | boolean

**08/04 - 3ème journée**

## Revue

- Les routes 

  - Eviter absolument de faire une route sur le composant boostrapé
  - Eager : Un composant
  - Lazy : Un module
    - Module de routage dans le features module
    - Importer le module de routage dans le features module
    - Ne plus importer un feature module dans aucun autre module
  - Default : route de redirection 
  - Propriété children
  - RouterLink 
    - Route statique : formation 
    - Objet : ['formation']
    - routerLinkActive
  - Passage de paramètres
    - Récupération route de type ActivatedRoute
    - Path Param : formation/:id-formation
      - params
    - Query Param : formation?id=...
      - queryParams
    - Data
      - data
    - Resolver
      - data
  - Guard 
    - Conditions en amont ou aval de la route 
    - CanActivate
    - CanActivateChild
    - CanDeactivate
    - CanLoad
  - Directives de structures 
    - *ngIf
      - ng-template avec une variable apposée (#nom)
    - *ngFor
      - let iterator of list
    - ngSwitch
  - Directives de template
    - ng-template
    - ng-container
    - ng-content
    - ngStyle
    - ngClass
      - [ngClass]="a ? 'class-a' : 'class-b'"
      - [ngClass]="{ 'class-a': a, 'class-b': !a, 'class-c'... }"
      - [class.class-a]="a"
  - Interaction intercomposant 
    - @Input
      - Récupérer un paramètre dans un composant depuis son parent
    - @Output
      - Emettre un évènement dans un composant à son parent 
      - EventEmitter\<type>
  - Configuration proxy
  - Consommation d'API 
    - HttpClient, HttpClientModule
    - async
    - Observable\<string> : {{ obs | async }}
    - *ngIf : let nomVariable
    - *ngFor

  **09/04 - 4ème journée**

  ## Revue

  - Validation des formulaires 
    - Model Driven (TS)
      - FromControl / FormGroup
    - Template Driven (HTML)
      - Variable locale (#monInput), centré sur le ngModel
    - Dirty / Pristine, Touched / Untouched, Valid / Invalid
    - Applications de CSS en fonction de la validation
      - ng-valid
      - ng-invalid
      - ...
    - Formulaire et l'ensemble de sa validation : ngForm
      - ngFormOptions : update on :
        - change
        - blur (UX)
        - submit 
  - RouterLink 
    - queryParams
    - fragment 
  - Observable avec RxJS
    - Plusieurs valeurs 
    - 3 états : 
      - Next 
      - Completed 
      - Error
    - Annulé
    - Opérateurs : 
      - switchMap
        - Aplatir un observable dans l'observable courant
      - map
        - Transforme une valeur
      - debounceTime
        - J'attends avant de voir si il y a pas un nouvel évènement (next)
      - filter 
        - Filtrer
      - distinctUntilChanged
        - Filtre les évènements identiques 
      - startWith 
        - Valeur par défaut lors de la souscription 
      - combineLatest 
        - Permet de combiner plusieurs observables. Dès qu'un observable émet un évènement, il me renvoie la dernière image de tous mes observables