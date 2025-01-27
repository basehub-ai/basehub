import fs from "fs";
import path from "path";

const filePath = path.resolve("dts/src/api-transaction.d.ts");

try {
  let content = fs.readFileSync(filePath, "utf8");

  // Replace the export line
  content = content.replace(
    /export type Transaction = {/g,
    "export type FullTransaction = {"
  );

  // Replace any references to Transaction in the Transaction2 type
  content = content.replace(
    /Transaction\["operations"\]/g,
    'FullTransaction["operations"]'
  );

  // Replace the final export
  content = content.replace(
    /export \{ Transaction2 as Transaction \};/g,
    "export { Transaction2 as Transaction };"
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Successfully updated api-transaction.d.ts");
} catch (error) {
  console.error("Error updating file:", error);
}
