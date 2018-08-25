import { Observable, of } from 'rxjs';
import { PrivacyStrategyType } from '../model/privacy/privacy-strategy-type';
import { UploadParameter } from '../model/upload/upload-parameter';
import { UploadResult } from '../model/upload/upload-result';
import { UploadResultData } from '../model/upload/upload-result-data';
import { UploadResultRootData } from '../model/upload/upload-result-root-data';

export class UploadService {
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
