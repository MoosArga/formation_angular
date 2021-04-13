# Formation

Pour se connecter à votre session : `<num-stagiaire>-angular-2406.training.retengr.com`

# Liens Utiles

- Git : https://git-scm.com/download/mac
- VS Code : https://code.visualstudio.com/download
- Node : https://nodejs.org/en/download/

Pour celles et ceux qui sont sur Mac, pour écrire les symboles suivants, vous devez utilisez les combinaisons de touches suivantes : 

- `{` : option + (
- `}` : option + )
- `[` : option + shift + (
- `]` : option + shift + )

# Javascript et Typescript 

- TP : https://plnkr.co/edit/hVlBZvzPBOd9fsdTeaTk

## Remarques sur la correction du TP 

Pour lancer le backend : 

  json-server --watch covid.json

L'objectif était de paginer les statistiques du Covid sur la journée du 7 avril 2021. Pour ce faire, j'utilise un BehaviorSubject pour gérer mes pages et qui va à chaque changement de page relancer une recherche par l'API. J'ai construit un objet dédié à la pagination CovidDailyPage qui comporte : 
- covids : la liste des entrées courantes du Covid
- totalPage : le nombre total de page
- currentPage : la page actuellement sélectionné
- currentPages : le tableau des pages à proposer. Au vu du nombre important de pages, je propose les pages ayant un écart type au maximum de 3 avec la page courante. J'affiche "..." pour mettre éventuellement en évidence quand il y a plus de pages avant et après. 

Ce modèle est extensible : si je dois intégrer des tris, une recherche rapide ou tout autre chose affectant les données du tableau, je n'ai qu'à ajouter un observable en entrée au même titre que le pager. Si je dois par exemple gérer un tri, j'ajouterai un BehaviorSubject d'un objet Tri qui aurait 2 propriétés (colonne à trier et sens), et j'intègrerai dans un combineLatest cet observable avec le pager. Toute modification du tri ou du changement de page réactiverait donc la recherche. Si je dois ajouter une recherche rapide, j'ajouterai un nouvel observable dans ce combineLatest et ainsi de suite...

2 choses d'intéressantes en Angular à voir sur ce TP : 
- Comment récupérer des headers dans une réponse d'API : au travers du paramètre observe de la méthode get du client Http 
- Comment intégrer la locale FR dans l'APP module qui me permet formater à la française les nombres dans le tableau