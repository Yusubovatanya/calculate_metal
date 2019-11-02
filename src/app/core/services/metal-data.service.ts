import { Injectable } from '@angular/core';
import { Material } from '../models/material.model';
import { Hexagon } from '../models/hexagon.model';
import { ProfileType } from '../models/profile.model';
import { TableTitles } from '../models/table-titles.model';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetalDataService {
  constructor() { }
  
  materialList: Material[] = [
    { value: 'Сталь 40Х ГОСТ 4543-71', density: 7820 },
    { value: 'Сталь 10 ГОСТ 1050-88', density: 7856 },
    { value: 'Сталь 20 ГОСТ 1050-88', density: 7859 },
    { value: 'Сталь 40 ГОСТ 1050-88', density: 7850 },
    { value: 'Сталь 45 ГОСТ 1050-88', density: 7826 },
    { value: 'Сталь 60 ГОСТ 1050-88', density: 7800 },
    { value: 'С235-С375 ГОСТ 27772-88', density: 7850 },
    { value: 'Ст3пс ГОСТ 380-2005', density: 7850 },
    { value: 'Чугун ковкий КЧ 70-2 ГОСТ 1215-79', density: 7000 },
    { value: 'Чугун высокопрочный ВЧ35 ГОСТ 7293-85', density: 7200 },
    { value: 'Чугун серый СЧ10 ГОСТ 1412-85', density: 6800 },
    { value: 'Чугун серый СЧ20 ГОСТ 1412-85', density: 7100 },
    { value: 'Чугун серый СЧ30 ГОСТ 1412-85', density: 7300 },
    { value: 'Силумин АК12ж ГОСТ 1583-93', density: 2700 },
    { value: 'Сплав АК12 ГОСТ 1583-93	', density: 2710 },
    { value: 'Сплав АК5М ГОСТ 1583-93', density: 2640 },
    { value: 'Сплав АК7 ГОСТ 1583-93', density: 2700 },
    { value: 'Сплав АО9-1 ГОСТ 14113-78', density: 2700 },
    { value: 'Б83 ГОСТ 1320-74', density: 7380 },
    { value: 'Б87 ГОСТ 1320-74', density: 7300 },
    { value: 'БН ГОСТ 1320-74', density: 9550 },
    { value: 'Сплав МЛ10...МЛ19 ГОСТ 2856-79', density: 1810 },
    { value: 'Сплав ВМЛ5', density: 1890 },
    { value: 'Сплав ВМЛ9', density: 1850 },
    { value: 'Бронза оловянная БрО10C10', density: 8800 },
    { value: 'Бронза оловянная БрО19', density: 8600 },
    { value: 'Бронза оловянная БрОC10-10', density: 9100 },
    { value: 'Бронза оловянная БрОA10-1', density: 8750 },
    { value: 'Бронза БрА10Ж3Мч2 ГОСТ 493-79', density: 8200 },
    { value: 'Бронза БрА9Ж3Л ГОСТ 493-79', density: 8200 },
    { value: 'Бронза БрМц5 ГОСТ 18175-78', density: 8600 },
    { value: 'Латунь Л60 ГОСТ 15527-2004', density: 8800 },
    { value: 'Латунь ЛА ГОСТ 1020-97', density: 8500 },
    { value: 'Медь М0, М1, М2, М3 ГОСТ 859-2001', density: 8940 },
    { value: 'Медь МСр1 ГОСТ 16130-90', density: 8900 },
    { value: 'ВТ1-0 ГОСТ 19807-91', density: 4500 },
    { value: 'ВТ14 ГОСТ 19807-91', density: 4500 },
    { value: 'ВТ20Л ГОСТ 19807-91', density: 4470 },
  ];

  hexagon: Hexagon[] = [
    { name: '3', value: 0.061 },
    { name: '3.2', value: 0.07 },
    { name: '3.5', value: 0.083 },
    { name: '4', value: 0.109 },
    { name: '4.5', value: 0.138 },
    { name: '5', value: 0.17 },
    { name: '5.5', value: 0.206 },
    { name: '6', value: 0.245 },
    { name: '6.5', value: 0.2087 },
    { name: '7', value: 0.333 },
    { name: '8', value: 0.435 },
    { name: '9', value: 0.551 },
    { name: '10', value: 0.608 },
    { name: '11', value: 0.823 },
    { name: '12', value: 0.979 },
    { name: '13', value: 1.15 },
    { name: '14', value: 1.33 },
    { name: '15', value: 1.53 },
    { name: '16', value: 1.74 },
    { name: '17', value: 1.96 },
    { name: '18', value: 2.2 },
    { name: '19', value: 2.45 },
    { name: '20', value: 2.72 },
    { name: '20.8', value: 2.94 },
    { name: '21', value: 3 },
    { name: '22', value: 3.29 },
    { name: '24', value: 3.92 },
    { name: '25', value: 4.25 },
    { name: '26', value: 4.6 },
    { name: '27', value: 4.96 },
    { name: '28', value: 5.33 },
    { name: '30', value: 6.12 },
    { name: '32', value: 6.96 },
    { name: '34', value: 7.86 },
    { name: '36', value: 8.81 },
    { name: '38', value: 9.82 },
    { name: '40', value: 10.88 },
    { name: '41', value: 11.4 },
    { name: '42', value: 11.99 },
    { name: '45', value: 13.77 },
    { name: '46', value: 14.4 },
    { name: '48', value: 15.6 },
    { name: '50', value: 17 },
    { name: '53', value: 19.1 },
    { name: '55', value: 20.6 },
    { name: '56', value: 21.3 },
    { name: '60', value: 24.5 },
    { name: '63', value: 27 },
    { name: '65', value: 28.7 },
    { name: '70', value: 33.3 },
    { name: '75', value: 38.2 },
    { name: '80', value: 43.5 },
    { name: '85', value: 49.1 },
    { name: '90', value: 55.1 },
    { name: '95', value: 61.4 },
    { name: '100', value: 68 }
  ];

  profileList: ProfileType[] = [
    { value: "circle", viewValue: "Круг" },
    { value: "pipe", viewValue: "Труба" },
    { value: "rect", viewValue: "Квадрат" },
    { value: "hexagon", viewValue: "Шестигранник" }
  ];

  tableTitles: TableTitles[] = [
    { firstParameter: 'D, мм', secondParameter: 'd, мм' },
    { firstParameter: 'a, мм', secondParameter: 'b, мм' },
    { firstParameter: 'S', secondParameter: null }
  ]

  getHexagonDataBase() {
    return of(this.hexagon.slice())
  }

  getMaterialDataBase(): Observable<Material[]> {
    return of(this.materialList.slice());
  }

  getTableTitles() {
    return of(this.tableTitles.slice())
  }

  getProfileList() {
    return of(this.profileList.slice())
  }


}
