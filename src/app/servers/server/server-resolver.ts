import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from 'app/servers/servers.service';

interface ServerData {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerData> {

  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                  ServerData | Observable<ServerData> | Promise<ServerData> {
            return this.serversService.getServer(+route.params['id']);
  }

}
