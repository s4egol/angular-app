import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css']
})

export class FilterBlockComponent implements OnInit {

  public isSourcePickerAvailable: boolean = true;

  @Input() sources: string[]; 
  @Output() onChangeSource = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeOption(source: string): void {
      this.onChangeSource.emit(source);
  }
}
