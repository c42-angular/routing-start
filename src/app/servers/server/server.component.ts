import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.activeRoute.snapshot.params['id']));

    this.activeRoute.params.subscribe(
      (p: Params) => {
        this.server = this.serversService.getServer(Number(p['id']));
      }
    );
  }

}
