import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
