# Festive Sounds: one link, many festivals

One web link for one NFC tag. It opens the camera and asks you to scan a festival picture:

- **Nebuta float picture** → opens [Nebuta Festive Sounds](https://github.com/naomirajwanshi02/Nebuta_Festive_Sounds)
- **Niwatori Hoko picture** → opens [Gion Matsuri Festive Sounds](https://github.com/naomirajwanshi02/Gion_Matsuri_Festive_Sounds)

This hub holds **no sounds or notes**. It only recognises the picture and redirects to that festival's
own live page, so each festival stays independently editable: change and push it in its own repo and the
hub serves the new version (GitHub Pages refreshes in about a minute).

| File | What it is |
|---|---|
| `index.html`, `js/app.js`, `js/scan.js` | Camera permission, scanner, redirect |
| `js/festivals.js` | The list of festivals (name, page URL, picture, index in `targets.mind`) |
| `targets.mind` | Both pictures compiled together (index 0 Nebuta, 1 Gion) |
| `tools/make-target.html`, `tools/serve.ps1` | Rebuild `targets.mind` from the live pictures |

**Only if a festival's picture (`target.png`) changes, or a festival is added:** edit `js/festivals.js`,
run `tools/serve.ps1`, open `http://localhost:8134/tools/make-target.html?build=1`, then commit `targets.mind`.
Changes to a festival's sounds, notes or look need nothing here.

Phones need HTTPS for the camera (GitHub Pages provides it). `?pick=1` skips scanning and shows a menu.
