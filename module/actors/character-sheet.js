import {DnDActorSheet} from "./actor-sheet";


export class CharacterSheet extends DnDActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["aria", "sheet", "actor", "character"],
            template: System.templatesPath + "/actors/character/character-sheet.hbs",
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