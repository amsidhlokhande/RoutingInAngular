import {Component, OnInit} from '@angular/core';
import {PersonserviceService} from '../personservice.service';
import {PersonIntf} from '../person-intf';

@Component({
  selector: 'app-personlist',
  template: `
      <div>
          <ul *ngFor="let person of personList">
              <li>{{person.personId + "   " + person.personName}}</li>
          </ul>
      </div>
  `,
  styles: []
})
export class PersonlistComponent implements OnInit {
  private httpError: string;
  private personList: PersonIntf[];

  constructor(private personService: PersonserviceService) {
    this.personService.getPersonList().subscribe(data => this.personList = data, error => this.httpError = error.message);
  }

  ngOnInit() {
  }

}
