import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { PanelPage } from '../panel-page';

@Component({
  selector: 'app-panel-root',
  imports: [Button],
  templateUrl: './panel-root.html',
})
export class PanelRoot extends PanelPage {
  protected override validationPassed(): void {}
}
