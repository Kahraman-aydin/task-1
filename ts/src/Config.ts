
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'OpenMeteoSdk',
        slug: "open-meteo-sdk",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "{base}",

    server: {
      "base": "",
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        weather_forecast_api: {
        },
  
    }
  }


  entity = {
    "weather_forecast_api": {
      "fields": [
        {
          "name": "current",
          "title": "Current",
          "type": "`$OBJECT`"
        },
        {
          "name": "current_units",
          "title": "Current Units",
          "type": "`$OBJECT`"
        },
        {
          "name": "daily",
          "title": "Daily",
          "type": "`$OBJECT`"
        },
        {
          "name": "daily_units",
          "title": "Daily Units",
          "type": "`$OBJECT`"
        },
        {
          "name": "elevation",
          "title": "Elevation",
          "type": "`$NUMBER`",
          "format": "float"
        },
        {
          "name": "generationtime_ms",
          "title": "Generationtime Ms",
          "type": "`$NUMBER`",
          "format": "float"
        },
        {
          "name": "hourly",
          "title": "Hourly",
          "type": "`$OBJECT`"
        },
        {
          "name": "hourly_units",
          "title": "Hourly Units",
          "type": "`$OBJECT`"
        },
        {
          "name": "latitude",
          "title": "Latitude",
          "type": "`$NUMBER`",
          "format": "float"
        },
        {
          "name": "longitude",
          "title": "Longitude",
          "type": "`$NUMBER`",
          "format": "float"
        },
        {
          "name": "minutely_15",
          "title": "Minutely 15",
          "type": "`$OBJECT`"
        },
        {
          "name": "minutely_15_units",
          "title": "Minutely 15 Units",
          "type": "`$OBJECT`"
        },
        {
          "name": "timezone",
          "title": "Timezone",
          "type": "`$STRING`"
        },
        {
          "name": "timezone_abbreviation",
          "title": "Timezone Abbreviation",
          "type": "`$STRING`"
        },
        {
          "name": "utc_offset_seconds",
          "title": "Utc Offset Seconds",
          "type": "`$INTEGER`"
        }
      ],
      "name": "weather_forecast_api",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/forecast",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "forecast"
                }
              ],
              "parts": [
                "v1",
                "forecast"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "azimuth",
                    "orig": "azimuth",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "cell_selection",
                    "orig": "cell_selection",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "current",
                    "orig": "current",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "daily",
                    "orig": "daily",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "elevation",
                    "orig": "elevation",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "forecast_day",
                    "orig": "forecast_days",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 7
                  },
                  {
                    "name": "forecast_hour",
                    "orig": "forecast_hours",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "hourly",
                    "orig": "hourly",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "latitude",
                    "orig": "latitude",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "field": true
                  },
                  {
                    "name": "longitude",
                    "orig": "longitude",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "field": true
                  },
                  {
                    "name": "minutely_15",
                    "orig": "minutely_15",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "model",
                    "orig": "models",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "past_day",
                    "orig": "past_days",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "past_hour",
                    "orig": "past_hours",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "precipitation_unit",
                    "orig": "precipitation_unit",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "mm"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "temperature_unit",
                    "orig": "temperature_unit",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "celsius"
                  },
                  {
                    "name": "tilt",
                    "orig": "tilt",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "timeformat",
                    "orig": "timeformat",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "iso8601"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "wind_speed_unit",
                    "orig": "wind_speed_unit",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "kmh"
                  }
                ]
              },
              "select": {
                "exist": [
                  "latitude",
                  "longitude"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

