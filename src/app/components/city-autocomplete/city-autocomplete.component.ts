import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup} from '@angular/forms';

export class Place {

  constructor(zip: string, name: string) {
    this.zip = zip;
    this.name = name;
  }

  zip: string;
  name: string;
}

@Component({
  selector: 'app-city-autocomplete',
  templateUrl: './city-autocomplete.component.html',
  styleUrls: ['./city-autocomplete.component.css']
})
export class CityAutocompleteComponent implements OnInit, ControlValueAccessor {

  cities: Place[];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'zip': [''],
      'name': ['']
    });
  }

  ngOnInit() {
    this.cities = new Array();
    this.cities.push(new Place('8362', 'Balterswil'));
    this.cities.push(new Place('8363', 'Bichelsee'));
    this.cities.push(new Place('8400', 'Winterthur'));
  }

  registerOnChange(fn: any): void {
    console.log('aa');
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(place: Place): void {
  }

}
