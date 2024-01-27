

# Sofia's Public Transport | NB: Project is WIP

The aim of this project is to show (*almost*) all lines of Sofia's public ground transport using [Leaflet](https://www.npmjs.com/package/leaflet) library.

## Tasks

The main view of the app should consist of:
-   a list of all lines
-   a map with all lines topologies (stops and segments)

Additionally, there should be a **filter** based on the line’s transport type (bus/tram/trolleybus) which hides (both in the list and the map) all deselected transport types.

When clicking on a line either from the list or on the map, a new page for the selected line should open, consisting of 2 sections:
- Map: the line’s routes should be displayed on a map
- Table: the stops of each route should be displayed in a table

There must be **menu** allowing the **navigation** between the views.

There must be a **drop-down** (or similar) allowing the switch between the routes.

**API calls** will be *mocked* (data would be in json file).

## Dependencies

I will be using React with TypeScript, [Leaflet](https://www.npmjs.com/package/leaflet), [Redux](https://www.npmjs.com/package/redux) and more.
  

##  Available Scripts

In the project directory, you can run:

###  `npm start` 

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.