import { expect } from 'chai';
import 'mocha';
import { IpfsClient } from './ipfs-client';

describe('IpfsClientUnitTests', () => {
  it('should return the node info', () => {
    const ipfsClient = new IpfsClient('localhost', '5001');

    ipfsClient.getNodeId().subscribe(
      node => {
        // console.log(node);
        expect(node).to.be.exist;
        expect(node).to.have.property('id');
        expect(node).to.have.property('publicKey');
        expect(node).to.have.property('addresses');
      },
      error => {
        // console.log(error);
        expect(error).to.not.be.exist;
      }
    );
  });
});
