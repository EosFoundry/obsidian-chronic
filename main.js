'use strict';

var obsidian = require('obsidian');

class Chronic extends obsidian.Plugin {
    async onload() {
        // Configure resources needed by the plugin.
        const files = this.app.vault.getFiles();
        for (let i = 0; i < files.length; i++) {
            console.log('poop', files[i].path);
        }
    }
    async onunload() {
        // Release any resources configured by the plugin.
    }
}

module.exports = Chronic;
