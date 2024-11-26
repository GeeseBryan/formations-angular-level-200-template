import { Injectable } from '@angular/core';
import { StatisticsModel } from './model/statistics-model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() { }

  private fakeData: StatisticsModel[] = [
    { id: '1', month: 1, years: 2023, success: 100, failed: 5 },
    { id: '2', month: 2, years: 2023, success: 150, failed: 10 },
    { id: '3', month: 3, years: 2023, success: 200, failed: 20 },
  ];

  public getStatistics(): Observable<StatisticsModel[]> {
    return of(this.fakeData).pipe(delay(1000));
  }

  public getStatisticById(id: string): Observable<StatisticsModel | undefined> {
    const statistic = this.fakeData.find((stat) => stat.id === id);
    return of(statistic).pipe(delay(1000));
  }

}
