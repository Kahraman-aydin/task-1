# Developer-experience report: Open-Meteo SDK

## Selection

Kamraan’s assessment uses Open-Meteo’s public Weather Forecast API. The upstream project publishes an OpenAPI 3.1 forecast specification and offers free access for open-source developers and non-commercial use without an API key. A check of the Voxgig SDK catalogue did not find an Open-Meteo SDK at the time of this assessment.

The project is an unofficial TypeScript SDK generated from the upstream specification. It is MIT-licensed under Kamraan’s name and is not affiliated with Open-Meteo. The data API remains subject to Open-Meteo’s attribution and non-commercial-use terms.

## Generator workflow

The project was scaffolded from `openapi.yml` with:

```powershell
npx --yes @voxgig/create-sdkgen@0.30.7 open-meteo-sdk -o . -d .\openapi.yml
```

The scaffold’s automatic dependency step failed on Windows with `spawn npm ENOENT`, so the `.sdk` dependencies were installed with `npm.cmd install`. The TypeScript target and offline `test` feature were then added through the generated `.sdk` scripts. Generation was run from `.sdk/model` with a local `tm` junction because the model loader otherwise resolved relative template paths from the wrong directory.

## Results

- The OpenAPI parser produced 1 entity, 1 path, and 1 operation: `GET /v1/forecast`.
- The generated TypeScript package exposes a `WeatherForecastApi` entity and direct request methods.
- TypeScript compilation passed with `npm run build`.
- The model test completed successfully when run from `.sdk/test`.
- The generated package contains 16 compiled offline test files; `npm test` passed.
- No API key, live request, or credential was used.

## Observations

The generated client is compact and easy to understand for this API. Open-Meteo’s single forecast operation has many query variables, so generation avoids hand-writing a large parameter and response surface. The offline test feature also gives immediate confidence that the operation definition, request construction, and test transport agree.

The main friction was environmental rather than API-specific. The scaffold invokes `npm` by name, which is not discoverable as a child process in this Windows setup even though `npm.cmd` works. Relative model/template resolution also depends on the current working directory. A portable launcher should invoke the platform-specific npm command and resolve model includes relative to the model file or project root.

The generator emitted one warning because the OpenAPI definition did not provide a concrete server URL in the expected location; the generated client consequently exposes `server.base`. This is a reasonable fallback, but the README should show the Open-Meteo default base URL explicitly so a first-time user does not have to infer it from the upstream specification.

## Assessment

For a public, no-key API, Voxgig’s generator produced a useful SDK quickly and supplied a meaningful offline test harness. The strongest result is the generated request surface: a complex weather query is represented as a typed operation instead of a hand-maintained URL builder. The biggest improvement opportunity is Windows bootstrap and path portability. Fixing those two details would make the first-run experience substantially smoother without changing the generated API design.

## Sources

- [Open-Meteo forecast OpenAPI specification](https://github.com/open-meteo/open-meteo/blob/main/openapi/forecast.yml)
- [Open-Meteo API project](https://github.com/open-meteo/open-meteo)
- [Voxgig SDK Generator](https://github.com/voxgig/sdkgen)
