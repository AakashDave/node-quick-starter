
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { getLatestPackageVersion } from '../utils/npmUtils';
import { packageList } from '../utils/javascript/packageList';
import { FrameworkType, PackageType } from '../enums';
import { folderStructure as javascriptFolderStructure } from '../utils/javascript/folderStructure';
import { folderStructure as typescriptFolderStructure }  from '../utils/typescript/folderStrucutre';
import { createFolderStructure } from "../utils/folderUtils";
import inquirer, { Question } from 'inquirer';
import { Answers } from 'inquirer';

const questions: Answers = [
  {
    type: "input",
    name: "name",
    message: "Enter your project name:",
    default: "myapp",
  },
  {
    type: "list",
    name: "framework",
    message: "Select your preferred language:",
    choices: ["JavaScript", "TypeScript"],
    default: "TypeScript",
  },
  {
    type: "confirm",
    name: "useCors",
    message: "Do you want to enable CORS?",
    default: false,
  },
  {
    type: "confirm",
    name: "useErrorHandler",
    message: "Do you want to use a basic error handler?",
    default: true,
  },
  {
    type: "confirm",
    name: "useEnvFile",
    message: "Do you want to use an environment file?",
    default: true,
  },

  {
    type: "confirm",
    name: "useMorgan",
    message: "Do you want to use morgan for logging?",
    default: true,
  }
];

async function createProject(){
  console.log("Welcome to the Node Quick Starter...");
  const answers = await inquirer.prompt(questions);
  const args = process.argv.slice(2);
  const projectName = answers.name.toLowerCase();
  
  let projectPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    console.error(`Error: The directory "${projectName}" already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(projectPath);

  if(answers.framework === FrameworkType.Typescript){
    createFolderStructure(projectPath, typescriptFolderStructure);
  }else{
    createFolderStructure(projectPath, javascriptFolderStructure);
  }
  
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
  
  packageList.forEach(pkg => {
    const version = getLatestPackageVersion(pkg.name);
    if (pkg.type === PackageType.Dependency) {
      packageJson.dependencies[pkg.name] = version;
    } else if (pkg.type === PackageType.DevDependency) {
      packageJson.devDependencies[pkg.name] = version;
    }
  });
  
  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  
  console.log(`Node.js project "${projectName}" has been created successfully.`);
  
}

createProject();