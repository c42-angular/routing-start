import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.activeRoute.snapshot.queryParams);
    // console.log(this.activeRoute.snapshot.fragment);
    this.activeRoute.queryParams.subscribe(
      (p: Params) => {
        this.allowEdit = p['allowEdit'] === '1';
      }
    );
    // this.activeRoute.fragment.subscribe();
    const serverId = +this.activeRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
