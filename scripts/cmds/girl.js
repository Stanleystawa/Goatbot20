const axios = require('axios');

module.exports = {
  config: {
    name: "girl2",
    aliases: ["kt"],
    version: "1.7",
    author: "@",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Lấy hình ảnh ngẫu nhiên",
      en: "Get random images"
    },
    longDescription: {
      vi: "Lấy hình ảnh ngẫu nhiên từ danh sách đã định nghĩa",
      en: "Get random images from the predefined list"
    },
    category: "image",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function() {
    const images = [
"https://i.imgur.com/NpdvSbS.jpeg ",
"https://i.imgur.com/VFP7Hg5.jpeg",
"https://i.imgur.com/0Pfo7hO.jpeg",
"https://i.imgur.com/MpxzeRZ.jpeg",
"https://i.imgur.com/SGZSrY0.jpeg",
"https://i.imgur.com/uny4mIB.jpeg",
"https://i.imgur.com/cFnjSzv.jpeg",
"https://i.imgur.com/Age7035.jpeg",
"https://i.imgur.com/XsX3Ajq.jpeg",
"https://i.imgur.com/iGRbWjI.jpeg",
"https://i.imgur.com/eUkQvwn.jpeg",
"https://i.imgur.com/dt9uATN.jpeg",
"https://i.imgur.com/G2jUtip.jpeg",
"https://i.imgur.com/A4evL78.jpeg",
"https://i.imgur.com/vf0tZAa.jpeg",
"https://i.imgur.com/UBo4Xg2.jpeg",
"https://i.imgur.com/HYYckS0.jpeg",
"https://i.imgur.com/9wIwGXS.jpeg",
"https://i.imgur.com/hNpFOjm.jpeg",
"https://i.imgur.com/mSfDXkI.jpeg",
"https://i.imgur.com/cN4M7vf.jpeg",
"https://i.imgur.com/6PkL2ZO.jpeg",
"https://i.imgur.com/95vkZdy.jpeg",
"https://i.imgur.com/u0lAkjh.jpeg",
"https://i.imgur.com/c5AetxM.jpeg",
"https://i.imgur.com/uFXn4nS.jpeg",
"https://i.imgur.com/slsV4wp.jpeg",
"https://i.imgur.com/Wcy2Muu.jpeg",
"https://i.imgur.com/mOvxSnJ.jpeg",
"https://i.imgur.com/EaA7nKY.jpeg"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  },

  onStart: async function({ message }) {
    try {
      const imageUrl = this.getRandomImage();

      return message.reply({
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (error) {
      console.error("Error while retrieving waifu image:", error);
      return message.reply("An error occurred while processing your request.");
    }
  }
};