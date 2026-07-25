# Loza Optique Mobile 1.0.1

Application premium Android/iOS de Loza Optique, construite avec Expo, React
Native et TypeScript.

## Fonctionnalités

- Accueil éditorial, catalogue filtrable, recherche et fiches produit.
- 10 montures Persol, 8 accessoires et 6 campagnes lifestyle.
- Favoris persistants uniquement sur l’appareil.
- Demande de rendez-vous avec solution de repli par téléphone.
- Virtual Mirror avec assets AR calibrés par modèle.
- Suivi natif des yeux et de la tête, perspective 2.5D et lissage temporel.
- Mode manuel compatible Expo Go pour valider le design et les assets.
- Traitement caméra local : aucune photo ni repère facial n’est enregistré ou envoyé.
- Aucun compte, paiement, publicité, analyse ni fonctionnalité de santé.

## Vérifier le projet

```bash
npm ci
npm run check
npx expo install --check
npx expo-doctor
npx expo export --platform android
```

`npm run check` exécute le typecheck TypeScript et les tests de géométrie AR.

## Tester avant Google Play

Le suivi facial automatique requiert les modules natifs d’un APK :

```bash
npx eas-cli@latest build --platform android --profile preview
```

Installez l’APK depuis le lien ou le QR EAS sur un téléphone réel. Testez les
dix montures, plusieurs distances, les rotations de tête, la lumière faible et
forte, le catalogue, les favoris et la demande de rendez-vous.

## Build Google Play après validation

```bash
npx eas-cli@latest build --platform android --profile production
```

Le profil `production` produit un AAB. Ne le soumettez pas avant d’avoir validé
l’APK de test et aligné les déclarations Play Console avec le binaire 1.0.1.

## Limites connues

- Le catalogue est local et ne gère ni stock ni prix en temps réel.
- La réservation prépare un e-mail ; elle n’est confirmée qu’après réponse de la boutique.
- La précision du Virtual Mirror doit être validée sur appareils physiques.
