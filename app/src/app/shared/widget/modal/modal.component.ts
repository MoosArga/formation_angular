import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'eac-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {


  @Input() readonly open: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onclick(event: any): void {
    if (event.target.className === 'modal modal-opened') {
      this.onCloseModal();
    }
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

}
