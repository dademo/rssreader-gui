import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { DisplayType } from 'src/app/common/data-model/display-type.enum';
import { FeedsModuleConfig } from '../data-model';
import { FeedsConfigurationService } from '../services';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  
  get display(): DisplayType {
    return this.displayTypeGroup?.value;
  }

  private cachedConfig: FeedsModuleConfig;

  @ViewChild(MatButtonToggleGroup, { static: true })
  private displayTypeGroup: MatButtonToggleGroup | undefined;

  constructor(
    private feedsConfigurationService: FeedsConfigurationService) {
      
      this.cachedConfig = this.feedsConfigurationService.getConfig();
    }

  ngOnInit(): void {
    // TODO : use stored configuration
    if(this.displayTypeGroup) {
      this.displayTypeGroup.value = this.cachedConfig.displayType;
    }
  }

  onDisplayChanged(event: MatButtonToggleChange): void {
    this.cachedConfig.displayType = event.value;
    this.feedsConfigurationService.saveConfig(this.cachedConfig);
  }

}
