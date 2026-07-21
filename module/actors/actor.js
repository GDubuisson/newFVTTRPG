export class DNDActor extends Actor {

    /** @override */
    static async create(data, options = {}) {

        if (typeof data.items === 'undefined') {

            data.items = [];

            let caps = game.dnd.config.competences;

            if (data.type === "character") {
                foundry.utils.mergeObject(data.items, caps, {overwrite: false});
            }
        }
        let enti = super.create(data, options);

        return enti;
    }

    prepareData() {
        super.prepareData();

        if (this.type === "character") {
            const data = this.system;

            // Initialize abilities
            data.abilities = data.abilities || {};
            for (let [key, label] of Object.entries(CONFIG.DND.abilities)) {
                data.abilities[key] = data.abilities[key] || { value: 10, mod: 0 };
            }

            // Initialize skills
            data.skills = data.skills || {};
            for (let [key, label] of Object.entries(CONFIG.DND.skills)) {
                data.skills[key] = data.skills[key] || { value: 0, proficient: false };
            }

            // Initialize saving throws
            data.savingThrows = data.savingThrows || {};
            for (let ability of CONFIG.DND.savingThrows) {
                data.savingThrows[ability] = data.savingThrows[ability] || { proficient: false };
            }

            // Initialize hit points
            data.hp = data.hp || { value: 10, max: 10 };
        }
    }

}