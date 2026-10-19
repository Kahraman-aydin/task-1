import { OpenMeteoSdkEntityBase } from '../OpenMeteoSdkEntityBase';
import type { OpenMeteoSdkSDK } from '../OpenMeteoSdkSDK';
import type { Control } from '../types';
import type { WeatherForecastApi, WeatherForecastApiLoadMatch } from '../OpenMeteoSdkTypes';
declare class WeatherForecastApiEntity extends OpenMeteoSdkEntityBase<WeatherForecastApi> {
    constructor(client: OpenMeteoSdkSDK, entopts: any);
    make(this: WeatherForecastApiEntity): WeatherForecastApiEntity;
    load(this: any, reqmatch?: WeatherForecastApiLoadMatch, ctrl?: Control): Promise<WeatherForecastApiEntity>;
}
export { WeatherForecastApiEntity };
