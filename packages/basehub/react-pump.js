try {
  module.exports = require("./dist/generated-client/react-pump");
} catch (error) {
  throw new Error(
    `\`react-pump\` not found. Make sure to run \`npx basehub\` in order to generate it.
  
  If you're using a custom \`--output\`, you'll need to import the SDK from that same output directory.
  
  If the error persist, please raise an issue at https://github.com/basehub-ai/basehub
  `
  );
}
