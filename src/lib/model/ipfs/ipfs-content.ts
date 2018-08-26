import { FileContent } from '../common/file-content';

export interface IpfsContent {
  path: string;
  hash: string;
  size: number;
  content?: FileContent;
}
