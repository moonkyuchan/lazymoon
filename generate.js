const fs = require("fs");
const path = require("path");
const {
  createInterfacesFromObject,
} = require("typescript-interface-generator");
const { parse } = require("sass-variable-parser");

const variables = parse(
  fs
    .readFileSync(path.resolve(__dirname, "src/Styles/variables.scss"))
    .toString()
);

const theme = createInterfacesFromObject("DefaultTheme", {
  ...variables,
});

fs.writeFileSync(
  "./src/Types/styled.d.ts",
  `
  import 'styled-components';
  
  declare module 'styled-components' {
    export ${theme}
  }
`,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function (err) {
    console.log("err", err);
    new Error(err);
  }
);
