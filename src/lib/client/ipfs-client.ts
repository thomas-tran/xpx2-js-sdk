import { from, Observable } from 'rxjs';

export class IpfsClient {
  protected API = require('ipfs-api');

  constructor(host: string, port?: string, options?: object) {
    this.API = this.API(host, port, options);
  }

  public getNodeId(): Observable<any> {
    return from(this.API.id());
  }
}
