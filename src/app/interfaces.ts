import { FormControl } from '@angular/forms';

export interface IPropertyManagementDataRow {
  actionType: string;
  allowEdits: boolean;
  book: number | null;
  courtCaseNumber: string;
  defendant: string;
  feeAppliedAmount: number;
  feeName: string;
  hasDisbursements: boolean;
  hasLienAttachment: boolean;
  municipalFeeId: string;
  opaNumber: number | null;
  propertyAddress: string;
  propertyStatus: string;
  saleDate: string;
  writ: number | null;
}

export interface IPropertManagementSearchResult {
  results: Array<IPropertyManagementDataRow>;
  totalHits: number;
}

export interface ISelectOptionsResult {
  actionTypes: Array<IKeyValue>;
  fees: Array<IKeyValue>;
  propertyStatuses: Array<IKeyValue>;
}

export interface IKeyValue {
  key: number;
  value: string;
}

export interface IPropertySearchFormResult {
  date: string | null;
  actionType: number | null;
  feeType: number | null;
  status: number | null;
}

export interface IPropertySearchForm {
  date: FormControl<string | null>;
  actionType: FormControl<number | null>;
  feeType: FormControl<number | null>;
  status: FormControl<number | null>;
}

export interface IPropertySearchRequest {
  paging: {
    pageSize: number;
    pageIndex: number;
  };
  criteria: {
    saleDate: string;
    actionTypeId: number;
    feeId: number;
    propertyStatusId: number;
  };
}

export interface IDisbursement {
  checkDate: string;
  checkNumber: string;
  checkAmount: number;
}

export interface IFeeHistory {
  modifiedDate: string;
  userName: string;
  afeeAmountount: number;
}
export interface IAttachment {
  attachmentId: string;
  attachmentName: string;
  attachmentType: string;
}
export interface IPropertyManagementDetail {
  municipalFeeId: string;
  saleDate: string;
  actionType: string;
  courtCaseNumber: string;
  defendant: string;
  opaNumber: string | null;
  feeName: string;
  propertyAddress: string;
  disbursements: Array<IDisbursement>;
  feeHistory: Array<IFeeHistory>;
  attachments: Array<IAttachment>;
}
