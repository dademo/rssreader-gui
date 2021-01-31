import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RSS Reader';

  @ViewChild("appDrawer", { static: true })
  private appDrawer: MatDrawer | undefined;

  public onToggleClick() {
    this.appDrawer?.toggle()
  }
}
