import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  Reqres: any = [];
  constructor(public restApi: ReqresService) { }


  ngOnInit(): void {
    this.loadReqres();
  }

  loadReqres() {
    return this.restApi.getUser().subscribe((data: {}) => {
      this.Reqres = data;
    })
  }
}
