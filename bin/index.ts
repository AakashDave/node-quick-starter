
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { getLatestPackageVersion } from '../utils/npmUtils';
import { packageList } from '../utils/packageList';
import { PackageType } from '../enums';
import { folderStructure } from '../utils/folderStructure';
import { createFolderStructure } from "../utils/folderUtils";

// Parsing command line arguments
const args = process.argv.slice(2);
let projectName = "my-node-project";

// Check if "--name" flag is provided
const nameIndex = args.indexOf("--name");
if (nameIndex !== -1 && args[nameIndex + 1]) {
  projectName = args[nameIndex + 1];
  projectName = projectName.toLowerCase();
}

// Create the project folder
let projectPath = path.join(process.cwd(), projectName);
if (fs.existsSync(projectPath)) {
  console.error(`Error: The directory "${projectName}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(projectPath);

createFolderStructure(projectPath, folderStructure);

const packageJson:any = {
  name: projectName,
  version: '1.0.0',
  main: 'index.js',
  scripts: {
    start: "node src/app.js",
    dev: "nodemon src/app.js"
  },
  dependencies: {},
  devDependencies: {}
};

// Populate dependencies and devDependencies from the package list
packageList.forEach(pkg => {
  const version = getLatestPackageVersion(pkg.name);
  if (pkg.type === PackageType.Dependency) {
    packageJson.dependencies[pkg.name] = version;
  } else if (pkg.type === PackageType.DevDependency) {
    packageJson.devDependencies[pkg.name] = version;
  }
});

// Write package.json to the project folder
fs.writeFileSync(
  path.join(projectPath, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);


console.log(`Node.js project "${projectName}" has been created successfully.`);
