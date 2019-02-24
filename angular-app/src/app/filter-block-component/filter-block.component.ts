import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'filter-block-component',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css']
})

export class FilterBlockComponent {

  public isSourcePickerAvailable: boolean = true;

  @Input() sources: string[]; 
  @Output() onChangeSource = new EventEmitter();

  constructor() { }

  onChangeOption(source: string): void {
      this.onChangeSource.emit(source);
  }
}
