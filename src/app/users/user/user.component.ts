import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // reading params from active route
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    }

    // route params as observables
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (p: Params) => {
        this.user = {
          id: p['id'],
          name: p['name'],
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
