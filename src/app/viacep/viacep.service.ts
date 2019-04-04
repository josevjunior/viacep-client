import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViaCepResponse } from './viacep.response';

@Injectable({providedIn: 'root'})
export class ViaCepService{

    constructor(public http: Http){}

    searchCep(cep: string): Observable<ViaCepResponse>{

        return this.http
                    .get(`https://viacep.com.br/ws/${cep}/json/`,
                    this.getRequestOptions())
                    .pipe(
                        map(res => res.json())
                    );

    }

    getRequestOptions(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({headers: headers});
    }

}