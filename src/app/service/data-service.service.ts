import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface IDropDownMenuOption{
  [key: string]: string
}


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }

  private drpData = of({
    'item-1': 'item 1',
    'item-2': 'item 2',
    'item-3': 'item 3'
  }).pipe(delay(5000))

  getDropDownmenuOptions(): Observable<IDropDownMenuOption>{
    return this.drpData;
  }


  addItemToDropDown(key: string, value: string): Observable<IDropDownMenuOption> {
    this.drpData.subscribe((data) => {
      const newData = { ...data, [key]: value };
      this.drpData = of(newData);
    });

    return this.drpData;
  }
}
