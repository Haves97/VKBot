import { Injectable } from '@angular/core';
import { IVKAuth } from '../interfaces/vkauth';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { concatMap, Observable } from 'rxjs';
import { ParserService } from './parser.service';

@Injectable({
    providedIn: 'root'
})
export class VkapiService {

    constructor(
        private http: HttpClient,
        private parser: ParserService) { }

    VKAuth(auth: IVKAuth) {
        this.http.get('https://oauth.vk.com/authorize', {
            params: {
                client_id: auth.client_id,
                display: auth.display,
                redirect_uri: auth.redirect_uri,
                scope: auth.scope,
                response_type: auth.response_type,
                v: auth.v
            },
            responseType: 'text'
        }).pipe(
            concatMap(result => this.second(result))
        ).subscribe(res => console.log('finish', res));
    }

    second(res: any): Observable<any> {
        const ip_h = this.parser.parserSubstr(res, 'name="ip_h" value="', '"');
        const lg_domain_h = this.parser.parserSubstr(res, 'name="lg_domain_h" value="', '"');
        const _origin = this.parser.parserSubstr(res, 'name="_origin" value="', '"');
        const to = this.parser.parserSubstr(res, 'name="to" value="', '"');
        const expire = this.parser.parserSubstr(res, 'name="expire" value="', '"');
        const email = "andrei45680@mail.ru";
        const pass = "Stalker1997";

        const postData = {
            ip_h,
            lg_domain_h,
            _origin,
            to,
            expire,
            email,
            pass
        };
        return this.http.post("https://login.vk.com/?act=login&soft=1&utf8=1", postData);
    }
}
