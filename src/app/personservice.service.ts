import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonIntf} from './person-intf';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {
  private personUrl = 'assets/persons.json';
  private personDetailsUrl = 'assets/persondetails.json';
  constructor(private httpClient: HttpClient) { }

  public getPersonList(): Observable<PersonIntf[]> {
    return this.httpClient.get<PersonIntf[]>(this.personUrl);
  }
  public getPersonDetails(): Observable<PersonIntf[]> {
    return this.httpClient.get<PersonIntf[]>(this.personDetailsUrl);
  }

}
