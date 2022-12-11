import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { getSharkyLoans } from "../sharky/sharky";

export const Loans: Command = {
    name: "loans",
    description: "Returns the top 5 collections on Sharky",
    run: async (client: Client, interaction: CommandInteraction) => {

        const embeds = await getSharkyLoans();

        await interaction.editReply({
            embeds,
        });
    }
}; 