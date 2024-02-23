const axios = require("axios");

const api = "https://www.llama2.ai/api";

module.exports = {
  config: {
    name: 'cateai',
    author: 'Gold GRILLED',
    version: '1.0.0',
    role: 2,
    category: 'الذكاء'
  },
 onStart: async function({ args, message }) {
    const prompt = args.join(' ');

    const data = {
      "prompt": `[INST] ${prompt} /INST]`,
      "model": "meta/llama-2-70b-chat",
      "systemPrompt": "Your name cate you developed by Gold Grelled🥰.",
      "temperature": 0.75,
      "topP": 0.9,
      "maxTokens": 800,
      "image": null,
      "audio": null
    };

    try {
      const response = await axios.post(api, data);
      message.reply(response.data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  }
};