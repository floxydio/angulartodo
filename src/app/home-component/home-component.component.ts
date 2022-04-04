import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  Reqres: any = [];
  AnimeModel: any = [];

  constructor(public restApi: ReqresService) { }


  ngOnInit(): void {
    this.loadReqres();
    this.loadAnime();
  }

  loadReqres() {
    return this.restApi.getUser().subscribe((data: {}) => {
      this.Reqres = data;
    })
  }
  loadAnime() {
    return this.restApi.getAnime().subscribe((data: {}) => {
      this.AnimeModel = data;
    })
  }
}
