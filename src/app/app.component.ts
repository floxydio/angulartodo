import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ReqresService } from './reqres.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Reqres: any = [];
  AnimeModel: any = [];
  @Input()email  = "";
  @Input()password ="";
  constructor(public restApi: ReqresService) {}
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
  submitRegister() {
    console.log(`Data --> ${this.email} --> ${this.password}`)
    return this.restApi.postLogin(this.email,this.password).subscribe((data: {}) => {
      this.Reqres = data;
      console.warn("DATAAA -> ", data);
    })
  }
  // public items: string[] = [];
  // public newTask = []as any;
  // title = 'try-angular';

  // public addTodo() {
  //   if (this.newTask == '') {
  //     alert("Data Kosong")
  //   } else {
  //     this.items.push(this.newTask);
  //     this.newTask = '';
  //   }
  // }

  // public deleteTodo(index: number) {
  //   this.items.splice(index, 1);
  //   alert("Berhasil Delete")
  // }
  // public editTodo(index: number) {
  //   this.newTask = this.items[index];
  //   this.items.splice(index, 1);
  // }

  // public showAlert() {
  //   alert("Haiii " + this.newTask)
  //   localStorage.setItem("nama", this.newTask)
  // }

  // public showSave() {
  //   console.log(localStorage.getItem("nama"))
  // }

}
