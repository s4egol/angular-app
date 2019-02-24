import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() headerSourceName: string = "";

  private defaultSourceName: string = "News";

  constructor() { }

  public getHeader(): string{
      return this.headerSourceName ? this.headerSourceName : this.defaultSourceName;
  }

  public setHeader(newHeader: string){
      this.headerSourceName = newHeader;
  }
}
