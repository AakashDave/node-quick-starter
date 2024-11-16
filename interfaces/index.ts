export interface IPackage{
    name: string;
    type: string;
}

export interface IFileOrFolder {
    path: string; 
    type: 'folder' | 'file'; 
    content?: string;
  }

  export interface ITerminalQuestions
  {
    type: string;
    name: string;
    message: string;
    choices?: string[];
    default: any;
  }