import { execSync } from 'child_process';

export const getLatestPackageVersion = (packageName: string): string => {
  try {
    return execSync(`npm show ${packageName} version`).toString().trim();
  } catch (err) {
    console.error(`Error fetching version for ${packageName}`, err);
    return 'latest';
  }
};