import Leaflet from 'leaflet'
import { taxirankspointsPopup } from './Popups'
import { taxirankspointsStyle, taxiranksStyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.409631 , -2.1587968],
        StartingZoom: 16,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true
    },
    DynamicData: 
    [
        
        {
            key: 'Taxi Ranks',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: taxiranksStyle,
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'Taxi Ranks Points',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: taxirankspointsPopup,
                maxZoom: 2,
                style: taxirankspointsStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration