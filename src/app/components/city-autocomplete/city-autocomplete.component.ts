import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup} from '@angular/forms';

export class Place {

  constructor(zip: string, city: string) {
    this.zip = zip;
    this.city = city;
  }

  zip: string;
  city: string;
}

@Component({
  selector: 'app-city-autocomplete',
  templateUrl: './city-autocomplete.component.html',
  styleUrls: ['./city-autocomplete.component.css']
})
export class CityAutocompleteComponent implements OnInit, ControlValueAccessor {

  cities: Place[];
  preview: Place[] = new Array();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'zip': [''],
      'city': ['']
    });
  }

  ngOnInit() {
    this.cities = new Array();
    this.cities.push(new Place('8362', 'Balterswil'));
    this.cities.push(new Place('8363', 'Bichelsee'));
    this.cities.push(new Place('8400', 'Winterthur'));

    this.form.get('zip').valueChanges.subscribe(() => {
        this.preview = this.cities.filter(city => city.zip.startsWith(this.form.get('zip').value));
    });

    this.form.get('city').valueChanges.subscribe(() => {
      this.preview = this.cities.filter( city => city.city.includes(this.form.get('city').value));
    });
  }

  setSelected(city: Place) {
    this.form.setValue(city);
    this.preview = null;
  }

  clearForm() {
    this.form.patchValue({'zip': ''});
    this.form.patchValue({'city': ''});
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    console.log('aa');
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(place: Place): void {
  }

  private propagateChange = (_: any) => { };

}
