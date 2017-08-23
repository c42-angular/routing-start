import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

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
    this.server = this.serversService.getServer(Number(this.activeRoute.snapshot.params['id']));

    this.activeRoute.params.subscribe(
      (p: Params) => {
        this.server = this.serversService.getServer(Number(p['id']));
      }
    );
  }

  onEdit() {
    this.router.navigate(['servers', this.server.id, 'edit']);
  }
}
