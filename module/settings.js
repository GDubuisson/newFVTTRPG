export const registerSystemSettings = function() {

    game.settings.register("dnd", "systemMigrationVersion", {
      name: "System Migration Version",
      scope: "world",
        config: false,
      type: String,
      default: ""
    });
}