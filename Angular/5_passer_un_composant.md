# Exercice 1

1. Crée un composant CardComponent qui contient un <div> avec une classe CSS card.
2. Ajoute <ng-content> dans CardComponent pour qu'il puisse contenir d'autres composants.
3. Dans AppComponent, affiche un CardComponent qui contient un composant avec du texte et un autre carte avec une image.

# Exercice 2

1. Crée trois composants enfants avec des textes différents.
2. Dans un composant parent, affiche les 3 composants.

# Exercice 3

1. Crée trois composants enfants avec des textes différents.
2. Dans un composant parent, ajoute une liste déroulante (<select>) pour choisir quel composant afficher.
3. Passe le composant sélectionné en tant qu’input() et utilise ngComponentOutlet pour l'afficher.

# Exercice 4

1. Crée un composant ModalComponent qui :
- Accepte un composant en input() et l’affiche avec ngComponentOutlet.
- Contient aussi un <ng-content> pour ajouter un composant avec du texte.
2. Dans AppComponent, affiche une modale qui contient :
- Un titre et une description passés en ng-content.
- Un composant dynamique choisi par l’utilisateur.

3. Ajoute un bouton pour fermer la modale en modifiant une variable isOpen.

# Bonus 

1. Crée un composant User qui prend un input name et affiche un élément <div> avec le nom de l'utilisateur.
2. Crée un composant UserList qui affiche une liste de composant User.
3. Utilise ce composant dans app avec un tableau d'exemple d'utilisateurs.