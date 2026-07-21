import {registerSystemSettings} from "./settings";
import {DND} from "./config.js";
import {DNDActor} from "./actors/actor.js";
import {CharacterSheet} from "./actors/character-sheet.js";

Hooks.once("init", async function () {

    console.info("Initialized state");

    registerSystemSettings();

    CONFIG.Combat.initiative = {
        formula: "1d20 + @abilities.dexterity.mod",
        decimals: 2
    };

    CONFIG.DND = DND;

    CONFIG.Actor.documentClass = DNDActor;

    CONFIG.Combat.initiative.formula = "1d20 + @abilities.dexterity.mod";

    game.dnd = {
        skin: "default",
        macros: Macros,
        config: DND
    }

    Actors.unregisteredSheet("core", ActorSheet);

    console.info("DND | Standard sheets unregistered");

    Actors.registerSheet("dnd", CharacterSheet, {
        types: ["character"],
        makeDefault: true,
        label: "DND.SheetClassCharacter"
    })

    console.info("DND | Init done");
});