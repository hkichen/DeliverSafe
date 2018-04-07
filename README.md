# DeliverSafe
A mobile friendly app that allows delivery drivers to check crime in their current area.

This app is a mash-up, using data pulled from the Google Maps API and CrimeSpot API. By using the user's location input (address, building, zip, or partial address), the app displays the most recent crimes committed within a quarter mile radius.

If a delivery driver feels unsafe about an address they are being sent to, they can type in the address in the search bar and click the search button. Using the Google Maps API, the address is geocoded into longitudinal and latitudinal coordinates, which sets a point of reference for the CrimeSpot API to generate crime data for that vicinity.

This app was created with safety in mind. After having worked delivery driver positions, developers for DeliverSafe came up with the idea to allow other delivery drivers to be in the know about possible criminal data for locations they are sent to or may be unfamiliar with. The resulting crime data is generated with the aim of informing, and putting driver safety first.

##Built With
- TopCoat
- Bootstrap
- Google Maps Javascript API
- SpotCrime API

##Authors
- Hoan "Lina" Kichen [hkichen](https://github.com/hkichen)
- Ryan McKenzie [ryanjm88 ](https://github.com/ryanjm88 )
- Carrie Kordys [TheLongDinosaur](https://github.com/TheLongDinosaur)

##Deployment Link
https://hkichen.github.io/DeliverSafe/

## Notes on CORS troubles
In order to run this version of the app, you will need to download an "allow cross origin" plugin available via this link:

https://chrome.google.com/webstore/search/allow%20cross%20origin?hl=en

The SpotCrime API prevents cross origin calls, and this plugin overrides that security messure. 

For version 2, we plan to build a proxy that can make calls to the API so that users do not have to download anything.