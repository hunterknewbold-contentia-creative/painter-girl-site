import { paintings } from './models/paintings.js';
import { displayPaintings } from './utils/dom.js';

const gallery = document.getElementById('gallery');

displayPaintings(paintings, gallery);