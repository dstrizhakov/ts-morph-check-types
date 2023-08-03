const checkTypes = require("./src/utils/morphTest");
const fs = require("fs");

const CODE = process.env.CODE;
const TEST = process.env.TEST;
const FORMAT = process.env.FORMAT || "string"; // 'string' by default or 'file';

const startTest = (codeExample, testExample, format) => {
  if (format !== "string" && format !== "file") {
    console.error("Invalid FORMAT: " + format);
    return null;
  }
  if (format === "string") {
    wrireResults(...checkTypes(codeExample, testExample));
  } else if (format === "file") {
    const codeString = fs.readFileSync(codeExample);
    const testString = fs.readFileSync(testExample);
    wrireResults(...checkTypes(codeString, testString));
  }
};

const wrireResults = (diagnostics, formattedDiagnostics) => {
  fs.writeFileSync("./results/diagnostics.json", JSON.stringify(diagnostics));
  fs.writeFileSync("./results/formattedDiagnostics.json", JSON.stringify(formattedDiagnostics));
};

startTest(CODE, TEST, FORMAT);
