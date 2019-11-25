
const ncp = require("copy-paste");
ncp.paste((err, val) => {
  const string = Buffer.from(val, 'base64').toString();
  ncp.copy(string);
});
