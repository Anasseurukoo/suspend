# Publication Google Play — Loza Optique 1.0.1

## Liens officiels

- Site : https://lozaoptique.com
- Politique de confidentialité : https://lozaoptique.com/confidentialite/
- E-mail d’assistance : anidayacoub@gmail.com

## État réel du binaire 1.0.1

- Aucun compte utilisateur, backend, paiement, SDK publicitaire ou outil d’analyse.
- Aucune fonctionnalité médicale, de santé ou de service financier.
- La caméra frontale sert uniquement à l’essayage virtuel optionnel en temps réel.
- Les images et repères du visage sont traités localement, sans enregistrement ni transfert.
- Les favoris persistent uniquement sur l’appareil.
- La demande de rendez-vous ouvre l’application e-mail ; Loza confirme ensuite le créneau.

Ces réponses doivent être revues avant d’ajouter un backend, une authentification,
des statistiques, de la publicité, un paiement, un téléversement ou une réservation serveur.

## Déclarations Play Console

Répondre selon le binaire réellement envoyé :

- Catégorie : **Shopping**.
- Fonctionnalités de santé : **Mon appli ne propose aucune fonctionnalité de santé**.
- Fonctionnalités financières : **Mon appli ne fournit aucune fonctionnalité financière**.
- Annonces : **Non**.
- Accès à l’application : **aucune section limitée par un compte ou un paiement**.
- Collecte ou partage de données : **Non**.
- Caméra : fonction optionnelle traitée localement sur l’appareil.
- Suppression de compte : sans objet, car aucun compte n’est créé.

Ne pas déclarer l’application comme application de santé. Cette version ne doit
contenir aucun écran, texte ou dépendance de santé.

## Vérification et APK de test

Depuis `mobile` :

```bash
npm ci
npm run check
npx expo install --check
npx expo-doctor
npx expo export --platform android
npx eas-cli@latest build --platform android --profile preview
```

Le profil `preview` produit l’APK à installer sur un téléphone réel. Tester le
catalogue, les favoris, la demande de rendez-vous, les permissions et les dix
montures AR avant de créer un nouveau bundle Google Play.

## Production après validation

```bash
npx eas-cli@latest build --platform android --profile production
```

Le profil `production` produit l’AAB. Le téléverser d’abord sur la piste de test
fermé, avec un nouveau `versionCode`, puis vérifier que toutes les déclarations
Play Console correspondent exactement au binaire 1.0.1.

## Contrôle avant chaque version

- Version cohérente dans `app.json`, `package.json` et l’écran Profil.
- Package Android inchangé : `com.lozaoptique.mobile`.
- Politique de confidentialité publique et à jour.
- Permission caméra expliquée avant la demande système.
- TypeScript, tests AR, Expo Doctor et export Android au vert.
- Data Safety fidèle aux fonctions et SDK du binaire livré.
- Aucun texte ne présente l’e-mail comme une réservation confirmée.
