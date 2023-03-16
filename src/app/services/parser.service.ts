import { Injectable } from '@angular/core';
import { ErrorParserStr } from '../enums/parser';

@Injectable({
    providedIn: 'root'
})
export class ParserService {

    /*
        В str возвращает подстроку между start(не включает) и до end(не включает). 
        Если end равен -1, то от start до конца str формирует подстроку
    */
    parserSubstr(str: string, start: string, end: string | number): string | ErrorParserStr {
        if (!str.includes(start)) {
            return ErrorParserStr.NoStart;
        }
        const start_num = str.indexOf(start) + start.length;
        if (start_num + start.length > str.length) {
            return ErrorParserStr.EndPredel;
        }
        const end_num = end === -1 ? -1 : str.indexOf(end as string, start_num);

        return str.slice(start_num, end_num);
    }

    constructor() { }
}
