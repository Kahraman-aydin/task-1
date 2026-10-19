import { WeatherForecastApiEntity } from './entity/WeatherForecastApiEntity';
export type * from './OpenMeteoSdkTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OpenMeteoSdkEntityBase } from './OpenMeteoSdkEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class OpenMeteoSdkSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    WeatherForecastApi(entopts?: Record<string, any>): WeatherForecastApiEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OpenMeteoSdkSDK;
    tester(testopts?: any, sdkopts?: any): OpenMeteoSdkSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OpenMeteoSdkSDK;
export { stdutil, config, BaseFeature, OpenMeteoSdkEntityBase, OpenMeteoSdkSDK, SDK, };
export type { DirectResult };
