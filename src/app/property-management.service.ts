import { Injectable, signal } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IOption } from '@tylertech/forge';
import {
  IPropertyManagementDataRow,
  IPropertyManagementDetail,
} from './interfaces';

@Injectable()
export class PropertyManagementService {
  public loadingRows = signal<boolean>(true);
  public loadingOptions = signal<boolean>(true);
  public loadingDetail = signal<boolean>(true);
  public feeTypes = signal<IOption[]>([]);
  public statuses = signal<IOption[]>([]);
  public actionTypes = signal<IOption[]>([]);
  public rows = signal<IPropertyManagementDataRow[]>([]);
  public detail = signal<IPropertyManagementDetail | null>(null);
  public pageSize = signal<number>(50);
  public pageIndex = signal<number>(0);
  public totalHits = signal<number>(0);
  public detailDrawerOpen = signal<boolean>(false);
  public selectedDetailId$ = new Subject<string>();

  public updateFee(appliedFee: number, feeId: string): Observable<unknown> {

    return of('succeeded').pipe();
  }
}
