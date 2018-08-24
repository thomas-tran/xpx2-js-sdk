import { Multiaddr } from './ipfs-multaddress';

export interface Id {
  id: string;
  publicKey: string;
  addresses: Multiaddr[];
  agentVersion: string;
  protocolVersion: string;
}
