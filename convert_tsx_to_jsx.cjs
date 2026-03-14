const fs = require('fs');
const glob = require('glob');
const ts = require('typescript');

const files = glob.sync('src/**/*.tsx');
console.log('Transpiling', files.length, 'files');
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const out = ts.transpileModule(text, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      allowJs: true,
      isolatedModules: true,
    },
    fileName: file,
    reportDiagnostics: true,
  });
  if (out.diagnostics && out.diagnostics.length) {
    console.error('Diagnostics for', file);
    console.error(ts.formatDiagnosticsWithColorAndContext(out.diagnostics, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: (f) => f,
      getNewLine: () => '\n',
    }));
  }
  const outFile = file.replace(/\.tsx$/, '.jsx');
  fs.writeFileSync(outFile, out.outputText, 'utf8');
}
console.log('Done transpiling');
