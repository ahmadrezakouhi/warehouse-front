import { Component, OnChanges, SimpleChanges,  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'warehouse-front';
  showHeader: boolean = false;
  showSidebar: boolean = false;
  constructor(private route: Router) {

  }
  ngOnChanges(): void {
    let url = this.route.url;
    if(url != 'login'){
      this.showHeader = false;
      this.showSidebar = false;
    }else{
      this.showHeader = true;
      this.showSidebar = true;
    }
  }





}
