# Essayage virtuel — notes techniques

## Où vit le code
- `website/public/tryon/index.html` — l'application d'essayage, en un seul fichier
  statique. Aucune étape de build : elle est copiée telle quelle dans `out/tryon/`.
- `website/components/TryOnLauncher.tsx` — bouton client qui ouvre l'essayage en
  surcouche plein écran (`<iframe allow="camera">`).
- `website/components/TryOnPage.tsx` — page `/essayage`, avec la fenêtre intégrée.
- `website/components/ProductPage.tsx` — le bouton « Essayage virtuel » de chaque
  fiche produit ouvre la monture correspondante via sa référence.
- Styles : bloc « Essayage virtuel » en fin de `app/globals.css`.

## Comment ça marche
1. MediaPipe Face Landmarker suit le visage et renvoie, à chaque image, une matrice
   de pose 6 axes (rotation + position métrique de la tête).
2. Les premières secondes servent à résoudre, au moindre carré, la position réelle
   de cinq points du visage dans le repère de la tête : arête du nez, coins externes
   des yeux, côtés du crâne. La monture est ensuite posée sur les yeux et l'arête du
   nez de cette personne, et les branches s'écartent à la largeur réelle du crâne.
3. Un ellipsoïde invisible placé derrière le plan de la monture n'écrit que la
   profondeur : les branches disparaissent derrière la tête quand elle tourne.
4. Tout est calculé dans le navigateur. Aucune image n'est transmise.

## Chemin de l'iframe
Toujours `/tryon/index.html`, jamais `/tryon/`. En développement (`next dev`), Next
ne résout pas un dossier de `public/` vers son `index.html` : `/tryon/` renvoie la
page 404 du site. `/tryon/index.html` fonctionne aussi bien en `next dev` qu'après
`next build` (export statique).

## Contraintes de déploiement
- La caméra exige **https** (ou `localhost`). En http simple, le navigateur refuse.
- Une iframe qui n'a pas `allow="camera"` ne peut pas demander la caméra.
- Trois CDN sont appelés au chargement : jsDelivr (three.js, tasks-vision) et
  storage.googleapis.com (modèle `face_landmarker.task`). Pour un site totalement
  autonome, télécharger ces trois ressources dans `public/tryon/vendor/` et
  remplacer les URL correspondantes.

## Montures
Le catalogue de l'essayage (`CATALOG`, en haut du script) reprend les dix références
de `website/lib/products.ts`. `lensW`, `bridge` et `temple` sont les valeurs des
fiches produit ; `lensH` provient des fiches techniques Persol et reste à confirmer
au pied à coulisse.

Les montures sont aujourd'hui générées par programme à partir de ces cotes : les
proportions et la position sur le visage sont justes, la matière ne l'est pas encore.

## Étape suivante — scans
Pour chaque monture : scan photogrammétrique (Polycam, RealityScan), export `.glb`,
axe Y vers le haut, largeur totale calée sur la valeur du catalogue. Le modèle
remplacera alors `buildFrame()` pour la référence concernée, sans toucher au reste
du système de suivi.

## Panneau Réglages
Interne, masqué pour les visiteurs. Il s'affiche en ajoutant `?dev=1` à l'URL :
`/tryon/index.html?dev=1` ou `/tryon/index.html?frame=PO3393S&dev=1`.
Il fige un décalage hauteur / profondeur / échelle par référence ; « Copier le
calibrage » exporte le JSON à reporter dans `CATALOG`.

## Photo
La capture se fait dans la boucle de rendu, pas dans le gestionnaire de clic : le
canvas WebGL est effacé après chaque présentation d'image, donc le lire depuis un
clic renvoie une image vide (la vidéo seule, sans la monture). Le bouton lève un
drapeau `shotPending`, et `capture()` s'exécute juste après `renderer.render()`.
L'alternative — `preserveDrawingBuffer: true` — fonctionne aussi mais coûte des
images par seconde en continu, pour un bouton utilisé une fois de temps en temps.
