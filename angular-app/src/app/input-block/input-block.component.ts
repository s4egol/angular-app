import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.css']
})
export class InputBlockComponent implements OnInit {

  @Input() header: string = "";

  constructor() { }

  ngOnInit() {
  }

}
