import * as fs from 'fs';
import * as path from 'path';
import { IFileOrFolder } from '../interfaces/index';
import { FileSystemItemType } from '../enums';

export const createFolderStructure = (projectPath: string, folderStructure: IFileOrFolder[]) => {
  folderStructure.forEach(item => {
    const fullPath = path.join(projectPath, item.path);

    if (item.type === FileSystemItemType.Folder) {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    } else if (item.type === FileSystemItemType.File) {
      fs.writeFileSync(fullPath, item.content || '');
    }
  });
};
