import { IPackage } from '../../interfaces/index';
import { PackageType } from '../../enums/index';

export const packageList: IPackage[] = [
    { name: 'express', type: PackageType.Dependency },
    { name: 'nodemon', type: PackageType.DevDependency },
    { name: 'body-parser', type: PackageType.Dependency },
    { name: 'dotenv', type: PackageType.Dependency },
  ];
  