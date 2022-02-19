const fs = require("fs");

const createFile = (readmeContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/readME.md", readmeContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "file created!",
      });
    });
  });
};

module.exports = createFile;
