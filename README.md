# Chaînes de contrôles 

Pour lancer le backend (à la racine du repo) : **json-server --watch commandes.json**

[Documentation de json-server](https://github.com/typicode/json-server/blob/master/README.md)

- Récupérer la branche **tp2** : **git checkout tp2**
- L’application est composée d’un entête et deux sections : 
  - Un formulaire de création de commande
  - Une section affichant les 3 dernières commandes
- **Exercice 1 :** 
  - Créer un formulaire comprenant les champs obligatoires suivants : 
    - Nom (sans espace)
    - Nombre de couverts (entier positif)
    - Date et heure (supérieure à la date / heure actuelle)
Renseigner clairement les erreurs pour aider la saisie en dessous du formulaire et ajouter un bouton pour enregistrer la commande. 
- Dans la seconde section, affichées les 3 informations d’une commande.
- **Exercice 2 :**
  - Pour aider à la saisie, pour toute nouvelle commande, il faut :
    - Ajuster le nombre de couverts au nombre de couverts majoritairement choisi dans les commandes existantes,
    - Ajuster la date et l’heure au premier jour de la semaine suivante, une heure et demi plus tard que l’heure actuelle

## Remarques sur la correction du TP 

J'ai utilisé la librairie moment pour les opérations sur les dates.

J'ai utilisé une validation Template-Driven et j'ai créé un composant widget pour gérer les erreurs des champs (FormErrorHelper) les plus courantes : required et pattern. Petite subtilité pour la date de réservation, aucun des critères n'est remonté par ce type d'input aux erreurs de validations. Le type de cette input créant cette problématique. J'ai donc du géré les erreurs par moi-même pour les afficher ou non. Pour gérer ce champs, qui est de type texte, j'ai scindé en 2 mon ngModel : 
- En binding de propriété \[ngModel\] : pour récupérer la valeur depuis le composant et la transformer en texte avec le pipe date
- En binding d'évènement (ngModelChange) : pour transformer la valeur texte en type date et valoriser les validations (isDateValid et isDateBeforeNow). J'ai utilisé des variables de validations et non des méthodes pour éviter les problématiques de performance.

Concernant l'enregistrement, j'ai du ajouter un id random car le json-server rejetait mes POST. Cet id est généré à la volée dans le service de création d'une commande : c'est bien évidemment pour du TP et ça ne s'utilisera jamais en production : nous avons normalement un backend qui va assurer ce type de traitement. 

Concernant le calcul de présaisie des champs nombre de couverts et date de réservation, j'ai utilisé le tap lors de la récupération des commandes. J'aurai pu utilisé d'autres techniques pour me passer du tap, mais c'est un code que je validerai sur un projet au vu de sa simplicité et du bon respect de la programmation réactive. 