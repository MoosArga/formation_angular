# Try An API 

[Documentation API](https://github.com/martincarrera/clash-royale-api)

- Récupérer la branche **tp1** : **git checkout tp1**
- L’application est composée d’un entête comportant un menu avec 2 items : 
  - Les unités (page par défaut)
  - Les arènes
En dessous de cette entête une section est dédiée à l’affichage des unités ou des arènes
- **Exercice 1 :** 
  - Créer un module associé à l’item Unités et afficher la liste des unités ordonnés par nom.
  - Créer un module associé à l’item Arènes et afficher la liste des unités ordonnés par nom
  - Associer chacun des modules au menu relatif
- **Exercice 2 :** 
  - Pour chaque entrée (unité ou arène), créer un lien amenant vers des pages de détails de l’unité ou de l’arène. 
  - Dans la page de détail, afficher l’ensemble des informations de l’entité et l’image associée

## Remarques sur la correction du TP 

Les 2 features modules sont quasi identiques, l'un chargeant les unités et l'autres les civilisations. 

Une chose intéressante à voir est la récupération d'une civilisation dans le service civilization.service.ts où je map l'objet récupéré depuis l'api avec un constructeur par recopie pour pouvoir précalculer les noms des unités de la civilizations depuis l'url fourni. C'est une astuce qui peut être utilisé notamment lorsque vous ajouterez des méthodes sur vos modèles de données. En effet, contrairement au monde Java qui utilises le Design Pattern Proxy, les objets récupéré depuis le services Http ne sont jamais instanciés avec votre modèle : ils possèdent la même signature certes mais en Javascript ils n'ont jamais été crées par votre classe. Autrement dit, si j'ajoute des méthodes dans la classe Civilization, ne serait ce qu'un toString, je ne pourrais l'appeler tel que : il faudra reconstruire une instance de l'objet avec un constructeur par recopie ou autre. Ne vous étonnez donc pas si vous déclarez des méthodes dans vos modèles de données et qu'après avoir interrogé votre API, l'objet retourné ne les possède pas :)