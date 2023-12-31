# RTRUDE : vous ne dormirez plus que sur vos meubles.

## DESCRIPTION

Rtrude est un site e-commerce vendant des meubles de très très haute qualité sans pour autant que vous dépensiez des milliers de pièces. Chaque siège coûte aux alentours de quelques menus kebabs, ce sont des AFFAIRES EN OR !!

Projet réalisé par :
- Sam-rst (Samuel RESSIOT)
- Powlair (Paul CLAVERIE)
- Comaaa (Bastien ROUPERT)



## Configuration


### Front-end (my-vue-vue)

Le front-end de l'application est développé en utilisant Vue.js. Les fichiers principaux sont situés dans le dossier `my-vue-vue`.


#### Fichier app.vue

Le fichier principal `app.vue` définit la structure de la page, intégrant la barre de navigation (`NavBar`), les sections principales et le pied de page (`MyFooter`).


#### Fichier main.js

Le fichier `main.js` initialise l'application Vue, configure le routeur, et monte l'application sur l'élément avec l'ID 'app'. Il importe également les pages principales telles que `MyHome`, `MyLogin`, `MyRegister`, `MyShop`, et `MyAbout`.



### Back-end (my-express-vue)

Le backend de l'application est développé en utilisant Express.js. Les fichiers principaux sont situés dans le dossier `my-express-vue`.


#### Fichier app.js
Le fichier `app.js` configure le serveur Express, définit les autorisations CORS, et écoute sur le port spécifié. Il utilise également le module `setupRoutes` pour définir les routes de l'API et ainsi écouter les demandes du serveur front et lui envoyer en retour une réponse de la base de données.


#### Fichier routes.js
Le fichier `routes.js` définit les routes de l'API, telles que la gestion de l'authentification (`/login`, `/register`) et la gestion des cartes (`/addCard`, `/cards`).



## INFORMATIONS

### Différentes pages :
- `/` : Page principale (home)
- `/register` : Inscription au site (register)
- `/login` : Connexion à son compte utilisateur (login)
- `/shop` : Liste de tous les produits des chaises (cards)
- `/about` : Page d'information de l'entreprise



## Dépendances externes

- Bootstrap (CSS et JS)
- SCSS pour les styles personnalisés



## Installation

1. Cloner le répertoire GitHub :
```bash
git clone https://github.com/Sam-rst/Rtrude-Clock.git
```


2. Installez les dépendances.

```bash
# Pour le front-end
cd my-vue-app
npm install

# Pour le back-end
cd ../my-express-app
npm install
```


3. Lancez l'application.

```bash
# Pour le front-end
cd ../my-vue-app
npm run serve

# Pour le back-end
cd ../my-express-app
node App.js
#OU
cd ../my-vue-app
npm run start
```

4. Retrouver le site sur un navigateur de votre choix.

L'application sera accessible (en local) à l'adresse :
'http://localhost:8080'

L'application sera accessible (dans le réseau privé) à l'adresse :
'http://[ ip de votre machine ]:8080'