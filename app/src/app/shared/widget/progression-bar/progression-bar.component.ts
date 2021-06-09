import { ChangeDetectionStrategy, Component, EventEmitter, Host, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressionBarComponent implements OnInit {

  @Input() formation: Formation;
  @Output() survolProgressBar: EventEmitter<Formation> = new EventEmitter<Formation>();

  @HostBinding('class.progress-bar-container') nativeClass = true;

  constructor() { }

  ngOnInit(): void {
  }

  survol(): void {
    this.survolProgressBar.emit(this.formation);
  }

  getChargeH(): number {
    console.count(this.formation.nom);
    return this.formation.chargeH;
  }

}
