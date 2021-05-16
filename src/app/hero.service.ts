import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  
  constructor(private messageService:MessageService) { }

  // getHero():Hero[]{
  //   return HEROES;
  // }

  getHero(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Hero Service : fetched');
    return heroes;
  }

}
