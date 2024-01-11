import fs from 'fs';
import path from 'path';

// const [, , BASE_URL] = process.argv
// const BASE_URL='${location.protocol ?? `http:`}//${location.host ?? `localhost`}'
const BASE_URL = '.'

console.log( "We are replacing all instances of cdn.ui.porsche with", BASE_URL )

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

const npmFilePaths = getAllFiles('./node_modules/@porsche-design-system').filter(file => /\.(?:js|cjs|mjs)$/g.test(file));

npmFilePaths.forEach((filePath) => {
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // tried to get it running with location.protocol but node_modules/@porsche-design-system/components-js/partials/index.cjs does not have location context.
  /*
  const regex = new RegExp( "([\"'`])https://cdn.ui.porsche[a-z\./]+", 'g' )
  const transformedFileContent = fileContent
    .replace( /https:.*ui.porsche.*webmanifest/g, "")
    .replace(/\\"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `\\${BASE_URL}\\`)// json-strings
    .replace( regex , "`" + BASE_URL + "`" + "+$1" ) */

  const transformedFileContent = fileContent
    .replace(/(?<!\\)"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `"${BASE_URL}"`)
    .replace(/\\"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `\\"${BASE_URL}\\"`) // JSON.
    .replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)
    .replace(/`https:\/\/cdn\.ui\.porsche\..*?`/g, `'${BASE_URL}'`)
  
  if ( fileContent != transformedFileContent ){
    console.log( "changed stuff in " , filePath )
  }
  fs.writeFileSync(filePath, transformedFileContent);
});

const publicFilePaths = getAllFiles('./public/porsche-design-system').filter(file => /\.(?:js|css|webmanifest)$/g.test(file));

publicFilePaths.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const transformedFileContent = fileContent
    .replace("url('https://cdn.ui.porsche.com/", "url('/") // we don't want "./" in css just "/" so root url is referenced.
    .replace("url('https://cdn.ui.porsche.cn/", "url('/") // we don't want "./" in css just "/" so root url is referenced.
    .replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)
  if ( fileContent != transformedFileContent ){
    console.log( "changed stuff in " , filePath )
  }
  fs.writeFileSync(filePath, transformedFileContent);
});
