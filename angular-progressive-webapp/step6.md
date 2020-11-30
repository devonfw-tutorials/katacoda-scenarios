manifest.json

Default configuration.

ngsw-config.json

At assetGroups → resources → urls: In this field the google fonts api is added in order to use Montserrat font even without network.

`"urls": [ "https://fonts.googleapis.com/**" ]`

At the root of the json: A data group to cache API calls.

`
...
"dataGroups": [{
"name": "mythaistar-dishes",
"urls": [
"http://de-mucdevondepl01:8090/api/services/rest/dishmanagement/v1/dish/1"
],
"cacheConfig": {
"maxSize": 100,
"maxAge": "1h",
"timeout": "10s",
"strategy": "freshness"
}
}]

}`
