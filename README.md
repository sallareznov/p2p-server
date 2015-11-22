# Atelier NODE.JS & EXPRESS

## Table des matières
1. [Overview](#)
2. [Arborescence d'un projet Node/Express](#)
3. [Ressources utiles](#)
4. [Pour aller plus loin avec Node.js](#)

## Overview

Le but de cet atelier est de **réaliser un serveur Node FROM SCRATCH**. Ce serveur possédera une base de données embarquée SQLite et aura la capacité de sauvegarder des chemins de fichiers dans cette base, et récupérer des fichiers de serveurs du même réseau (i.e. des serveurs codés par les autres étudiants IAGL).

La base de données SQLite ne contiendra qu'une seule table qui respectera le schéma simple suivant :

| Nom de la colonne | Type de la colonne |
|------------------ |------------------- |
| FILEID | TEXT |
| FILEPATH | TEXT |

Votre serveur pourra aussi se connecter à un serveur central. Ce serveur central (réalisé par nous-mêmes) ne servira que d'interface aux utilisateurs, car il permet de renseigner les adresses IP connectées au réseau.

Pour se connecter au serveur central, vous fournirez un nom d'utilisateur qui servira d'identifiant.

Ainsi, pour récupérer des fichiers ou dossiers d'un autre serveur, vous avez la possibilité de :
* passer par le serveur central si vous ne connaissez pas l'adresse IP d'un utilisateur donné,
* interroger directement le serveur cible si vous avez connaissance de son adresse IP

En résumé, votre serveur doit être capable de faire les choses suivantes :

| Fonctionnalité | Verbe REST | Étapes |
| -------------- | ---------- | ------ |
| Envoyer un fichier à un destinataire | PUT | <ul><li>Récupérer le chemin qui correspond au nom renseigné par le destinataire</li><li>Récupérer les données du fichier de votre système de fichiers</li><li>Envoyer les données en asynchone (i.e. par petites parties)</li></ul>
| Récupérer un fichier demandé | GET | <ul><li>Récupérer les données du fichier demandé </li><li>Sauvegarder le fichier dans votre système de fichiers</li><li>Sauvegarder les références du fichier (identifiant et chemin) dans votre base de données</li></ul> |

### Arborescence d'un projet Node/Express

Lorsque vous créerez un nouveau project avec Express (en tapant par exemple ```express server```), Express vous génèrera l'arborescence suivante :

```
├── app.js
├── database/
├── database.db
├── database.js
├── node_modules/
├── package.json
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/
└── views/
```

* ```app.js``` : fichier principal du projet. C'est le fichier que vous appelerez en exécutant la commande de lancement de votre serveur (```node app.js```).
* ```database/``` : dossier qui contiendra les fichiers de votre base (dans l'idéal, vous enregistrerez les fichiers dans ce dossier avant de les renseigner dans votre base).
* ```database.db``` : fichier qui sert de base de données à SQLite.
* ```node_modules``` : dossier qui contiendra.
* ```package.json``` : fichier qui contient les métadonnées du projet. Ce fichier présente quelques beaucoup de similitudes avec le POM de Maven, car il liste entre autres le nom du projet, sa version et ses dépendances. Ainsi, Node Package Manager (npm) identifiera ce projet et téléchargera ses dépendances.
* ```public/``` : dossier qui contient les fichiers statiques du projet (images, fichiers JavaScript statiques et feuilles de styles).
* ```routes/``` : dossier qui gère les routes de l'application
* ```views/``` : dossier contenant les vues de l'application (dans notre contexte, ce sont des fichiers .jade).

### Ressources utiles

* [Syntaxe de JavaScript](http://wps.aw.com/wps/media/objects/2234/2287950/javascript_refererence.pdf)
* [API de SQLite](https://github.com/mapbox/node-sqlite3/wiki/API)
* [Syntaxe de Jade, le moteur de template](http://jade-lang.com/reference/)

### Pour aller plus loin avec Node.js
