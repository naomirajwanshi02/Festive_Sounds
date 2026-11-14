// The one place that lists the festivals. Each festival is its OWN project/repo and its own
// GitHub Pages site: edit and push it there and this hub opens the new version straight away
// (the hub only redirects to it, it holds no copy of the sounds or the notes).
//
// `index` is the position of the picture inside targets.mind (tools/make-target.html builds
// it in this order). To add a festival: add it here AND rebuild targets.mind.

const BASE = 'https://naomirajwanshi02.github.io/';

export const FESTIVALS = [
  { index: 0, id: 'nebuta', name: 'Nebuta', jp: 'ねぶた', place: 'Aomori', stamp: '祭',
    url: BASE + 'Nebuta_Festive_Sounds/', picture: BASE + 'Nebuta_Festive_Sounds/target.png' },
  { index: 1, id: 'gion', name: 'Gion Matsuri', jp: '祇園祭', place: 'Kyoto', stamp: '鉾',
    url: BASE + 'Gion_Matsuri_Festive_Sounds/', picture: BASE + 'Gion_Matsuri_Festive_Sounds/target.png' },
];

// ?demo=1 jumps straight to the festival's "You can begin!" note,
// because the picture has already been recognised here.
export const openUrl = (f) => f.url + '?demo=1';
