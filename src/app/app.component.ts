import { Component, NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: string[] = [];
  public newTask = []as any;
  title = 'try-angular';

  public addTodo() {
    if (this.newTask == '') {
      alert("Data Kosong")
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTodo(index: number) {
    this.items.splice(index, 1);
    alert("Berhasil Delete")
  }

}
