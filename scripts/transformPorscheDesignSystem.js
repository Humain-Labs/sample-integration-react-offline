import fs from 'fs';
import path from 'path';

// const [, , BASE_URL] = process.argv
// const BASE_URL='${location.protocol ?? `http:`}//${location.host ?? `localhost`}'
const BASE_URL = '.'

console.log( "We are replacing all instances of cdn.ui.porsche with", BASE_URL )

const getAllFiles = dirs => {
  return dirs.reduce((files, dir) => {
    const filesInDir = fs.readdirSync(dir).map(file => {
      const filePath = path.join(dir, file);
      return fs.statSync(filePath).isDirectory() ? getAllFiles([filePath]) : filePath;
    });
    return files.concat(...filesInDir);
  }, []);
};


/**
 * Transform files in node_modules/@porsche-design-system
 */
const npmFilePaths = getAllFiles(['./components-js', './components-react']).filter(file => /\.(?:js|cjs|mjs|ts|json|md|scss)$/g.test(file));
const changedNpmFiles = npmFilePaths.filter((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // tried to get it running with location.protocol but node_modules/@porsche-design-system/components-js/partials/index.cjs does not have location context.
  /*
  const regex = new RegExp( "([\"'`])https://cdn.ui.porsche[a-z\./]+", 'g' )
  const transformedFileContent = fileContent
    .replace( /https:.*ui.porsche.*webmanifest/g, "")
    .replace(/\\"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `\\${BASE_URL}\\`)// json-strings
    .replace( regex , "`" + BASE_URL + "`" + "+$1" ) */

  const transformedFileContent = fileContent
    .replaceAll( "@porsche-design-system" , "@porsche-offline-design-system" )
    .replace(/(?<!\\)"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `"${BASE_URL}"`)
    .replace(/\\"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `\\"${BASE_URL}\\"`) // JSON.
    .replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)
    .replace(/`https:\/\/cdn\.ui\.porsche\..*?`/g, `'${BASE_URL}'`)
  
  fs.writeFileSync(filePath, transformedFileContent);
  return fileContent != transformedFileContent

});

fs.writeFileSync( `readme-replacements.md`, 
`We have replaced things in the following component-files.

${changedNpmFiles.join('\n')}
` )
console.log( "Replaced things in ", changedNpmFiles )

/**
 * Transform CDN-Files
 */
const cdnFolder = './public/porsche-design-system'
const cdnFilePaths = getAllFiles([ cdnFolder ]).filter(file => /\.(?:js|css|webmanifest)$/g.test(file));
const changedCdnFiles = cdnFilePaths.filter((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const transformedFileContent = fileContent
    .replaceAll( "@porsche-design-system" , "@porsche-offline-design-system" )
    .replaceAll("url('https://cdn.ui.porsche.com/", "url('/") // we don't want "./" in css just "/" so root url is referenced.
    .replaceAll("url('https://cdn.ui.porsche.cn/", "url('/") // we don't want "./" in css just "/" so root url is referenced.
    // not sure, where the localhost 3001 is coming from...
    .replaceAll("http://localhost:3001/fonts", "/porsche-design-system/fonts") // we don't want "./" in css just "/" so root url is referenced.
    .replaceAll("3001", "3333") // we don't want "./" in css just "/" so root url is referenced.
    .replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)

  fs.writeFileSync(filePath, transformedFileContent);

  return fileContent != transformedFileContent
});
fs.writeFileSync( `${cdnFolder}/readme.md`, 
`This is a copy of the porsche-design-system CDN which "works" offline.
More info here: https://github.com/Humain-Labs/sample-integration-react-offline

We have replaced things in the following files.

${changedCdnFiles.join('\n')}
` )
console.log( "Replaced things in ", changedCdnFiles )
