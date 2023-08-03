// import { Project } from "ts-morph";
const { Project } = require("ts-morph");

const checkTypes = (code, test) => {
  const project = new Project({
    // tsConfigFilePath: "tsconfig.json",
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFile = project.createSourceFile("code.ts", code, { overwrite: true });
  const testFile = project.createSourceFile("test.ts", test, { overwrite: true });
  sourceFile.getPreEmitDiagnostics();
  testFile.getPreEmitDiagnostics();

  const diagnostics = project.getPreEmitDiagnostics();
  const formattedDiagnostics = project.formatDiagnosticsWithColorAndContext(diagnostics);

  return [diagnostics, formattedDiagnostics];
};

// export default checkTypes;

module.exports = checkTypes;
