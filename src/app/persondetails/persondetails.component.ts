import {Component, OnInit} from '@angular/core';
import {PersonserviceService} from '../personservice.service';
import {PersonIntf} from '../person-intf';

@Component({
  selector: 'app-persondetails',
  template: `
      <div>
          <ul *ngFor="let personDetail of personDetails">
              <li>{{personDetail.personName + '   ' + personDetail.personId + '   ' + personDetail.address + '   ' + personDetail.age }}</li>
          </ul>
      </div>
  `,
  styles: []
})
export class PersondetailsComponent implements OnInit {
  private personDetails: PersonIntf[];
  private errorMessage: string;

  constructor(private personService: PersonserviceService) {
    this.personService.getPersonDetails().subscribe(data => this.personDetails = data, error => this.errorMessage = error.message);
  }

  ngOnInit() {
  }

}
