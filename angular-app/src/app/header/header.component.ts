import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerSourceName: string = "";

  private defaultSourceName: string = "News";

  constructor() { }

  ngOnInit() {
  }

  public getHeader(): string{
      return this.headerSourceName ? this.headerSourceName : this.defaultSourceName;
  }

  public setHeader(newHeader: string){
      this.headerSourceName = newHeader;
  }
}
