// ===============================
// The echo command just respond with the given arguments.
// This is useful to check, if the bot is still alive.
// ===============================

const { get_text: gt } = require("../../lang/lang_man")
const s = "commands.echo."

module.exports = {
    name: 'echo',
    description: async function (msg) { return await gt(msg, s + "help") },
    aliases: ['echos'],
    args_needed: true,
    usage: async function (msg) { return await gt(msg, s + "usage") },
    args_min_length: 1,
    admin_only: true,
    enable_slash: false,
    async execute(msg, args) {
        msg.client.output.send(msg, args.join(" "));
    },
};
