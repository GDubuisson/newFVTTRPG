import {DnDActorSheet} from "./actor-sheet";
import {System} from "../config.js";


export class CharacterSheet extends DnDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["character"],
            template: System.templatesPath + "/actors/character-sheet.hbs",
            width: 910,
            height: 920,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats"}],
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
        });
    }

    getData() {
        const data = super.getData();

        // Include abilities, skills, and saving throws in the sheet data
        data.abilities = CONFIG.DND.abilities;
        data.skills = CONFIG.DND.skills;
        data.savingThrows = CONFIG.DND.savingThrows;

        return data;
    }

}