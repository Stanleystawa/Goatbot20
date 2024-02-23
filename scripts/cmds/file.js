const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "Gold grelled",
    countDown: 5,
    role: 2,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
 const permission = ["100087967063688", ""];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("You don't have enough permission to use this command. Only Grelled can do it.", event.threadID, event.messageID);
    return;
  }
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};