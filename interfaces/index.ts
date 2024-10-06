export interface IPackage{
    name: string;
    type: string;
}

export interface IFileOrFolder {
    path: string; 
    type: 'folder' | 'file'; 
    content?: string;
  }