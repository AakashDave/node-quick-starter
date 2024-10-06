import * as fs from 'fs';
import * as path from 'path';
import { IFileOrFolder } from '../interfaces/index';

export const createFolderStructure = (projectPath: string, folderStructure: IFileOrFolder[]) => {
  folderStructure.forEach(item => {
    const fullPath = path.join(projectPath, item.path);

    if (item.type === 'folder') {
      // Create folder if it doesn't exist
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created folder: ${fullPath}`);
      }
    } else if (item.type === 'file') {
      // Write content to file
      fs.writeFileSync(fullPath, item.content || '');
      console.log(`Created file: ${fullPath}`);
    }
  });
};
