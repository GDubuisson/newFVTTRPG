// Main JavaScript file for the New FVTTRPG System
Hooks.once('init', async function() {
  console.log('Initializing New FVTTRPG System');

  // Ajout des types d'entités pour D&D
  CONFIG.Actor.documentClass = DnDActor;
  CONFIG.Item.documentClass = DnDItem;
});

// Enregistrement de la feuille de personnage pour les acteurs de type "character"
Actors.registerSheet("dnd", CharacterSheet, {
  types: ["character"],
  makeDefault: true
});

class DnDActor extends Actor {
  prepareData() {
    super.prepareData();
    // Ajout des données spécifiques aux acteurs D&D
  }
}

class DnDItem extends Item {
  prepareData() {
    super.prepareData();
    // Ajout des données spécifiques aux objets D&D
  }
}
