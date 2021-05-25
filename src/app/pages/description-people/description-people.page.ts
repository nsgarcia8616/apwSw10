import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SwapiService} from '../../services/swapi.service'

@Component({
  selector: 'app-description-people',
  templateUrl: './description-people.page.html',
  styleUrls: ['./description-people.page.scss'],
})
export class DescriptionPeoplePage implements OnInit {

  people : any ;

  constructor(private actroute :ActivatedRoute, private obteswser02:SwapiService) { }

  ngOnInit() {
    this.actroute.paramMap.subscribe((param)=>{
        let id = param.get('id');
        console.log(id);
        this.people = this.obteswser02.getSwapi(`people/${id}`).subscribe(data =>{
          this.people=data;
          console.log(data);
      });

    });

  }

}
