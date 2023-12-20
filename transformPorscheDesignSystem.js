import fs from 'fs';
import path from 'path';

const [, , BASE_URL] = process.argv

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

const npmFilePaths = getAllFiles('./node_modules/@porsche-design-system').filter(file => /\.(?:js|cjs|mjs)$/g.test(file));

npmFilePaths.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const transformedFileContent = fileContent
    .replace(/(?<!\\)"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `"${BASE_URL}"`)
    .replace(/\\"https:\/\/cdn\.ui\.porsche\..*?\(.*?\)/g, `\\"${BASE_URL}\\"`)
    .replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)
    .replace(/`https:\/\/cdn\.ui\.porsche\..*?`/g, `'${BASE_URL}'`);
  fs.writeFileSync(filePath, transformedFileContent);
});

const publicFilePaths = getAllFiles('./public/porsche-design-system').filter(file => /\.(?:js|css|webmanifest)$/g.test(file));

publicFilePaths.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const transformedFileContent = fileContent.replace(/https:\/\/cdn\.ui\.porsche\.(?:com|cn)/g, BASE_URL)
  fs.writeFileSync(filePath, transformedFileContent);
});
