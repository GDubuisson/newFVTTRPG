// Main JavaScript file for the New FVTTRPG System
Hooks.once('init', async function() {
  console.log('Initializing New FVTTRPG System');

  // Ajout des types d'entités pour D&D
  CONFIG.Actor.documentClass = DnDActor;
  CONFIG.Item.documentClass = DnDItem;
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
