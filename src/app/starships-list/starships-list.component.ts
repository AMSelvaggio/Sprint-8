import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../service/starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})


export class StarshipsListComponent implements OnInit {
  starships: any[] = [];

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(): void {
    this.starshipsService.getAllStarships().subscribe(data => {
      this.starships = [...this.starships, ...data.results];
      if (data.next) {
        this.starshipsService.currentPage++;
      }
    });
  }

  onViewMore(): void {
    this.loadStarships();
  }
}