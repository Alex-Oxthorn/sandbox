import { PropertyManagementService } from './property-management.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  ForgeTextFieldModule,
  ForgeCircularProgressModule,
} from '@tylertech/forge-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-property-applied-fee',
  templateUrl: './property-applied-fee.component.html',
  standalone: true,
  providers: [PropertyManagementService],
  imports: [
    CommonModule,
    ForgeCircularProgressModule,
    ForgeTextFieldModule,
    FormsModule,

  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PropertyAppliedFeeComponent implements OnInit {
  public isUpdating: boolean = false;
  public disabled!: boolean;
  @Input() public value!: number;
  @Input() public editable!: boolean;
  @Input() public feeId!: string;

  constructor(private _service: PropertyManagementService) { }

  ngOnInit(): void {
    this.disabled = !this.editable;
  }

  public updatedAppliedAmount(event: FocusEvent): void {
    this.isUpdating = true;
    this.disabled = true;
    this._service
      .updateFee(this.value, this.feeId)
      .pipe(
        finalize(() => {
          this.disabled = false;
          this.isUpdating = false;
        })
      )
      .subscribe();
  }
}
