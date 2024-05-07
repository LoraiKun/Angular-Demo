import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { VariantAlertComponent } from './variant-alert.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, VariantAlertComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
    <div
      role="alert"
      class="alert"
      [ngClass]="{
        'alert-error': variant === 'rosso',
        'alert-success': variant === 'verde',
        'alert-info': variant === 'blu'
      }"
    >
      
      <app-variant-alert [variant]="variant"/>
      <div>
        <ng-content></ng-content>
      </div>

      <div>
        <button class="btn btn-sm" (click)="onCancel.emit()">Deny</button>
        <button class="btn btn-sm btn-primary" (click)="onConfirm.emit()">
          Accept
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class AlertComponent {
  @Input() variant: 'rosso' | 'verde' | 'blu' | undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onConfirm = new EventEmitter();
}
