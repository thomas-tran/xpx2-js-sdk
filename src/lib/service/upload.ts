import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IpfsClient } from '../client/ipfs';
import { DataFile } from '../model/common/data-file';
import { FileContent } from '../model/common/file-content';
import { IpfsContent } from '../model/ipfs/ipfs-content';
import { PrivacyStrategyType } from '../model/privacy/privacy-strategy-type';
import { UploadParameter } from '../model/upload/upload-parameter';
import { UploadResult } from '../model/upload/upload-result';
import { UploadResultData } from '../model/upload/upload-result-data';
import { UploadResultRootData } from '../model/upload/upload-result-root-data';

export class UploadService {
  private ipfsClient: IpfsClient;

  constructor(ipfsClient: IpfsClient) {
    this.ipfsClient = ipfsClient;
  }

  public createDataFile(
    data: FileContent,
    name?: string,
    description?: string,
    contentType?: string,
    metadata?: Map<any, any>,
    options?: any
  ): Observable<DataFile> {
    return this.ipfsClient.addContent(data, options).pipe(
      map(response => {
        const ipfsContent: IpfsContent[] = response;

        const dataFile: DataFile = {
          contentType,
          description,
          hash: ipfsContent[0].hash,
          metadata,
          name,
          path: ipfsContent[0].path
        };

        return dataFile;
      })
    );
  }

  public upload(uploadParam: UploadParameter): Observable<UploadResult> {
    console.log(uploadParam);

    const dataMap = new Map();
    dataMap.set('author', 'Thomas');

    const uploadResultData: UploadResultData = {
      contentType: 'text/plain',
      dataHash: 'test-data-has',
      description: 'data-hash-description',
      digest: 'test-digest',
      metadata: dataMap,
      name: 'upload result name',
      timestamp: 1234342342
    };

    const resultDataList: UploadResultData[] = [];
    resultDataList.push(uploadResultData);

    const uploadRootData: UploadResultRootData = {
      dataList: resultDataList,
      description: 'root description',
      privacySearchTag: 'search here',
      privacyType: PrivacyStrategyType.PLAIN,
      version: '1.0'
    };

    const uploadResult: UploadResult = {
      digest: 'test digret',
      rootData: uploadRootData,
      rootDataHash: 'data hash',
      transactionHash: 'transaction hash'
    };

    return of(uploadResult);
  }
}
