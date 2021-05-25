import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description-startships',
  templateUrl: './description-startships.page.html',
  styleUrls: ['./description-startships.page.scss'],
})
export class DescriptionStartshipsPage implements OnInit {

  starships:any; 

  constructor(private actroute02:ActivatedRoute, private obtenservice3:SwapiService) { }

  ngOnInit() {
    this.actroute02.paramMap.subscribe((param)=>{
      let id = param.get('id');
      console.log(id);
      this.starships = this.obtenservice3.getSwapi(`starships/${id}`).subscribe(data =>{
        this.starships=data;
        console.log(data);
    });

  });
 }

}
