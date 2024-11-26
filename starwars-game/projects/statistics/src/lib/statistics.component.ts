import { Component } from '@angular/core';
import { StatisticsModel } from './model/statistics-model';
import { StatisticsService } from './statistics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-statistics',
  standalone: true,
  providers: [StatisticsService],
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styles: ['./statistics.component.css']
})

export class StatisticsComponent {

 public constructor(private statisticsService: StatisticsService) { }

 public stats: StatisticsModel[] = [];
 public isLoading = true;

 public ngOnInit() {
  this.getDatas();
 }

 private getDatas(): void {
  this.statisticsService.getStatistics().subscribe((data) => {
    this.stats = data;
    console.log(this.stats);
    this.isLoading = false;
  });
 }
}