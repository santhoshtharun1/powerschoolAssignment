import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface search{
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'powerschoolAssignment',
  templateUrl: 'powerschoolAssignment.html',
  styleUrls: ['powerschoolAssignment.css'],
})
export class powerschoolAssignment implements OnInit {
  myControl = new FormControl();
  options: search[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'},
    {name: 'Andrew'},
    {name: 'Aquifier'},
    {name: 'accommodate'},
    {name: 'food'},
    {name: 'powerschool'},
    {name: 'Schoology'},{name: 'Chalkable'},{name: 'Haiku Learning System'},{name: 'SRB Education System'},{name: 'century consultants'},{name: 'peopele admin'},{name: 'infosnap'},{name: 'altonaEd'},{name: 'competitors'},{name: 'Revenue'},{name: 'Funding'},{name: 'Cricket'},{name: 'IPL'},{name: 'Balcony'},
    {name: 'Dumble'},{name: 'dirty'},{name: 'dady'},{name: 'exhausting'},{name: 'frankie'},{name: 'gangSter'},{name: 'Doctor'},{name: 'Hospital'},
    {name: 'Police'},{name: 'Corona'},{name: 'Quarantine'},{name: 'Besafe'},{name: 'stayhome'},{name: 'pandemic'},{name: 'victims'},{name: 'Inida'},{name: 'Jacob'},
    {name: 'Santhosh'},{name: 'LandMark'},{name: 'Madness'},{name: 'private'},{name: 'Subsidiary'},{name: 'initial'},{name: 'Lemon'},{name: 'Mankind'},{name: 'Nancy'},{name: 'WorkIndia'},{name: 'Van'},
    {name: 'Car'},{name: 'House'},{name: 'Bike'},{name: 'Zebronic'},{name: 'Video'},{name: 'yahoo'},{name: 'Yamaha'},{name: 'Xtreme'},{name: 'virtually'},{name: 'autocomplete'},
    {name: 'app'},{name: 'binary'},{name: 'best'},{name: 'industrial'},{name: 'java'},{name: 'jersey'},{name: 'kitchen'},{name: 'localhost'},{name: 'linkedin'},
    {name: 'mandatory'},{name: 'notification'},{name: 'obligatory'},{name: 'oneplus'},{name: 'placement'},{name: 'query'},{name: 'race'},{name: 'radiology'},{name: 'sample'},{name: 'frequnet'},
    {name: 'pckage'},{name: 'Tharun'},{name: 'uidai'},{name: 'under'},{name: 'vampire'},{name: 'walmart'},{name: 'warmup'},{name: 'zoom'},
  ];
  filteredOptions: Observable<search[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(search: search): string {
    return search && search.name ? search.name : '';
  }

  private _filter(name: string): search[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
