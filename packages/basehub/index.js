try {
  module.exports = require("./dist/generated-client/index");
} catch (error) {
  throw new Error(
    "`basehub` SDK not found. Make sure to run `npx basehub` in order to generate it."
  );
}
