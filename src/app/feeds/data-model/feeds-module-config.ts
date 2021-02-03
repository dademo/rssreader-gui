import { DisplayType } from 'src/app/common/data-model/display-type.enum';

declare type FeedsModuleConfig = {
    displayType: DisplayType
}

const feedsModuleDefaultConfig: FeedsModuleConfig = {
    displayType: DisplayType.Table
}

export {
    FeedsModuleConfig,
    feedsModuleDefaultConfig
}