import {Interest} from "../classes/interest";

let interestNames = [
  "Aktivismus", "Alltag", "Amazonas", "Antarktis", "Argumentation",
  "Arktis", "Atmosphäre", "Baustoffe", "Bildung", "Biodiversität",
  "Chemie", "Demos", "Energie", "Ernährung", "Extremwetter",
  "Finanzmarkt", "Forschung", "Gärtnern", "Gesellschaft", "Gesundheit",
  "Gewässer", "Gletscher", "Grundwasser", "Insekten", "Journalismus",
  "Kapitalismus", "Klimageschichte", "Klimamodelle", "Klimawandel allgem.",
  "Kippelemente", "Kommunikation", "Kunst", "Landwirtschaft",
  "Lärmverschmutzung", "Leben auf dem Land", "Leben in der Stadt",
  "Lehre", "Lichtverschmutzung", "Lobbyismus", "Marketing",
  "Medien", "Meere", "Meeresbewohner", "Müll", "Negativ-Emissionen",
  "Ökosysteme", "Organisation", "Pflanzen", "Physik", "Politik",
  "Projekte", "Psychologie", "Regional", "Rohstoffe",
  "Solar", "Support", "Technik", "Tiere", "Transport",
  "Verkehr", "Vorträge", "Windenergie", "Wirtschaft",
  "Wissenschaft", "Wohnen", "WoManpower", "Ziviler Ungehorsam"
];

export const INTERESTS: Interest[] = [
  {id: 1, name: 'Aktivismus', description: '', checked: false, focus: Array(0)},
  {id: 2, name: 'Alltag', description: '', checked: false, focus: Array(0)},
  {id: 3, name: 'Amazonas', description: '', checked: false, focus: Array(0)},
  {id: 4, name: 'Antarktis', description: '', checked: false, focus: Array(0)},
  {id: 5, name: 'Argumentation', description: '', checked: false, focus: Array(0)},
  {id: 6, name: 'Arktis', description: '', checked: false, focus: Array(0)},
  {id: 7, name: 'Atmosphäre', description: '', checked: false, focus: Array(0)},
  {id: 8, name: 'Baustoffe', description: '', checked: false, focus: Array(0)},
  {id: 9, name: 'Bildung', description: '', checked: false, focus: Array(0)},
  {id: 10, name: 'Biodiversität', description: '', checked: false, focus: Array(0)},
  {id: 11, name: 'Chemie', description: '', checked: false, focus: Array(0)},
  {id: 12, name: 'Demos', description: '', checked: false, focus: Array(0)},
  {id: 13, name: 'Energie', description: '', checked: false, focus: Array(0)},
  {id: 14, name: 'Ernährung', description: '', checked: false, focus: Array(0)},
  {id: 15, name: 'Extremwetter', description: '', checked: false, focus: Array(0)},
  {id: 16, name: 'Finanzmarkt', description: '', checked: false, focus: Array(0)},
  {id: 17, name: 'Forschung', description: '', checked: false, focus: Array(0)},
  {id: 18, name: 'Gärtnern', description: '', checked: false, focus: Array(0)},
  {id: 19, name: 'Gesellschaft', description: '', checked: false, focus: Array(0)},
  {id: 20, name: 'Gesundheit', description: '', checked: false, focus: Array(0)},
  {id: 21, name: 'Gewässer', description: '', checked: false, focus: Array(0)},
  {id: 22, name: 'Gletscher', description: '', checked: false, focus: Array(0)},
  {id: 23, name: 'Grundwasser', description: '', checked: false, focus: Array(0)},
  {id: 24, name: 'Insekten', description: '', checked: false, focus: Array(0)},
  {id: 25, name: 'Journalismus', description: '', checked: false, focus: Array(0)},
  {id: 26, name: 'Kapitalismus', description: '', checked: false, focus: Array(0)},
  {id: 27, name: 'Klimageschichte', description: '', checked: false, focus: Array(0)},
  {id: 28, name: 'Klimamodelle', description: '', checked: false, focus: Array(0)},
  {id: 29, name: 'Klimawandel allgem.', description: '', checked: false, focus: Array(0)},
  {id: 30, name: 'Kippelemente', description: '', checked: false, focus: Array(0)},
  {id: 31, name: 'Kommunikation', description: '', checked: false, focus: Array(0)},
  {id: 32, name: 'Kunst', description: '', checked: false, focus: Array(0)},
  {id: 33, name: 'Landwirtschaft', description: '', checked: false, focus: Array(0)},
  {id: 34, name: 'Lärmverschmutzung', description: '', checked: false, focus: Array(0)},
  {id: 35, name: 'Leben auf dem Land', description: '', checked: false, focus: Array(0)},
  {id: 36, name: 'Leben in der Stadt', description: '', checked: false, focus: Array(0)},
  {id: 37, name: 'Lehre', description: '', checked: false, focus: Array(0)},
  {id: 38, name: 'Lichtverschmutzung', description: '', checked: false, focus: Array(0)},
  {id: 39, name: 'Lobbyismus', description: '', checked: false, focus: Array(0)},
  {id: 40, name: 'Marketing', description: '', checked: false, focus: Array(0)},
  {id: 41, name: 'Medien', description: '', checked: false, focus: Array(0)},
  {id: 42, name: 'Meere', description: '', checked: false, focus: Array(0)},
  {id: 43, name: 'Meeresbewohner', description: '', checked: false, focus: Array(0)},
  {id: 44, name: 'Müll', description: '', checked: false, focus: Array(0)},
  {id: 45, name: 'Negativ-Emissionen', description: '', checked: false, focus: Array(0)},
  {id: 46, name: 'Ökosysteme', description: '', checked: false, focus: Array(0)},
  {id: 47, name: 'Organisation', description: '', checked: false, focus: Array(0)},
  {id: 48, name: 'Pflanzen', description: '', checked: false, focus: Array(0)},
  {id: 49, name: 'Physik', description: '', checked: false, focus: Array(0)},
  {id: 50, name: 'Politik', description: '', checked: false, focus: Array(0)},
  {id: 51, name: 'Projekte', description: '', checked: false, focus: Array(0)},
  {id: 52, name: 'Psychologie', description: '', checked: false, focus: Array(0)},
  {id: 53, name: 'Regional', description: '', checked: false, focus: Array(0)},
  {id: 54, name: 'Rohstoffe', description: '', checked: false, focus: Array(0)},
  {id: 55, name: 'Solar', description: '', checked: false, focus: Array(0)},
  {id: 56, name: 'Support', description: '', checked: false, focus: Array(0)},
  {id: 57, name: 'Technik', description: '', checked: false, focus: Array(0)},
  {id: 58, name: 'Tiere', description: '', checked: false, focus: Array(0)},
  {id: 59, name: 'Transport', description: '', checked: false, focus: Array(0)},
  {id: 60, name: 'Verkehr', description: '', checked: false, focus: Array(0)},
  {id: 61, name: 'Vorträge', description: '', checked: false, focus: Array(0)},
  {id: 62, name: 'Windenergie', description: '', checked: false, focus: Array(0)},
  {id: 63, name: 'Wirtschaft', description: '', checked: false, focus: Array(0)},
  {id: 64, name: 'Wissenschaft', description: '', checked: false, focus: Array(0)},
  {id: 65, name: 'Wohnen', description: '', checked: false, focus: Array(0)},
  {id: 66, name: 'WoManpower', description: '', checked: false, focus: Array(0)},
  {id: 67, name: 'Ziviler Ungehorsam', description: '', checked: false, focus: Array(0)}
];





