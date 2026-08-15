import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { PanelService } from '../../../core/services/panel-service';

@Component({
  selector: 'app-panel-root',
  imports: [Button],
  templateUrl: './panel-root.html',
})
export class PanelRoot {
  private router = inject(Router);
  private panelService = inject(PanelService);

  ngOnInit()
  {
    this.panelService.validateLogin().subscribe({
          next: () => {},
          error: () => {
            this.router.navigate(['/panel/login']);
          }
        }
    );
  }
}
