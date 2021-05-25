import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  planets:any;

  constructor(private obterRouter:ActivatedRoute , private obterserviswapi:SwapiService) { }

  ngOnInit() {
    this.obterRouter.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id)
      this.planets = this.obterserviswapi.getSwapi(`planets/${id}`).subscribe(data =>{
        this.planets= data;
        console.log(data);
      });
    });
  }
}
