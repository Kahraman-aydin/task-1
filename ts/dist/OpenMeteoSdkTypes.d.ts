export interface WeatherForecastApi {
    current?: Record<string, any>;
    current_units?: Record<string, any>;
    daily?: Record<string, any>;
    daily_units?: Record<string, any>;
    elevation?: number;
    generationtime_ms?: number;
    hourly?: Record<string, any>;
    hourly_units?: Record<string, any>;
    latitude?: number;
    longitude?: number;
    minutely_15?: Record<string, any>;
    minutely_15_units?: Record<string, any>;
    timezone?: string;
    timezone_abbreviation?: string;
    utc_offset_seconds?: number;
}
export interface WeatherForecastApiLoadMatch {
    apikey?: string;
    azimuth?: number;
    cell_selection?: string;
    current?: any[];
    daily?: any[];
    elevation?: number;
    end_date?: string;
    forecast_day?: number;
    forecast_hour?: number;
    hourly?: any[];
    latitude: string;
    longitude: string;
    minutely_15?: any[];
    model?: any[];
    past_day?: number;
    past_hour?: number;
    precipitation_unit?: string;
    start_date?: string;
    temperature_unit?: string;
    tilt?: number;
    timeformat?: string;
    timezone?: string;
    wind_speed_unit?: string;
}
