import {Component, effect, inject, input, Input} from "@angular/core";
import {CountUpModule} from "ngx-countup";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {Circle, LatLng, latLng, tileLayer} from "leaflet";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-map',
  template: `
    <div leaflet style="height: 300px;" [leafletOptions]="options" [leafletLayers]="layers"></div>
  `,
  imports: [
    CountUpModule,
    LeafletModule
  ]
})
export class MapComponent {
  private readonly httpClient = inject(HttpClient);
  private readonly accessToken = "pk.eyJ1IjoiZGVkaWNhdGVkLWlwIiwiYSI6ImNtNndieDd6dzBkeGgyaXF2bDJlcjFsOG4ifQ.QeUyNWXbnIRkAWstwc22FQ";
  cities = input.required<Array<string>>();

  constructor() {
    effect(async () => {
      const cities = new Set<string>();
      this.cities().forEach(city => cities.add(city));
      for (const city of cities) {
        const lngLat = await this.geocode(city);
        if (!lngLat){
          continue;
        }
        this.layers.push(new Circle(lngLat, {
          color: "#435fe3",
          opacity: 0.5,
          weight: 10,
          fillColor: "#435fe3",
          fillOpacity: 1,
          radius: 4000,
        }));
      }
    });
  }

  async geocode(location: string): Promise<LatLng | null> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${this.accessToken}&types=country`;

    try {
      const response = await firstValueFrom(this.httpClient.get<any>(url));

      if (response.features && response.features.length > 0) {
        const coordinates = response.features[0].center;
        return latLng(coordinates[1], coordinates[0]);
      } else {
        return null;
      }
    } catch (_) {
      return null;
    }
  }

  options = {
    layers: [
      tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${this.accessToken}`, {
        id: "mapbox/light-v9",
        tileSize: 256,
        zoomOffset: 0,
      })
    ],
    zoom: 1,
    center: latLng(30, 0)
  };
  layers: Circle[] = [];
}
