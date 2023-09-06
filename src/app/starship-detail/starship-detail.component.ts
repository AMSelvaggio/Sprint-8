import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../service/starships.service'; 

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship: any;
  pilots: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private starshipsService: StarshipsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.starshipsService.getStarshipById(id).subscribe(data => {
      this.starship = data;
  
      
      if (this.starship.pilots && this.starship.pilots.length > 0) {
        
        const pilotObservables = this.starship.pilots.map((pilotUrl:string) => this.starshipsService.getPilotDetails(pilotUrl));
  
        // Espera a que todos los observables de pilotos se completen y suscríbete al resultado
        forkJoin(pilotObservables).subscribe({
          next: pilotsData => {
            this.pilots = pilotsData as any[];
          },
        });
      }
    });
  }


getStarshipId(url: string): string {
  return this.extractIdFromUrl(url);
}


getPilotId(url: string): string {
  return this.extractIdFromUrl(url);
}

private extractIdFromUrl(url: string): string {
  const matches = url.match(/(\d+)\/$/);
  return matches ? matches[1] : ''; 
}


}






