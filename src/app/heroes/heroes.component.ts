import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
//import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes =HEROES;
  // hero : Hero ={
  //   id: 1,
  //   name:'vipin'
  // };

  heroes: Hero[]=[];
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  // getHeroes():void{
  //   this.heroes=this.heroService.getHero(); 
  // }


  getHeroes():void{
    this.heroService.getHero().subscribe(heroes => this.heroes =heroes); 
  }

  selectHero ?:Hero;
  onSelect(hero :Hero) :void{
    this.selectHero = hero;
    this.messageService.add('Hero Component:  Selected hero id=${hero.id}')
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
