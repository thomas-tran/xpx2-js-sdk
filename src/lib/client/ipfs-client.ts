import { from, Observable } from 'rxjs';
import { Id } from '../model/ipfs-id';
export class IpfsClient {
  protected API = require('ipfs-api');

  constructor(host: string, port?: string, options?: object) {
    this.API = this.API(host, port, options);
  }

  public getNodeId(): Observable<Id> {
    return from(this.API.id());
  }
}
