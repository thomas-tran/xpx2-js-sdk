import { from, Observable } from 'rxjs';

export class IpfsClient {
  private ifps: any;

  constructor(host: string, port?: string, options?: object) {
    const ipfsApi = require('ipfs-api');
    this.ifps = ipfsApi(host, port, options);
  }

  public isDaemonRunning(): Observable<boolean> {
    return from(this.ifps.version());
  }
}
