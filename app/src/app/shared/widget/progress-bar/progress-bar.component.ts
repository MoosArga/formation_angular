import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {

  @Input() progression: number;
  @Output() survolProgressBar: EventEmitter<number> = new EventEmitter<number>();

  @HostBinding('class.ma-classe-de-progress-bar') nativeClass = true;

  constructor() { }

  ngOnInit(): void {
  }

  survol(): void {
    this.survolProgressBar.emit(this.progression);
  }

  getCalculSur10(): number {
    console.log('Tiens je calcule sur 10');
    return this.progression * 10;
  }


}
