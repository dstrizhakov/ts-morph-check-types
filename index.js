// import checkTypes from "./utils/morphTest";
// import { codeExample, testExample } from "./mock/data.js";
const checkTypes = require("./src/utils/morphTest");
const { codeExample, testExample } = require("./src/mock/data.js");

const [diagnostics, formattedDiagnostics] = checkTypes(codeExample, testExample);

console.log(formattedDiagnostics || "\nTest completed successfully!\n");
