import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mini-map',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>miniMap works!</p>`,
  styleUrl: './miniMap.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent { }
