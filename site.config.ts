import { execSync } from 'child_process';

function getGitBranch(): string {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

export default {
  disableIndexing: getGitBranch() !== 'main',
};
