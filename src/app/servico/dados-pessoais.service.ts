import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { DadosPessoais } from "../parametros/dados-pessoais.component";

@Injectable({ providedIn: 'root' })

export class DadosPessoaisService {
    requisicaoUrl: string = "http://localhost:3000";

    constructor(private http : HttpClient) { }

    consultaDadosPessoais(cpf: string): Observable<DadosPessoais> {
        return this.http.get<DadosPessoais>(`${ this.requisicaoUrl }/dados/${ cpf }`).pipe(map(result => {
            return result
        }))
    }
  
}