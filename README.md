# website
Site de l'asso @ http://assos.utc.fr/utcoupe

## Comment ajouter un album photo ?
Mais oui Jamy, comment on fait ça ?
 - ajouter les photos dans le dossier qui va bien (`/images/[annee]/`). De préférence en jpg, 1000 px sur le plus long côté, 80% de qualité.
 - modifier la page `pictures.html` en ajoutant un item au menu et une section. Bien modifier le `section id` et vérifier qu'il correspond avec le `a href="#machin"` dans le menu.
 - ajoutez les photos toutes fraîches à la nouvelle section. Ajouter autant d'`article` que nécessaire, en essayant d'équilibrer les colonnes (`<div class="4u 12u$(mobile)">`). Pensez à mettre à jours la légende et le texte d'intro en cas de copier collé.
 - voir partie suivante pour pousser les changements

## Mise à jours du site
D'une extrême simplicité :
 - faire les modifs chez vous bien au chaud
 - pousser les commit sur Github
 - ssh sur le serveur des assos (avec un ptit VPN si nécessaire)
 - `cd public_html/website && git pull`
 - boire un coup, ça a faillit être fatigant !