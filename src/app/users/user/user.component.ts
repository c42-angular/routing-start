import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // reading params from active route
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    }

    // route params as observables
    this.activeRoute.params.subscribe(
      (p) => {
        this.user = {
          id: p['id'],
          name: p['name'],
        }
      }
    );
  }

}
