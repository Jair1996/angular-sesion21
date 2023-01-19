import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styles: [
    `
      .example-headers-align .mat-expansion-panel-header-description {
        justify-content: space-between;
        align-items: center;
      }

      .example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {
        margin-left: 8px;
      }
    `,
  ],
})
export class ExpansionPanelComponent {
  @Input() pristine: boolean = true;
}
