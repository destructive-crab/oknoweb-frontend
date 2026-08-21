import { Component, Input } from '@angular/core';
import { SubmitInfo } from '../../../core/models/submit.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-submissions-line',
  imports: [RouterLink],
  templateUrl: './submissions-line.html',
  styles: [`
        .marquee-content {
          animation: marquee 30s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `]
})
export class SubmissionsLine {
  @Input("submissions") submissions!: SubmitInfo[];
  marqueePaused = false;
}
