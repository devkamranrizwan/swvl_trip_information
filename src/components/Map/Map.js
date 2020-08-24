import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 31.480410,
  lng: 74.280309
};

export default function MyComponent() {
  const [response, setResponse] = useState(null);
  const mapPoints = [{ lat: 29.99509712, lng: 31.4459768 }, { lat: 30.01288023, lng: 31.43102269 }, { lat: 30.01642345, lng: 31.43356512 }, { lat: 30.01637555, lng: 31.39839364 }, { lat: 30.0409879, lng: 31.34613896 }, { lat: 30.04505095, lng: 31.34143553 }, { lat: 30.05408947, lng: 31.3421715 }, { lat: 30.06198228, lng: 31.34523262 }, { lat: 30.07322503, lng: 31.34378507 }, { lat: 30.08201257, lng: 31.34388217 }];
  var locations = JSON.stringify(mapPoints);
  var directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setResponse(
          () => ({
            response
          })
        )
      } else {
        console.log('response: ', response)
      }
    }
  }
  var waypts = [];
  for (var i = 1; i < locations.length - 1; i++) {
    waypts.push({
      location: locations[i],
      stopover: true
    });
  }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBIzV5JHDuOwr4DIe7FqT1MdhXjD3FWb6o"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {
          (
            <DirectionsService
              options={{
                destination: '30.08201257,31.34388217',
                origin: '29.99509712,31.4459768',
                waypoints: waypts,
                travelMode: 'DRIVING'
              }}
              callback={directionsCallback}
            />
          )
        }

        {
          (
            <DirectionsRenderer
              options={{
                directions: response
              }}
            />
          )
        }
      </GoogleMap>
    </LoadScript>
  )
}