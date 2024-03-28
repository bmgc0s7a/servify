import { writeFile } from "fs";
import manifest from "../manifest/index.ts";

try {
  writeFile(
    "./dist/manifest.json",
    JSON.stringify(manifest, null, 2),
    (err) => {
      // In case of a error throw err.
      if (err) throw err;
    }
  );
} catch (error) {
  console.log("ERROR GENERATE MANIFEST.JSON!");
}
