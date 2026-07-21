export class DnDActorSheet extends ActorSheet {

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
        // Add any additional listeners here
    }

    /** @override */
    async getData(options) {

        const source = this.actor.toObject();
        const actorData = this.actor.toObject(false);

        let isOwner = this.actor.isOwner;

        const data = {
            owner: isOwner,
            limited: this.actor.limited,
            options: this.options,
            editable: this.isEditable,
            config: CONFIG.DND,
            actor: actorData,
            system: actorData.system,
            items: actorData.items
        };

        // Owned Items
        for ( let i of data.items ) {
            const item = this.actor.items.get(i._id);
            i.labels = item.labels;
        }
        data.items.sort((a, b) => (a.sort || 0) - (b.sort || 0));

        data.biographyHTML = await TextEditor.enrichHTML(data.system.description, {
            secrets: this.actor.isOwner,
            async: true,
            relativeTo: this.actor
        });
        // Add any additional data processing here
        return data;
    }


}