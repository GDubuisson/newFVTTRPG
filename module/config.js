export const System = {};

System.label = "DND";
System.abbrev = "DND VTT";
System.name = "dnd";
System.rootPath = "/systems/" + System.name;
System.dataPath = System.rootPath + "/_data";
System.templatesPath = System.rootPath + "/templates";
System.logPrefix = System.abbrev;
System.debugMode = true;

export const DND = {};

DND.origines = {
    "fleuraine": "DND.origines.fleuraine",
    "altenmark": "DND.origines.altenmark",
    "ravenmoor": "DND.origines.ravenmoor",
    "valdera": "DND.origines.valdera",
    "lucentia": "DND.origines.lucentia",
    "azhara": "DND.origines.azhara"
}

DND.languages = {
    "fleurain": "DND.languages.fleurain",
    "altenique": "DND.languages.altenique",
    "ravenois": "DND.languages.ravenois",
    "valderan": "DND.languages.valderan",
    "lucentien": "DND.languages.lucentien",
    "azharan": "DND.languages.azharan"
}

DND.abilities = {
    hp: "DND.abilities.hp",
    str: "DND.abilities.strength",
    dex: "DND.abilities.dexterity",
    con: "DND.abilities.constitution",
    int: "DND.abilities.intelligence",
    wis: "DND.abilities.wisdom",
    cha: "DND.abilities.charisma"
};

DND.abilities.modificateurs = {
    "strength_mod": "DND.abilities.strength.mod",
    "dexterity_mod": "DND.abilities.dexterity.mod",
    "constitution_mod": "DND.abilities.constitution.mod",
    "intelligence_mod": "DND.abilities.intelligence.mod",
    "wisdom_mod": "DND.abilities.wisdom.mod",
    "charisma_mod": "DND.abilities.charisma.mod"
}

DND.skills = {
    acrobatics: "DND.skills.acrobatics",
    animalHandling: "DND.skills.animalHandling",
    arcana: "DND.skills.arcana",
    athletics: "DND.skills.athletics",
    deception: "DND.skills.deception",
    history: "DND.skills.history",
    insight: "DND.skills.insight",
    intimidation: "DND.skills.intimidation",
    investigation: "DND.skills.investigation",
    medicine: "DND.skills.medicine",
    nature: "DND.skills.nature",
    perception: "DND.skills.perception",
    performance: "DND.skills.performance",
    persuasion: "DND.skills.persuasion",
    religion: "DND.skills.religion",
    sleightOfHand: "DND.skills.sleightOfHand",
    stealth: "DND.skills.stealth",
    survival: "DND.skills.survival"
};

DND.savingThrows = ["str", "dex", "con", "int", "wis", "cha"];

DND.classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
];
