import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';
import {Role} from './roles.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(readonly mainService: MainService) {
  }

  ngOnInit() {
  }

  showConfig() {
    this.mainService.getRoles()
      .subscribe((data: Role) => console.log(data));
  }
}
