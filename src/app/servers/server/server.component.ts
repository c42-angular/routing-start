import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(Number(this.activeRoute.snapshot.params['id']));
    this.server = this.activeRoute.snapshot.data['serverData'];

    // this.activeRoute.params.subscribe(
    //   (p: Params) => {
    //     this.server = this.serversService.getServer(Number(p['id']));
    //   }
    // );
    this.activeRoute.data.subscribe(
      (d: Data) => {
        this.server = this.activeRoute.snapshot.data['serverData'];
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activeRoute, queryParamsHandling: 'preserve'});
  }
}
