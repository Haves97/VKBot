import { Injectable } from '@angular/core';
import { IVKAuth } from '../interfaces/vkauth';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class VkapiService {

    constructor(private http: HttpClient) { }

    VKAuth(auth: IVKAuth) {
        // this.http.get<any>('https://oauth.vk.com/authorize', {
        //     params: {
        //         client_id: auth.client_id,
        //         display: auth.display,
        //         redirect_uri: auth.redirect_uri,
        //         scope: auth.scope,
        //         response_type: auth.response_type,
        //         v: auth.v
        //     }
        // }).subscribe(res => console.log(res))
        this.http.get('https://oauth.vk.com/authorize?client_id=51580090&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=wall&response_type=token&v=5.131').subscribe(res => console.log(res))


    }
}
