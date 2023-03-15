import { Component, OnInit } from '@angular/core';
import { VkapiService } from 'src/app/services/vkapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

    constructor(private auth: VkapiService, private router: ActivatedRoute) { }


    ngOnInit(): void {
        const dataAuth = {
            client_id: '51580090',
            display: 'page',
            scope: 'wall',
            redirect_uri: 'https://oauth.vk.com/blank.html',
            response_type: 'token',
            v: '5.131'
        }
        this.auth.VKAuth(dataAuth);
    }

}
