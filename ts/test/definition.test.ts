import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "weather_forecast_api",
    "accessor": "WeatherForecastApi",
    "op": "load",
    "method": "GET",
    "path": "/v1/forecast",
    "args": [],
    "select": {
      "latitude": "v1",
      "longitude": "v1",
      "apikey": "v1",
      "azimuth": 0,
      "cell_selection": "v1",
      "current": "v1",
      "daily": "v1",
      "elevation": "v1",
      "end_date": "v1",
      "forecast_day": 7,
      "forecast_hour": "v1",
      "hourly": "v1",
      "minutely_15": "v1",
      "model": "v1",
      "past_day": 0,
      "past_hour": "v1",
      "precipitation_unit": "mm",
      "start_date": "v1",
      "temperature_unit": "celsius",
      "tilt": 0,
      "timeformat": "iso8601",
      "timezone": "v1",
      "wind_speed_unit": "kmh"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "latitude",
      "longitude",
      "hourly",
      "daily",
      "current",
      "minutely_15",
      "elevation",
      "temperature_unit",
      "wind_speed_unit",
      "precipitation_unit",
      "timeformat",
      "timezone",
      "past_days",
      "forecast_days",
      "past_hours",
      "forecast_hours",
      "start_date",
      "end_date",
      "tilt",
      "azimuth",
      "cell_selection",
      "apikey",
      "models"
    ],
    "queryArgs": [
      {
        "name": "apikey",
        "wire": "apikey"
      },
      {
        "name": "azimuth",
        "wire": "azimuth"
      },
      {
        "name": "cell_selection",
        "wire": "cell_selection"
      },
      {
        "name": "current",
        "wire": "current"
      },
      {
        "name": "daily",
        "wire": "daily"
      },
      {
        "name": "elevation",
        "wire": "elevation"
      },
      {
        "name": "end_date",
        "wire": "end_date"
      },
      {
        "name": "forecast_day",
        "wire": "forecast_days"
      },
      {
        "name": "forecast_hour",
        "wire": "forecast_hours"
      },
      {
        "name": "hourly",
        "wire": "hourly"
      },
      {
        "name": "latitude",
        "wire": "latitude"
      },
      {
        "name": "longitude",
        "wire": "longitude"
      },
      {
        "name": "minutely_15",
        "wire": "minutely_15"
      },
      {
        "name": "model",
        "wire": "models"
      },
      {
        "name": "past_day",
        "wire": "past_days"
      },
      {
        "name": "past_hour",
        "wire": "past_hours"
      },
      {
        "name": "precipitation_unit",
        "wire": "precipitation_unit"
      },
      {
        "name": "start_date",
        "wire": "start_date"
      },
      {
        "name": "temperature_unit",
        "wire": "temperature_unit"
      },
      {
        "name": "tilt",
        "wire": "tilt"
      },
      {
        "name": "timeformat",
        "wire": "timeformat"
      },
      {
        "name": "timezone",
        "wire": "timezone"
      },
      {
        "name": "wind_speed_unit",
        "wire": "wind_speed_unit"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "latitude": 1,
      "longitude": 1,
      "elevation": 1,
      "generationtime_ms": 1,
      "utc_offset_seconds": 1,
      "timezone": "x",
      "timezone_abbreviation": "x",
      "hourly": {
        "time": [
          "x"
        ],
        "temperature_2m": [
          1
        ],
        "temperature_2m_min": [
          1
        ],
        "temperature_2m_max": [
          1
        ],
        "relative_humidity_2m": [
          1
        ],
        "dew_point_2m": [
          1
        ],
        "apparent_temperature": [
          1
        ],
        "precipitation_probability": [
          1
        ],
        "precipitation": [
          1
        ],
        "rain": [
          1
        ],
        "showers": [
          1
        ],
        "snowfall": [
          1
        ],
        "snow_depth": [
          1
        ],
        "snowfall_water_equivalent": [
          1
        ],
        "snow_depth_water_equivalent": [
          1
        ],
        "weather_code": [
          1
        ],
        "pressure_msl": [
          1
        ],
        "surface_pressure": [
          1
        ],
        "cloud_cover": [
          1
        ],
        "cloud_cover_low": [
          1
        ],
        "cloud_cover_mid": [
          1
        ],
        "cloud_cover_high": [
          1
        ],
        "visibility": [
          1
        ],
        "evapotranspiration": [
          1
        ],
        "et0_fao_evapotranspiration": [
          1
        ],
        "vapour_pressure_deficit": [
          1
        ],
        "runoff": [
          1
        ],
        "precipitation_type": [
          1
        ],
        "rain_probability": [
          1
        ],
        "snowfall_probability": [
          1
        ],
        "freezing_rain_probability": [
          1
        ],
        "ice_pellets_probability": [
          1
        ],
        "thunderstorm_probability": [
          1
        ],
        "wind_speed_10m": [
          1
        ],
        "wind_speed_20m": [
          1
        ],
        "wind_speed_30m": [
          1
        ],
        "wind_speed_40m": [
          1
        ],
        "wind_speed_50m": [
          1
        ],
        "wind_speed_70m": [
          1
        ],
        "wind_speed_80m": [
          1
        ],
        "wind_speed_100m": [
          1
        ],
        "wind_speed_120m": [
          1
        ],
        "wind_speed_140m": [
          1
        ],
        "wind_speed_150m": [
          1
        ],
        "wind_speed_160m": [
          1
        ],
        "wind_speed_180m": [
          1
        ],
        "wind_speed_200m": [
          1
        ],
        "wind_direction_10m": [
          1
        ],
        "wind_direction_20m": [
          1
        ],
        "wind_direction_30m": [
          1
        ],
        "wind_direction_40m": [
          1
        ],
        "wind_direction_50m": [
          1
        ],
        "wind_direction_70m": [
          1
        ],
        "wind_direction_80m": [
          1
        ],
        "wind_direction_100m": [
          1
        ],
        "wind_direction_120m": [
          1
        ],
        "wind_direction_140m": [
          1
        ],
        "wind_direction_150m": [
          1
        ],
        "wind_direction_160m": [
          1
        ],
        "wind_direction_180m": [
          1
        ],
        "wind_direction_200m": [
          1
        ],
        "wind_gusts_10m": [
          1
        ],
        "temperature_20m": [
          1
        ],
        "temperature_40m": [
          1
        ],
        "temperature_50m": [
          1
        ],
        "temperature_80m": [
          1
        ],
        "temperature_100m": [
          1
        ],
        "temperature_120m": [
          1
        ],
        "temperature_150m": [
          1
        ],
        "temperature_180m": [
          1
        ],
        "temperature_200m": [
          1
        ],
        "soil_temperature_0cm": [
          1
        ],
        "soil_temperature_6cm": [
          1
        ],
        "soil_temperature_18cm": [
          1
        ],
        "soil_temperature_54cm": [
          1
        ],
        "soil_temperature_162cm": [
          1
        ],
        "soil_temperature_486cm": [
          1
        ],
        "soil_temperature_1458cm": [
          1
        ],
        "soil_temperature_0_to_7cm": [
          1
        ],
        "soil_temperature_7_to_28cm": [
          1
        ],
        "soil_temperature_28_to_100cm": [
          1
        ],
        "soil_temperature_100_to_255cm": [
          1
        ],
        "soil_temperature_0_to_10cm": [
          1
        ],
        "soil_temperature_10_to_40cm": [
          1
        ],
        "soil_temperature_40_to_100cm": [
          1
        ],
        "soil_temperature_100_to_200cm": [
          1
        ],
        "soil_temperature_10_to_35cm": [
          1
        ],
        "soil_temperature_35_to_100cm": [
          1
        ],
        "soil_temperature_100_to_300cm": [
          1
        ],
        "soil_moisture_0_to_1cm": [
          1
        ],
        "soil_moisture_1_to_3cm": [
          1
        ],
        "soil_moisture_3_to_9cm": [
          1
        ],
        "soil_moisture_9_to_27cm": [
          1
        ],
        "soil_moisture_27_to_81cm": [
          1
        ],
        "soil_moisture_81_to_243cm": [
          1
        ],
        "soil_moisture_243_to_729cm": [
          1
        ],
        "soil_moisture_729_to_2187cm": [
          1
        ],
        "soil_moisture_0_to_7cm": [
          1
        ],
        "soil_moisture_7_to_28cm": [
          1
        ],
        "soil_moisture_28_to_100cm": [
          1
        ],
        "soil_moisture_100_to_255cm": [
          1
        ],
        "soil_moisture_0_to_10cm": [
          1
        ],
        "soil_moisture_10_to_40cm": [
          1
        ],
        "soil_moisture_40_to_100cm": [
          1
        ],
        "soil_moisture_100_to_200cm": [
          1
        ],
        "soil_moisture_10_to_35cm": [
          1
        ],
        "soil_moisture_35_to_100cm": [
          1
        ],
        "soil_moisture_100_to_300cm": [
          1
        ],
        "uv_index": [
          1
        ],
        "uv_index_clear_sky": [
          1
        ],
        "is_day": [
          1
        ],
        "sunshine_duration": [
          1
        ],
        "wet_bulb_temperature_2m": [
          1
        ],
        "total_column_integrated_water_vapour": [
          1
        ],
        "cape": [
          1
        ],
        "lifted_index": [
          1
        ],
        "convective_inhibition": [
          1
        ],
        "freezing_level_height": [
          1
        ],
        "boundary_layer_height": [
          1
        ],
        "surface_temperature": [
          1
        ],
        "mass_density_8m": [
          1
        ],
        "snowfall_height": [
          1
        ],
        "convective_cloud_base": [
          1
        ],
        "convective_cloud_top": [
          1
        ],
        "updraft": [
          1
        ],
        "lightning_potential": [
          1
        ],
        "lightning_density": [
          1
        ],
        "snow_height": [
          1
        ],
        "roughness_length": [
          1
        ],
        "albedo": [
          1
        ],
        "k_index": [
          1
        ],
        "sea_level_height_msl": [
          1
        ],
        "sea_ice_thickness": [
          1
        ],
        "sea_surface_temperature": [
          1
        ],
        "ocean_current_velocity": [
          1
        ],
        "ocean_current_direction": [
          1
        ],
        "shortwave_radiation": [
          1
        ],
        "direct_radiation": [
          1
        ],
        "diffuse_radiation": [
          1
        ],
        "direct_normal_irradiance": [
          1
        ],
        "global_tilted_irradiance": [
          1
        ],
        "terrestrial_radiation": [
          1
        ],
        "shortwave_radiation_instant": [
          1
        ],
        "direct_radiation_instant": [
          1
        ],
        "diffuse_radiation_instant": [
          1
        ],
        "direct_normal_irradiance_instant": [
          1
        ],
        "global_tilted_irradiance_instant": [
          1
        ],
        "terrestrial_radiation_instant": [
          1
        ],
        "temperature_1000hPa": [
          1
        ],
        "temperature_950hPa": [
          1
        ],
        "temperature_925hPa": [
          1
        ],
        "temperature_900hPa": [
          1
        ],
        "temperature_850hPa": [
          1
        ],
        "temperature_800hPa": [
          1
        ],
        "temperature_750hPa": [
          1
        ],
        "temperature_700hPa": [
          1
        ],
        "temperature_650hPa": [
          1
        ],
        "temperature_600hPa": [
          1
        ],
        "temperature_550hPa": [
          1
        ],
        "temperature_500hPa": [
          1
        ],
        "temperature_450hPa": [
          1
        ],
        "temperature_400hPa": [
          1
        ],
        "temperature_350hPa": [
          1
        ],
        "temperature_300hPa": [
          1
        ],
        "temperature_275hPa": [
          1
        ],
        "temperature_250hPa": [
          1
        ],
        "temperature_225hPa": [
          1
        ],
        "temperature_200hPa": [
          1
        ],
        "temperature_175hPa": [
          1
        ],
        "temperature_150hPa": [
          1
        ],
        "temperature_125hPa": [
          1
        ],
        "temperature_100hPa": [
          1
        ],
        "temperature_50hPa": [
          1
        ],
        "temperature_10hPa": [
          1
        ],
        "dew_point_1000hPa": [
          1
        ],
        "dew_point_950hPa": [
          1
        ],
        "dew_point_925hPa": [
          1
        ],
        "dew_point_900hPa": [
          1
        ],
        "dew_point_850hPa": [
          1
        ],
        "dew_point_800hPa": [
          1
        ],
        "dew_point_750hPa": [
          1
        ],
        "dew_point_700hPa": [
          1
        ],
        "dew_point_650hPa": [
          1
        ],
        "dew_point_600hPa": [
          1
        ],
        "dew_point_550hPa": [
          1
        ],
        "dew_point_500hPa": [
          1
        ],
        "dew_point_450hPa": [
          1
        ],
        "dew_point_400hPa": [
          1
        ],
        "dew_point_350hPa": [
          1
        ],
        "dew_point_300hPa": [
          1
        ],
        "dew_point_275hPa": [
          1
        ],
        "dew_point_250hPa": [
          1
        ],
        "dew_point_225hPa": [
          1
        ],
        "dew_point_200hPa": [
          1
        ],
        "dew_point_175hPa": [
          1
        ],
        "dew_point_150hPa": [
          1
        ],
        "dew_point_125hPa": [
          1
        ],
        "dew_point_100hPa": [
          1
        ],
        "dew_point_50hPa": [
          1
        ],
        "dew_point_10hPa": [
          1
        ],
        "relative_humidity_1000hPa": [
          1
        ],
        "relative_humidity_950hPa": [
          1
        ],
        "relative_humidity_925hPa": [
          1
        ],
        "relative_humidity_900hPa": [
          1
        ],
        "relative_humidity_850hPa": [
          1
        ],
        "relative_humidity_800hPa": [
          1
        ],
        "relative_humidity_750hPa": [
          1
        ],
        "relative_humidity_700hPa": [
          1
        ],
        "relative_humidity_650hPa": [
          1
        ],
        "relative_humidity_600hPa": [
          1
        ],
        "relative_humidity_550hPa": [
          1
        ],
        "relative_humidity_500hPa": [
          1
        ],
        "relative_humidity_450hPa": [
          1
        ],
        "relative_humidity_400hPa": [
          1
        ],
        "relative_humidity_350hPa": [
          1
        ],
        "relative_humidity_300hPa": [
          1
        ],
        "relative_humidity_275hPa": [
          1
        ],
        "relative_humidity_250hPa": [
          1
        ],
        "relative_humidity_225hPa": [
          1
        ],
        "relative_humidity_200hPa": [
          1
        ],
        "relative_humidity_175hPa": [
          1
        ],
        "relative_humidity_150hPa": [
          1
        ],
        "relative_humidity_125hPa": [
          1
        ],
        "relative_humidity_100hPa": [
          1
        ],
        "relative_humidity_50hPa": [
          1
        ],
        "relative_humidity_10hPa": [
          1
        ],
        "cloud_cover_1000hPa": [
          1
        ],
        "cloud_cover_950hPa": [
          1
        ],
        "cloud_cover_925hPa": [
          1
        ],
        "cloud_cover_900hPa": [
          1
        ],
        "cloud_cover_850hPa": [
          1
        ],
        "cloud_cover_800hPa": [
          1
        ],
        "cloud_cover_750hPa": [
          1
        ],
        "cloud_cover_700hPa": [
          1
        ],
        "cloud_cover_650hPa": [
          1
        ],
        "cloud_cover_600hPa": [
          1
        ],
        "cloud_cover_550hPa": [
          1
        ],
        "cloud_cover_500hPa": [
          1
        ],
        "cloud_cover_450hPa": [
          1
        ],
        "cloud_cover_400hPa": [
          1
        ],
        "cloud_cover_350hPa": [
          1
        ],
        "cloud_cover_300hPa": [
          1
        ],
        "cloud_cover_275hPa": [
          1
        ],
        "cloud_cover_250hPa": [
          1
        ],
        "cloud_cover_225hPa": [
          1
        ],
        "cloud_cover_200hPa": [
          1
        ],
        "cloud_cover_175hPa": [
          1
        ],
        "cloud_cover_150hPa": [
          1
        ],
        "cloud_cover_125hPa": [
          1
        ],
        "cloud_cover_100hPa": [
          1
        ],
        "cloud_cover_50hPa": [
          1
        ],
        "cloud_cover_10hPa": [
          1
        ],
        "wind_speed_1000hPa": [
          1
        ],
        "wind_speed_950hPa": [
          1
        ],
        "wind_speed_925hPa": [
          1
        ],
        "wind_speed_900hPa": [
          1
        ],
        "wind_speed_850hPa": [
          1
        ],
        "wind_speed_800hPa": [
          1
        ],
        "wind_speed_750hPa": [
          1
        ],
        "wind_speed_700hPa": [
          1
        ],
        "wind_speed_650hPa": [
          1
        ],
        "wind_speed_600hPa": [
          1
        ],
        "wind_speed_550hPa": [
          1
        ],
        "wind_speed_500hPa": [
          1
        ],
        "wind_speed_450hPa": [
          1
        ],
        "wind_speed_400hPa": [
          1
        ],
        "wind_speed_350hPa": [
          1
        ],
        "wind_speed_300hPa": [
          1
        ],
        "wind_speed_275hPa": [
          1
        ],
        "wind_speed_250hPa": [
          1
        ],
        "wind_speed_225hPa": [
          1
        ],
        "wind_speed_200hPa": [
          1
        ],
        "wind_speed_175hPa": [
          1
        ],
        "wind_speed_150hPa": [
          1
        ],
        "wind_speed_125hPa": [
          1
        ],
        "wind_speed_100hPa": [
          1
        ],
        "wind_speed_50hPa": [
          1
        ],
        "wind_speed_10hPa": [
          1
        ],
        "wind_direction_1000hPa": [
          1
        ],
        "wind_direction_950hPa": [
          1
        ],
        "wind_direction_925hPa": [
          1
        ],
        "wind_direction_900hPa": [
          1
        ],
        "wind_direction_850hPa": [
          1
        ],
        "wind_direction_800hPa": [
          1
        ],
        "wind_direction_750hPa": [
          1
        ],
        "wind_direction_700hPa": [
          1
        ],
        "wind_direction_650hPa": [
          1
        ],
        "wind_direction_600hPa": [
          1
        ],
        "wind_direction_550hPa": [
          1
        ],
        "wind_direction_500hPa": [
          1
        ],
        "wind_direction_450hPa": [
          1
        ],
        "wind_direction_400hPa": [
          1
        ],
        "wind_direction_350hPa": [
          1
        ],
        "wind_direction_300hPa": [
          1
        ],
        "wind_direction_275hPa": [
          1
        ],
        "wind_direction_250hPa": [
          1
        ],
        "wind_direction_225hPa": [
          1
        ],
        "wind_direction_200hPa": [
          1
        ],
        "wind_direction_175hPa": [
          1
        ],
        "wind_direction_150hPa": [
          1
        ],
        "wind_direction_125hPa": [
          1
        ],
        "wind_direction_100hPa": [
          1
        ],
        "wind_direction_50hPa": [
          1
        ],
        "wind_direction_10hPa": [
          1
        ],
        "vertical_velocity_1000hPa": [
          1
        ],
        "vertical_velocity_950hPa": [
          1
        ],
        "vertical_velocity_925hPa": [
          1
        ],
        "vertical_velocity_900hPa": [
          1
        ],
        "vertical_velocity_850hPa": [
          1
        ],
        "vertical_velocity_800hPa": [
          1
        ],
        "vertical_velocity_750hPa": [
          1
        ],
        "vertical_velocity_700hPa": [
          1
        ],
        "vertical_velocity_650hPa": [
          1
        ],
        "vertical_velocity_600hPa": [
          1
        ],
        "vertical_velocity_550hPa": [
          1
        ],
        "vertical_velocity_500hPa": [
          1
        ],
        "vertical_velocity_450hPa": [
          1
        ],
        "vertical_velocity_400hPa": [
          1
        ],
        "vertical_velocity_350hPa": [
          1
        ],
        "vertical_velocity_300hPa": [
          1
        ],
        "vertical_velocity_275hPa": [
          1
        ],
        "vertical_velocity_250hPa": [
          1
        ],
        "vertical_velocity_225hPa": [
          1
        ],
        "vertical_velocity_200hPa": [
          1
        ],
        "vertical_velocity_175hPa": [
          1
        ],
        "vertical_velocity_150hPa": [
          1
        ],
        "vertical_velocity_125hPa": [
          1
        ],
        "vertical_velocity_100hPa": [
          1
        ],
        "vertical_velocity_50hPa": [
          1
        ],
        "vertical_velocity_10hPa": [
          1
        ],
        "geopotential_height_1000hPa": [
          1
        ],
        "geopotential_height_950hPa": [
          1
        ],
        "geopotential_height_925hPa": [
          1
        ],
        "geopotential_height_900hPa": [
          1
        ],
        "geopotential_height_850hPa": [
          1
        ],
        "geopotential_height_800hPa": [
          1
        ],
        "geopotential_height_750hPa": [
          1
        ],
        "geopotential_height_700hPa": [
          1
        ],
        "geopotential_height_650hPa": [
          1
        ],
        "geopotential_height_600hPa": [
          1
        ],
        "geopotential_height_550hPa": [
          1
        ],
        "geopotential_height_500hPa": [
          1
        ],
        "geopotential_height_450hPa": [
          1
        ],
        "geopotential_height_400hPa": [
          1
        ],
        "geopotential_height_350hPa": [
          1
        ],
        "geopotential_height_300hPa": [
          1
        ],
        "geopotential_height_275hPa": [
          1
        ],
        "geopotential_height_250hPa": [
          1
        ],
        "geopotential_height_225hPa": [
          1
        ],
        "geopotential_height_200hPa": [
          1
        ],
        "geopotential_height_175hPa": [
          1
        ],
        "geopotential_height_150hPa": [
          1
        ],
        "geopotential_height_125hPa": [
          1
        ],
        "geopotential_height_100hPa": [
          1
        ],
        "geopotential_height_50hPa": [
          1
        ],
        "geopotential_height_10hPa": [
          1
        ]
      },
      "hourly_units": {
        "time": "x",
        "temperature_2m": "x",
        "temperature_2m_min": "x",
        "temperature_2m_max": "x",
        "relative_humidity_2m": "x",
        "dew_point_2m": "x",
        "apparent_temperature": "x",
        "precipitation_probability": "x",
        "precipitation": "x",
        "rain": "x",
        "showers": "x",
        "snowfall": "x",
        "snow_depth": "x",
        "snowfall_water_equivalent": "x",
        "snow_depth_water_equivalent": "x",
        "weather_code": "x",
        "pressure_msl": "x",
        "surface_pressure": "x",
        "cloud_cover": "x",
        "cloud_cover_low": "x",
        "cloud_cover_mid": "x",
        "cloud_cover_high": "x",
        "visibility": "x",
        "evapotranspiration": "x",
        "et0_fao_evapotranspiration": "x",
        "vapour_pressure_deficit": "x",
        "runoff": "x",
        "precipitation_type": "x",
        "rain_probability": "x",
        "snowfall_probability": "x",
        "freezing_rain_probability": "x",
        "ice_pellets_probability": "x",
        "thunderstorm_probability": "x",
        "wind_speed_10m": "x",
        "wind_speed_20m": "x",
        "wind_speed_30m": "x",
        "wind_speed_40m": "x",
        "wind_speed_50m": "x",
        "wind_speed_70m": "x",
        "wind_speed_80m": "x",
        "wind_speed_100m": "x",
        "wind_speed_120m": "x",
        "wind_speed_140m": "x",
        "wind_speed_150m": "x",
        "wind_speed_160m": "x",
        "wind_speed_180m": "x",
        "wind_speed_200m": "x",
        "wind_direction_10m": "x",
        "wind_direction_20m": "x",
        "wind_direction_30m": "x",
        "wind_direction_40m": "x",
        "wind_direction_50m": "x",
        "wind_direction_70m": "x",
        "wind_direction_80m": "x",
        "wind_direction_100m": "x",
        "wind_direction_120m": "x",
        "wind_direction_140m": "x",
        "wind_direction_150m": "x",
        "wind_direction_160m": "x",
        "wind_direction_180m": "x",
        "wind_direction_200m": "x",
        "wind_gusts_10m": "x",
        "temperature_20m": "x",
        "temperature_40m": "x",
        "temperature_50m": "x",
        "temperature_80m": "x",
        "temperature_100m": "x",
        "temperature_120m": "x",
        "temperature_150m": "x",
        "temperature_180m": "x",
        "temperature_200m": "x",
        "soil_temperature_0cm": "x",
        "soil_temperature_6cm": "x",
        "soil_temperature_18cm": "x",
        "soil_temperature_54cm": "x",
        "soil_temperature_162cm": "x",
        "soil_temperature_486cm": "x",
        "soil_temperature_1458cm": "x",
        "soil_temperature_0_to_7cm": "x",
        "soil_temperature_7_to_28cm": "x",
        "soil_temperature_28_to_100cm": "x",
        "soil_temperature_100_to_255cm": "x",
        "soil_temperature_0_to_10cm": "x",
        "soil_temperature_10_to_40cm": "x",
        "soil_temperature_40_to_100cm": "x",
        "soil_temperature_100_to_200cm": "x",
        "soil_temperature_10_to_35cm": "x",
        "soil_temperature_35_to_100cm": "x",
        "soil_temperature_100_to_300cm": "x",
        "soil_moisture_0_to_1cm": "x",
        "soil_moisture_1_to_3cm": "x",
        "soil_moisture_3_to_9cm": "x",
        "soil_moisture_9_to_27cm": "x",
        "soil_moisture_27_to_81cm": "x",
        "soil_moisture_81_to_243cm": "x",
        "soil_moisture_243_to_729cm": "x",
        "soil_moisture_729_to_2187cm": "x",
        "soil_moisture_0_to_7cm": "x",
        "soil_moisture_7_to_28cm": "x",
        "soil_moisture_28_to_100cm": "x",
        "soil_moisture_100_to_255cm": "x",
        "soil_moisture_0_to_10cm": "x",
        "soil_moisture_10_to_40cm": "x",
        "soil_moisture_40_to_100cm": "x",
        "soil_moisture_100_to_200cm": "x",
        "soil_moisture_10_to_35cm": "x",
        "soil_moisture_35_to_100cm": "x",
        "soil_moisture_100_to_300cm": "x",
        "uv_index": "x",
        "uv_index_clear_sky": "x",
        "is_day": "x",
        "sunshine_duration": "x",
        "wet_bulb_temperature_2m": "x",
        "total_column_integrated_water_vapour": "x",
        "cape": "x",
        "lifted_index": "x",
        "convective_inhibition": "x",
        "freezing_level_height": "x",
        "boundary_layer_height": "x",
        "surface_temperature": "x",
        "mass_density_8m": "x",
        "snowfall_height": "x",
        "convective_cloud_base": "x",
        "convective_cloud_top": "x",
        "updraft": "x",
        "lightning_potential": "x",
        "lightning_density": "x",
        "snow_height": "x",
        "roughness_length": "x",
        "albedo": "x",
        "k_index": "x",
        "sea_level_height_msl": "x",
        "sea_ice_thickness": "x",
        "sea_surface_temperature": "x",
        "ocean_current_velocity": "x",
        "ocean_current_direction": "x",
        "shortwave_radiation": "x",
        "direct_radiation": "x",
        "diffuse_radiation": "x",
        "direct_normal_irradiance": "x",
        "global_tilted_irradiance": "x",
        "terrestrial_radiation": "x",
        "shortwave_radiation_instant": "x",
        "direct_radiation_instant": "x",
        "diffuse_radiation_instant": "x",
        "direct_normal_irradiance_instant": "x",
        "global_tilted_irradiance_instant": "x",
        "terrestrial_radiation_instant": "x",
        "temperature_1000hPa": "x",
        "temperature_950hPa": "x",
        "temperature_925hPa": "x",
        "temperature_900hPa": "x",
        "temperature_850hPa": "x",
        "temperature_800hPa": "x",
        "temperature_750hPa": "x",
        "temperature_700hPa": "x",
        "temperature_650hPa": "x",
        "temperature_600hPa": "x",
        "temperature_550hPa": "x",
        "temperature_500hPa": "x",
        "temperature_450hPa": "x",
        "temperature_400hPa": "x",
        "temperature_350hPa": "x",
        "temperature_300hPa": "x",
        "temperature_275hPa": "x",
        "temperature_250hPa": "x",
        "temperature_225hPa": "x",
        "temperature_200hPa": "x",
        "temperature_175hPa": "x",
        "temperature_150hPa": "x",
        "temperature_125hPa": "x",
        "temperature_100hPa": "x",
        "temperature_50hPa": "x",
        "temperature_10hPa": "x",
        "dew_point_1000hPa": "x",
        "dew_point_950hPa": "x",
        "dew_point_925hPa": "x",
        "dew_point_900hPa": "x",
        "dew_point_850hPa": "x",
        "dew_point_800hPa": "x",
        "dew_point_750hPa": "x",
        "dew_point_700hPa": "x",
        "dew_point_650hPa": "x",
        "dew_point_600hPa": "x",
        "dew_point_550hPa": "x",
        "dew_point_500hPa": "x",
        "dew_point_450hPa": "x",
        "dew_point_400hPa": "x",
        "dew_point_350hPa": "x",
        "dew_point_300hPa": "x",
        "dew_point_275hPa": "x",
        "dew_point_250hPa": "x",
        "dew_point_225hPa": "x",
        "dew_point_200hPa": "x",
        "dew_point_175hPa": "x",
        "dew_point_150hPa": "x",
        "dew_point_125hPa": "x",
        "dew_point_100hPa": "x",
        "dew_point_50hPa": "x",
        "dew_point_10hPa": "x",
        "relative_humidity_1000hPa": "x",
        "relative_humidity_950hPa": "x",
        "relative_humidity_925hPa": "x",
        "relative_humidity_900hPa": "x",
        "relative_humidity_850hPa": "x",
        "relative_humidity_800hPa": "x",
        "relative_humidity_750hPa": "x",
        "relative_humidity_700hPa": "x",
        "relative_humidity_650hPa": "x",
        "relative_humidity_600hPa": "x",
        "relative_humidity_550hPa": "x",
        "relative_humidity_500hPa": "x",
        "relative_humidity_450hPa": "x",
        "relative_humidity_400hPa": "x",
        "relative_humidity_350hPa": "x",
        "relative_humidity_300hPa": "x",
        "relative_humidity_275hPa": "x",
        "relative_humidity_250hPa": "x",
        "relative_humidity_225hPa": "x",
        "relative_humidity_200hPa": "x",
        "relative_humidity_175hPa": "x",
        "relative_humidity_150hPa": "x",
        "relative_humidity_125hPa": "x",
        "relative_humidity_100hPa": "x",
        "relative_humidity_50hPa": "x",
        "relative_humidity_10hPa": "x",
        "cloud_cover_1000hPa": "x",
        "cloud_cover_950hPa": "x",
        "cloud_cover_925hPa": "x",
        "cloud_cover_900hPa": "x",
        "cloud_cover_850hPa": "x",
        "cloud_cover_800hPa": "x",
        "cloud_cover_750hPa": "x",
        "cloud_cover_700hPa": "x",
        "cloud_cover_650hPa": "x",
        "cloud_cover_600hPa": "x",
        "cloud_cover_550hPa": "x",
        "cloud_cover_500hPa": "x",
        "cloud_cover_450hPa": "x",
        "cloud_cover_400hPa": "x",
        "cloud_cover_350hPa": "x",
        "cloud_cover_300hPa": "x",
        "cloud_cover_275hPa": "x",
        "cloud_cover_250hPa": "x",
        "cloud_cover_225hPa": "x",
        "cloud_cover_200hPa": "x",
        "cloud_cover_175hPa": "x",
        "cloud_cover_150hPa": "x",
        "cloud_cover_125hPa": "x",
        "cloud_cover_100hPa": "x",
        "cloud_cover_50hPa": "x",
        "cloud_cover_10hPa": "x",
        "wind_speed_1000hPa": "x",
        "wind_speed_950hPa": "x",
        "wind_speed_925hPa": "x",
        "wind_speed_900hPa": "x",
        "wind_speed_850hPa": "x",
        "wind_speed_800hPa": "x",
        "wind_speed_750hPa": "x",
        "wind_speed_700hPa": "x",
        "wind_speed_650hPa": "x",
        "wind_speed_600hPa": "x",
        "wind_speed_550hPa": "x",
        "wind_speed_500hPa": "x",
        "wind_speed_450hPa": "x",
        "wind_speed_400hPa": "x",
        "wind_speed_350hPa": "x",
        "wind_speed_300hPa": "x",
        "wind_speed_275hPa": "x",
        "wind_speed_250hPa": "x",
        "wind_speed_225hPa": "x",
        "wind_speed_200hPa": "x",
        "wind_speed_175hPa": "x",
        "wind_speed_150hPa": "x",
        "wind_speed_125hPa": "x",
        "wind_speed_100hPa": "x",
        "wind_speed_50hPa": "x",
        "wind_speed_10hPa": "x",
        "wind_direction_1000hPa": "x",
        "wind_direction_950hPa": "x",
        "wind_direction_925hPa": "x",
        "wind_direction_900hPa": "x",
        "wind_direction_850hPa": "x",
        "wind_direction_800hPa": "x",
        "wind_direction_750hPa": "x",
        "wind_direction_700hPa": "x",
        "wind_direction_650hPa": "x",
        "wind_direction_600hPa": "x",
        "wind_direction_550hPa": "x",
        "wind_direction_500hPa": "x",
        "wind_direction_450hPa": "x",
        "wind_direction_400hPa": "x",
        "wind_direction_350hPa": "x",
        "wind_direction_300hPa": "x",
        "wind_direction_275hPa": "x",
        "wind_direction_250hPa": "x",
        "wind_direction_225hPa": "x",
        "wind_direction_200hPa": "x",
        "wind_direction_175hPa": "x",
        "wind_direction_150hPa": "x",
        "wind_direction_125hPa": "x",
        "wind_direction_100hPa": "x",
        "wind_direction_50hPa": "x",
        "wind_direction_10hPa": "x",
        "vertical_velocity_1000hPa": "x",
        "vertical_velocity_950hPa": "x",
        "vertical_velocity_925hPa": "x",
        "vertical_velocity_900hPa": "x",
        "vertical_velocity_850hPa": "x",
        "vertical_velocity_800hPa": "x",
        "vertical_velocity_750hPa": "x",
        "vertical_velocity_700hPa": "x",
        "vertical_velocity_650hPa": "x",
        "vertical_velocity_600hPa": "x",
        "vertical_velocity_550hPa": "x",
        "vertical_velocity_500hPa": "x",
        "vertical_velocity_450hPa": "x",
        "vertical_velocity_400hPa": "x",
        "vertical_velocity_350hPa": "x",
        "vertical_velocity_300hPa": "x",
        "vertical_velocity_275hPa": "x",
        "vertical_velocity_250hPa": "x",
        "vertical_velocity_225hPa": "x",
        "vertical_velocity_200hPa": "x",
        "vertical_velocity_175hPa": "x",
        "vertical_velocity_150hPa": "x",
        "vertical_velocity_125hPa": "x",
        "vertical_velocity_100hPa": "x",
        "vertical_velocity_50hPa": "x",
        "vertical_velocity_10hPa": "x",
        "geopotential_height_1000hPa": "x",
        "geopotential_height_950hPa": "x",
        "geopotential_height_925hPa": "x",
        "geopotential_height_900hPa": "x",
        "geopotential_height_850hPa": "x",
        "geopotential_height_800hPa": "x",
        "geopotential_height_750hPa": "x",
        "geopotential_height_700hPa": "x",
        "geopotential_height_650hPa": "x",
        "geopotential_height_600hPa": "x",
        "geopotential_height_550hPa": "x",
        "geopotential_height_500hPa": "x",
        "geopotential_height_450hPa": "x",
        "geopotential_height_400hPa": "x",
        "geopotential_height_350hPa": "x",
        "geopotential_height_300hPa": "x",
        "geopotential_height_275hPa": "x",
        "geopotential_height_250hPa": "x",
        "geopotential_height_225hPa": "x",
        "geopotential_height_200hPa": "x",
        "geopotential_height_175hPa": "x",
        "geopotential_height_150hPa": "x",
        "geopotential_height_125hPa": "x",
        "geopotential_height_100hPa": "x",
        "geopotential_height_50hPa": "x",
        "geopotential_height_10hPa": "x"
      },
      "daily": {
        "time": [
          "x"
        ],
        "weather_code": [
          1
        ],
        "temperature_2m_max": [
          1
        ],
        "temperature_2m_min": [
          1
        ],
        "apparent_temperature_max": [
          1
        ],
        "apparent_temperature_min": [
          1
        ],
        "sunrise": [
          "x"
        ],
        "sunset": [
          "x"
        ],
        "daylight_duration": [
          1
        ],
        "sunshine_duration": [
          1
        ],
        "uv_index_max": [
          1
        ],
        "uv_index_clear_sky_max": [
          1
        ],
        "rain_sum": [
          1
        ],
        "showers_sum": [
          1
        ],
        "snowfall_sum": [
          1
        ],
        "precipitation_sum": [
          1
        ],
        "precipitation_hours": [
          1
        ],
        "precipitation_probability_max": [
          1
        ],
        "wind_speed_10m_max": [
          1
        ],
        "wind_gusts_10m_max": [
          1
        ],
        "wind_direction_10m_dominant": [
          1
        ],
        "shortwave_radiation_sum": [
          1
        ],
        "et0_fao_evapotranspiration": [
          1
        ]
      },
      "daily_units": {
        "time": "x",
        "weather_code": "x",
        "temperature_2m_max": "x",
        "temperature_2m_min": "x",
        "apparent_temperature_max": "x",
        "apparent_temperature_min": "x",
        "sunrise": "x",
        "sunset": "x",
        "daylight_duration": "x",
        "sunshine_duration": "x",
        "uv_index_max": "x",
        "uv_index_clear_sky_max": "x",
        "rain_sum": "x",
        "showers_sum": "x",
        "snowfall_sum": "x",
        "precipitation_sum": "x",
        "precipitation_hours": "x",
        "precipitation_probability_max": "x",
        "wind_speed_10m_max": "x",
        "wind_gusts_10m_max": "x",
        "wind_direction_10m_dominant": "x",
        "shortwave_radiation_sum": "x",
        "et0_fao_evapotranspiration": "x"
      },
      "current": {
        "time": "x",
        "interval": 1,
        "temperature_2m": 1,
        "relative_humidity_2m": 1,
        "apparent_temperature": 1,
        "is_day": 1,
        "precipitation": 1,
        "rain": 1,
        "showers": 1,
        "snowfall": 1,
        "weather_code": 1,
        "cloud_cover": 1,
        "pressure_msl": 1,
        "surface_pressure": 1,
        "wind_speed_10m": 1,
        "wind_direction_10m": 1,
        "wind_gusts_10m": 1
      },
      "current_units": {
        "time": "x",
        "temperature_2m": "x",
        "relative_humidity_2m": "x",
        "apparent_temperature": "x",
        "is_day": "x",
        "precipitation": "x",
        "rain": "x",
        "showers": "x",
        "snowfall": "x",
        "weather_code": "x",
        "cloud_cover": "x",
        "pressure_msl": "x",
        "surface_pressure": "x",
        "wind_speed_10m": "x",
        "wind_direction_10m": "x",
        "wind_gusts_10m": "x"
      },
      "minutely_15": {
        "time": [
          "x"
        ],
        "temperature_2m": [
          1
        ],
        "relative_humidity_2m": [
          1
        ],
        "dew_point_2m": [
          1
        ],
        "apparent_temperature": [
          1
        ],
        "precipitation": [
          1
        ],
        "rain": [
          1
        ],
        "snowfall": [
          1
        ],
        "snowfall_height": [
          1
        ],
        "freezing_level_height": [
          1
        ],
        "sunshine_duration": [
          1
        ],
        "weather_code": [
          1
        ],
        "wind_speed_10m": [
          1
        ],
        "wind_speed_20m": [
          1
        ],
        "wind_speed_50m": [
          1
        ],
        "wind_speed_80m": [
          1
        ],
        "wind_speed_100m": [
          1
        ],
        "wind_direction_10m": [
          1
        ],
        "wind_direction_20m": [
          1
        ],
        "wind_direction_50m": [
          1
        ],
        "wind_direction_80m": [
          1
        ],
        "wind_direction_100m": [
          1
        ],
        "wind_gusts_10m": [
          1
        ],
        "visibility": [
          1
        ],
        "cape": [
          1
        ],
        "lightning_potential": [
          1
        ],
        "is_day": [
          1
        ]
      },
      "minutely_15_units": {
        "time": "x",
        "temperature_2m": "x",
        "relative_humidity_2m": "x",
        "dew_point_2m": "x",
        "apparent_temperature": "x",
        "precipitation": "x",
        "rain": "x",
        "snowfall": "x",
        "snowfall_height": "x",
        "freezing_level_height": "x",
        "sunshine_duration": "x",
        "weather_code": "x",
        "wind_speed_10m": "x",
        "wind_speed_20m": "x",
        "wind_speed_50m": "x",
        "wind_speed_80m": "x",
        "wind_speed_100m": "x",
        "wind_direction_10m": "x",
        "wind_direction_20m": "x",
        "wind_direction_50m": "x",
        "wind_direction_80m": "x",
        "wind_direction_100m": "x",
        "wind_gusts_10m": "x",
        "visibility": "x",
        "cape": "x",
        "lightning_potential": "x",
        "is_day": "x"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
