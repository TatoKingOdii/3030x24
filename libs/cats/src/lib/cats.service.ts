import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  // Not really a service or api call since the url can be referenced directly
  // to get an image

  constructor(private http: HttpClient) { }

  getSquareCat(size: number): string {
    console.log('Get Cat with size: ' + size);
    return `https://placekitten.com/${size}/${size}`;
  }
}
