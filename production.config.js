const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/app.js" , "./dev_2/entry.js"],
  module:{
    defaultRules:[
      {
        test:/\.css$/,
        use:["style-loader" , "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "production.js",
  },
};
