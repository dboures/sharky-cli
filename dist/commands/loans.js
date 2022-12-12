"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loans = void 0;
const sharky_1 = require("../sharky/sharky");
exports.Loans = {
    name: "loans",
    description: "Returns the top 5 collections on Sharky",
    run: async (client, interaction) => {
        const embeds = await (0, sharky_1.getSharkyLoans)();
        await interaction.editReply({
            embeds,
        });
    }
};
