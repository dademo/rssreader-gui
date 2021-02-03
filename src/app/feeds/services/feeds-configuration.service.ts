import { Injectable } from '@angular/core';
import { FeedsModuleConfig, feedsModuleDefaultConfig } from 'src/app/feeds/data-model';

@Injectable({
  providedIn: 'root'
})
export class FeedsConfigurationService {

  private readonly feedsModuleConfigKey = "FEEDS_MODULE_CONFIG";

  constructor() { }

  public getConfig(): FeedsModuleConfig {
    return this.normalize(JSON.parse(localStorage.getItem(this.feedsModuleConfigKey) || "{}"));
  }

  public saveConfig(config: FeedsModuleConfig): void {
    localStorage.setItem(this.feedsModuleConfigKey, JSON.stringify(config));
  }

  private normalize(moduleConfig: any): FeedsModuleConfig {
    return {
      displayType: moduleConfig?.displayType || feedsModuleDefaultConfig.displayType
    }
  }
}
