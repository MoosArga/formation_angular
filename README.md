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
