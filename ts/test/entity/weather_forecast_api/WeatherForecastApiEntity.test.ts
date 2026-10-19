

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenMeteoSdkSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('WeatherForecastApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPEN_METEO_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPEN_METEO_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenMeteoSdkSDK.test()
    const ent = testsdk.WeatherForecastApi()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = OpenMeteoSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WeatherForecastApi().load({"apikey":1,"latitude":"x","longitude":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPEN_METEO_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'weather_forecast_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"current":{"a":true,"h":"Current","n":"current","r":false,"t":"`$OBJECT`","key$":"current","index$":0},"current_units":{"a":true,"h":"Current Units","n":"current_units","r":false,"t":"`$OBJECT`","key$":"current_units","index$":1},"daily":{"a":true,"h":"Daily","n":"daily","r":false,"t":"`$OBJECT`","key$":"daily","index$":2},"daily_units":{"a":true,"h":"Daily Units","n":"daily_units","r":false,"t":"`$OBJECT`","key$":"daily_units","index$":3},"elevation":{"a":true,"fo":"float","h":"Elevation","n":"elevation","r":false,"t":"`$NUMBER`","key$":"elevation","index$":4},"generationtime_ms":{"a":true,"fo":"float","h":"Generationtime Ms","n":"generationtime_ms","r":false,"t":"`$NUMBER`","key$":"generationtime_ms","index$":5},"hourly":{"a":true,"h":"Hourly","n":"hourly","r":false,"t":"`$OBJECT`","key$":"hourly","index$":6},"hourly_units":{"a":true,"h":"Hourly Units","n":"hourly_units","r":false,"t":"`$OBJECT`","key$":"hourly_units","index$":7},"latitude":{"a":true,"fo":"float","h":"Latitude","n":"latitude","r":false,"t":"`$NUMBER`","key$":"latitude","index$":8},"longitude":{"a":true,"fo":"float","h":"Longitude","n":"longitude","r":false,"t":"`$NUMBER`","key$":"longitude","index$":9},"minutely_15":{"a":true,"h":"Minutely 15","n":"minutely_15","r":false,"t":"`$OBJECT`","key$":"minutely_15","index$":10},"minutely_15_units":{"a":true,"h":"Minutely 15 Units","n":"minutely_15_units","r":false,"t":"`$OBJECT`","key$":"minutely_15_units","index$":11},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":false,"t":"`$STRING`","key$":"timezone","index$":12},"timezone_abbreviation":{"a":true,"h":"Timezone Abbreviation","n":"timezone_abbreviation","r":false,"t":"`$STRING`","key$":"timezone_abbreviation","index$":13},"utc_offset_seconds":{"a":true,"h":"Utc Offset Seconds","n":"utc_offset_seconds","r":false,"t":"`$INTEGER`","key$":"utc_offset_seconds","index$":14}},"name":"weather_forecast_api","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/forecast","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":0,"k":"query","n":"azimuth","or":"azimuth","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"cell_selection","or":"cell_selection","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"current","or":"current","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"daily","or":"daily","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"elevation","or":"elevation","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":7,"k":"query","n":"forecast_day","or":"forecast_days","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"forecast_hour","or":"forecast_hours","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"hourly","or":"hourly","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"k":"query","n":"latitude","or":"latitude","r":true,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"longitude","or":"longitude","r":true,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"minutely_15","or":"minutely_15","r":false,"t":"`$ARRAY`","index$":12},{"a":true,"k":"query","n":"model","or":"models","r":false,"t":"`$ARRAY`","index$":13},{"a":true,"ex":0,"k":"query","n":"past_day","or":"past_days","r":false,"t":"`$INTEGER`","index$":14},{"a":true,"k":"query","n":"past_hour","or":"past_hours","r":false,"t":"`$INTEGER`","index$":15},{"a":true,"ex":"mm","k":"query","n":"precipitation_unit","or":"precipitation_unit","r":false,"t":"`$STRING`","index$":16},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":17},{"a":true,"ex":"celsius","k":"query","n":"temperature_unit","or":"temperature_unit","r":false,"t":"`$STRING`","index$":18},{"a":true,"ex":0,"k":"query","n":"tilt","or":"tilt","r":false,"t":"`$NUMBER`","index$":19},{"a":true,"ex":"iso8601","k":"query","n":"timeformat","or":"timeformat","r":false,"t":"`$STRING`","index$":20},{"a":true,"k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":21},{"a":true,"ex":"kmh","k":"query","n":"wind_speed_unit","or":"wind_speed_unit","r":false,"t":"`$STRING`","index$":22}]},"k":"http","m":"GET","o":"/v1/forecast","q":{"exist":["latitude","longitude"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"forecast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"weather_forecast_api","name__orig":"weather_forecast_api","Name":"WeatherForecastApi","name_":"weather_forecast_api","name-":"weather-forecast-api","NAME":"WEATHER_FORECAST_API","index$":0}, {"active":true,"entity":"weather_forecast_api","key$":"BasicWeatherForecastApiFlow","kind":"basic","name":"BasicWeatherForecastApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"weather_forecast_api_ref01","srcdatavar":"weather_forecast_api_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-weather_forecast_api_ref01"}}]}]}, 'WeatherForecastApi', {"GET /v1/forecast":{"protocol":"http","parameters":[{"name":"latitude","in":"query","required":true,"description":"Geographical WGS84 coordinates. Multiple coordinates can be comma separated.","schema":{"type":"string"},"index$":0},{"name":"longitude","in":"query","required":true,"schema":{"type":"string"},"index$":1},{"name":"hourly","in":"query","description":"A list of weather variables which should be returned.","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["temperature_2m","temperature_2m_min","temperature_2m_max","relative_humidity_2m","dew_point_2m","apparent_temperature","precipitation_probability","precipitation","rain","showers","snowfall","snow_depth","snowfall_water_equivalent","snow_depth_water_equivalent","weather_code","pressure_msl","surface_pressure","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","visibility","evapotranspiration","et0_fao_evapotranspiration","vapour_pressure_deficit","runoff","precipitation_type","rain_probability","snowfall_probability","freezing_rain_probability","ice_pellets_probability","thunderstorm_probability","wind_speed_10m","wind_speed_20m","wind_speed_30m","wind_speed_40m","wind_speed_50m","wind_speed_70m","wind_speed_80m","wind_speed_100m","wind_speed_120m","wind_speed_140m","wind_speed_150m","wind_speed_160m","wind_speed_180m","wind_speed_200m","wind_direction_10m","wind_direction_20m","wind_direction_30m","wind_direction_40m","wind_direction_50m","wind_direction_70m","wind_direction_80m","wind_direction_100m","wind_direction_120m","wind_direction_140m","wind_direction_150m","wind_direction_160m","wind_direction_180m","wind_direction_200m","wind_gusts_10m","temperature_20m","temperature_40m","temperature_50m","temperature_80m","temperature_100m","temperature_120m","temperature_150m","temperature_180m","temperature_200m","soil_temperature_0cm","soil_temperature_6cm","soil_temperature_18cm","soil_temperature_54cm","soil_temperature_162cm","soil_temperature_486cm","soil_temperature_1458cm","soil_temperature_0_to_7cm","soil_temperature_7_to_28cm","soil_temperature_28_to_100cm","soil_temperature_100_to_255cm","soil_temperature_0_to_10cm","soil_temperature_10_to_40cm","soil_temperature_40_to_100cm","soil_temperature_100_to_200cm","soil_temperature_10_to_35cm","soil_temperature_35_to_100cm","soil_temperature_100_to_300cm","soil_moisture_0_to_1cm","soil_moisture_1_to_3cm","soil_moisture_3_to_9cm","soil_moisture_9_to_27cm","soil_moisture_27_to_81cm","soil_moisture_81_to_243cm","soil_moisture_243_to_729cm","soil_moisture_729_to_2187cm","soil_moisture_0_to_7cm","soil_moisture_7_to_28cm","soil_moisture_28_to_100cm","soil_moisture_100_to_255cm","soil_moisture_0_to_10cm","soil_moisture_10_to_40cm","soil_moisture_40_to_100cm","soil_moisture_100_to_200cm","soil_moisture_10_to_35cm","soil_moisture_35_to_100cm","soil_moisture_100_to_300cm","uv_index","uv_index_clear_sky","is_day","sunshine_duration","wet_bulb_temperature_2m","total_column_integrated_water_vapour","cape","lifted_index","convective_inhibition","freezing_level_height","boundary_layer_height","surface_temperature","mass_density_8m","snowfall_height","convective_cloud_base","convective_cloud_top","updraft","lightning_potential","lightning_density","snow_height","roughness_length","albedo","k_index","sea_level_height_msl","sea_ice_thickness","sea_surface_temperature","ocean_current_velocity","ocean_current_direction","shortwave_radiation","direct_radiation","diffuse_radiation","direct_normal_irradiance","global_tilted_irradiance","terrestrial_radiation","shortwave_radiation_instant","direct_radiation_instant","diffuse_radiation_instant","direct_normal_irradiance_instant","global_tilted_irradiance_instant","terrestrial_radiation_instant","temperature_1000hPa","temperature_950hPa","temperature_925hPa","temperature_900hPa","temperature_850hPa","temperature_800hPa","temperature_750hPa","temperature_700hPa","temperature_650hPa","temperature_600hPa","temperature_550hPa","temperature_500hPa","temperature_450hPa","temperature_400hPa","temperature_350hPa","temperature_300hPa","temperature_275hPa","temperature_250hPa","temperature_225hPa","temperature_200hPa","temperature_175hPa","temperature_150hPa","temperature_125hPa","temperature_100hPa","temperature_50hPa","temperature_10hPa","dew_point_1000hPa","dew_point_950hPa","dew_point_925hPa","dew_point_900hPa","dew_point_850hPa","dew_point_800hPa","dew_point_750hPa","dew_point_700hPa","dew_point_650hPa","dew_point_600hPa","dew_point_550hPa","dew_point_500hPa","dew_point_450hPa","dew_point_400hPa","dew_point_350hPa","dew_point_300hPa","dew_point_275hPa","dew_point_250hPa","dew_point_225hPa","dew_point_200hPa","dew_point_175hPa","dew_point_150hPa","dew_point_125hPa","dew_point_100hPa","dew_point_50hPa","dew_point_10hPa","relative_humidity_1000hPa","relative_humidity_950hPa","relative_humidity_925hPa","relative_humidity_900hPa","relative_humidity_850hPa","relative_humidity_800hPa","relative_humidity_750hPa","relative_humidity_700hPa","relative_humidity_650hPa","relative_humidity_600hPa","relative_humidity_550hPa","relative_humidity_500hPa","relative_humidity_450hPa","relative_humidity_400hPa","relative_humidity_350hPa","relative_humidity_300hPa","relative_humidity_275hPa","relative_humidity_250hPa","relative_humidity_225hPa","relative_humidity_200hPa","relative_humidity_175hPa","relative_humidity_150hPa","relative_humidity_125hPa","relative_humidity_100hPa","relative_humidity_50hPa","relative_humidity_10hPa","cloud_cover_1000hPa","cloud_cover_950hPa","cloud_cover_925hPa","cloud_cover_900hPa","cloud_cover_850hPa","cloud_cover_800hPa","cloud_cover_750hPa","cloud_cover_700hPa","cloud_cover_650hPa","cloud_cover_600hPa","cloud_cover_550hPa","cloud_cover_500hPa","cloud_cover_450hPa","cloud_cover_400hPa","cloud_cover_350hPa","cloud_cover_300hPa","cloud_cover_275hPa","cloud_cover_250hPa","cloud_cover_225hPa","cloud_cover_200hPa","cloud_cover_175hPa","cloud_cover_150hPa","cloud_cover_125hPa","cloud_cover_100hPa","cloud_cover_50hPa","cloud_cover_10hPa","wind_speed_1000hPa","wind_speed_950hPa","wind_speed_925hPa","wind_speed_900hPa","wind_speed_850hPa","wind_speed_800hPa","wind_speed_750hPa","wind_speed_700hPa","wind_speed_650hPa","wind_speed_600hPa","wind_speed_550hPa","wind_speed_500hPa","wind_speed_450hPa","wind_speed_400hPa","wind_speed_350hPa","wind_speed_300hPa","wind_speed_275hPa","wind_speed_250hPa","wind_speed_225hPa","wind_speed_200hPa","wind_speed_175hPa","wind_speed_150hPa","wind_speed_125hPa","wind_speed_100hPa","wind_speed_50hPa","wind_speed_10hPa","wind_direction_1000hPa","wind_direction_950hPa","wind_direction_925hPa","wind_direction_900hPa","wind_direction_850hPa","wind_direction_800hPa","wind_direction_750hPa","wind_direction_700hPa","wind_direction_650hPa","wind_direction_600hPa","wind_direction_550hPa","wind_direction_500hPa","wind_direction_450hPa","wind_direction_400hPa","wind_direction_350hPa","wind_direction_300hPa","wind_direction_275hPa","wind_direction_250hPa","wind_direction_225hPa","wind_direction_200hPa","wind_direction_175hPa","wind_direction_150hPa","wind_direction_125hPa","wind_direction_100hPa","wind_direction_50hPa","wind_direction_10hPa","vertical_velocity_1000hPa","vertical_velocity_950hPa","vertical_velocity_925hPa","vertical_velocity_900hPa","vertical_velocity_850hPa","vertical_velocity_800hPa","vertical_velocity_750hPa","vertical_velocity_700hPa","vertical_velocity_650hPa","vertical_velocity_600hPa","vertical_velocity_550hPa","vertical_velocity_500hPa","vertical_velocity_450hPa","vertical_velocity_400hPa","vertical_velocity_350hPa","vertical_velocity_300hPa","vertical_velocity_275hPa","vertical_velocity_250hPa","vertical_velocity_225hPa","vertical_velocity_200hPa","vertical_velocity_175hPa","vertical_velocity_150hPa","vertical_velocity_125hPa","vertical_velocity_100hPa","vertical_velocity_50hPa","vertical_velocity_10hPa","geopotential_height_1000hPa","geopotential_height_950hPa","geopotential_height_925hPa","geopotential_height_900hPa","geopotential_height_850hPa","geopotential_height_800hPa","geopotential_height_750hPa","geopotential_height_700hPa","geopotential_height_650hPa","geopotential_height_600hPa","geopotential_height_550hPa","geopotential_height_500hPa","geopotential_height_450hPa","geopotential_height_400hPa","geopotential_height_350hPa","geopotential_height_300hPa","geopotential_height_275hPa","geopotential_height_250hPa","geopotential_height_225hPa","geopotential_height_200hPa","geopotential_height_175hPa","geopotential_height_150hPa","geopotential_height_125hPa","geopotential_height_100hPa","geopotential_height_50hPa","geopotential_height_10hPa"]}},"index$":2},{"name":"daily","in":"query","description":"A list of daily weather variable aggregations.","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["weather_code","temperature_2m_max","temperature_2m_min","apparent_temperature_max","apparent_temperature_min","sunrise","sunset","daylight_duration","sunshine_duration","uv_index_max","uv_index_clear_sky_max","rain_sum","showers_sum","snowfall_sum","precipitation_sum","precipitation_hours","precipitation_probability_max","wind_speed_10m_max","wind_gusts_10m_max","wind_direction_10m_dominant","shortwave_radiation_sum","et0_fao_evapotranspiration"]}},"index$":3},{"name":"current","in":"query","description":"A list of variables to return for the current conditions.","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["temperature_2m","relative_humidity_2m","apparent_temperature","is_day","precipitation","rain","showers","snowfall","weather_code","cloud_cover","pressure_msl","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m"]}},"index$":4},{"name":"minutely_15","in":"query","description":"A list of weather variables at 15-minute intervals.","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["temperature_2m","relative_humidity_2m","dew_point_2m","apparent_temperature","precipitation","rain","snowfall","snowfall_height","freezing_level_height","sunshine_duration","weather_code","wind_speed_10m","wind_speed_20m","wind_speed_50m","wind_speed_80m","wind_speed_100m","wind_direction_10m","wind_direction_20m","wind_direction_50m","wind_direction_80m","wind_direction_100m","wind_gusts_10m","visibility","cape","lightning_potential","is_day"]}},"index$":5},{"name":"elevation","in":"query","schema":{"type":"number","format":"float"},"index$":6},{"name":"temperature_unit","in":"query","schema":{"type":"string","default":"celsius","enum":["celsius","fahrenheit"]},"index$":7},{"name":"wind_speed_unit","in":"query","schema":{"type":"string","default":"kmh","enum":["kmh","ms","mph","kn"]},"index$":8},{"name":"precipitation_unit","in":"query","schema":{"type":"string","default":"mm","enum":["mm","inch"]},"index$":9},{"name":"timeformat","in":"query","description":"If format unixtime is selected, all time values are returned in UNIX epoch time.","schema":{"type":"string","default":"iso8601","enum":["iso8601","unixtime"]},"index$":10},{"name":"timezone","in":"query","description":"Any IANA time zone name is supported. Use auto to resolve the local time zone.","schema":{"type":"string"},"index$":11},{"name":"past_days","in":"query","description":"Return past days of data.","schema":{"type":"integer","default":0,"minimum":0,"maximum":92},"index$":12},{"name":"forecast_days","in":"query","description":"Number of forecast days.","schema":{"type":"integer","default":7,"minimum":0,"maximum":16},"index$":13},{"name":"past_hours","in":"query","schema":{"type":"integer"},"index$":14},{"name":"forecast_hours","in":"query","schema":{"type":"integer"},"index$":15},{"name":"start_date","in":"query","description":"Start date of the time interval in ISO 8601 format.","schema":{"type":"string","format":"date"},"index$":16},{"name":"end_date","in":"query","description":"End date of the time interval in ISO 8601 format.","schema":{"type":"string","format":"date"},"index$":17},{"name":"tilt","in":"query","description":"Slope tilt in degrees for global_tilted_irradiance calculation.","schema":{"type":"number","format":"float","default":0},"index$":18},{"name":"azimuth","in":"query","description":"Azimuth for global_tilted_irradiance. North=0, East=90, South=180, West=270.","schema":{"type":"number","format":"float","default":0},"index$":19},{"name":"cell_selection","in":"query","description":"Grid cell selection preference: land, sea, or nearest.","schema":{"type":"string","enum":["land","sea","nearest"]},"index$":20},{"name":"apikey","in":"query","description":"Only required for commercial subscriptions.","schema":{"type":"string"},"index$":21},{"name":"models","in":"query","description":"Manually select one or more weather models.","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["best_match","ecmwf_ifs","ecmwf_ifs025","ecmwf_aifs025_single","cma_grapes_global","bom_access_global","ncep_gfs_seamless","ncep_gfs_global","ncep_hrrr_conus","ncep_nbm_conus","ncep_nam_conus","ncep_gfs_graphcast025","ncep_aigfs025","ncep_hgefs025_ensemble_mean","jma_seamless","jma_msm","jma_gsm","kma_seamless","kma_ldps","kma_gdps","icon_seamless","icon_global","icon_eu","icon_d2","cmc_gem_seamless","cmc_gem_gdps","cmc_gem_rdps","cmc_gem_hrdps","cmc_gem_hrdps_west","meteofrance_seamless","meteofrance_arpege_world","meteofrance_arpege_europe","meteofrance_arome_france","meteofrance_arome_france_hd","italia_meteo_arpae_icon_2i","metno_seamless","metno_nordic","knmi_seamless","knmi_harmonie_arome_europe","knmi_harmonie_arome_netherlands","dmi_seamless","dmi_harmonie_arome_europe","ukmo_seamless","ukmo_global_deterministic_10km","ukmo_uk_deterministic_2km","meteoswiss_icon_seamless","meteoswiss_icon_ch1","meteoswiss_icon_ch2","geosphere_seamless","geosphere_arome_austria"]}},"index$":22}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let weather_forecast_api_ref01_data = Object.values(setup.data.existing.weather_forecast_api)[0] as any

    // LOAD
    const weather_forecast_api_ref01_ent = client.WeatherForecastApi()
    const weather_forecast_api_ref01_match_dt0: any = {}
    const weather_forecast_api_ref01_data_dt0 = (await weather_forecast_api_ref01_ent.load(weather_forecast_api_ref01_match_dt0)).data()
    assert(null != weather_forecast_api_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/weather_forecast_api/WeatherForecastApiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenMeteoSdkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['weather_forecast_api01','weather_forecast_api02','weather_forecast_api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPEN_METEO_SDK_TEST_WEATHER_FORECAST_API_ENTID': idmap,
    'OPEN_METEO_SDK_TEST_LIVE': 'FALSE',
    'OPEN_METEO_SDK_TEST_EXPLAIN': 'FALSE',
    'OPEN_METEO_SDK_SERVER_BASE': "",
  })

  idmap = env['OPEN_METEO_SDK_TEST_WEATHER_FORECAST_API_ENTID']

  const live = 'TRUE' === env.OPEN_METEO_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPEN_METEO_SDK_TEST_WEATHER_FORECAST_API_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenMeteoSdkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        server: {
          base: env.OPEN_METEO_SDK_SERVER_BASE,
        },
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPEN_METEO_SDK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
