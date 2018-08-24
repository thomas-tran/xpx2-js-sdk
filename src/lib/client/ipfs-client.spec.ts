import 'mocha';

import { take } from 'rxjs/operators';
import { IpfsClient } from './ipfs-client';

describe('IpfsClientUnitTests', () => {
  it('should return the node info', () => {
    const ipfsClient = new IpfsClient('localhost', '5001');

    return ipfsClient
      .getNodeId()
      .pipe(take(1))
      .subscribe(
        node => {
          console.log(node);
        },
        error => {
          console.log(error);
        }
      );
  });
});
