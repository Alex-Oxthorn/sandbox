import { PropertyManagementService } from './property-management.service';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ForgeTableModule,
  DynamicComponentService,
  IDynamicComponentRef,
} from '@tylertech/forge-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IPropertyManagementDataRow,
} from './interfaces';
import { PropertyAppliedFeeComponent } from './property-applied-fee.component';
@Component({
  selector: 'cp-table',
  templateUrl: './table.component.html',
  standalone: true,
  providers: [PropertyManagementService],
  imports: [
    CommonModule,
    FormsModule,
    ForgeTableModule,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TestTableComponent {
  public rows = [
    {
      feeAmount: 1200.0,
      feeAppliedAmount: 8.0,
      allowEdits: true
    },
    {
      feeAmount: 0.0,
      feeAppliedAmount: 0.0,
      allowEdits: true
    },
  ];
  public columns = [
    {
      header: 'Fee Amount',
      property: 'applied',
      stopCellTemplateClickPropagation: true,
      template: (
        _index: number,
        _el: any,
        data: IPropertyManagementDataRow
      ): HTMLElement | undefined => this._createAppliedField(data, _index),
    },
    {
      header: 'Fee Amount',
      property: 'feeAmount',
      stopCellTemplateClickPropagation: true,
      template: (
        _index: number,
        _el: any,
        data: IPropertyManagementDataRow
      ): HTMLElement | undefined => this._createAppliedField(data, _index),
    },
  ];
  private _dynamicComponentCache = new Map<
    string,
    IDynamicComponentRef<PropertyAppliedFeeComponent>
  >();

  constructor(
    private _dcs: DynamicComponentService
  ) { }

  private _createAppliedField(
    data: IPropertyManagementDataRow,
    index: number
  ): HTMLElement | undefined {
    const key = index.toString();
    let field = this._dynamicComponentCache.get(key);
    if (!field) {
      field = this._dcs.create(PropertyAppliedFeeComponent);
      this._dynamicComponentCache.set(key, field);
      field.instance.editable = data.allowEdits;
      field.instance.value = data.feeAppliedAmount;
      field.instance.feeId = data.municipalFeeId;
      field.componentRef.changeDetectorRef.detectChanges();
    }
    return field.componentElement;
  }
}
