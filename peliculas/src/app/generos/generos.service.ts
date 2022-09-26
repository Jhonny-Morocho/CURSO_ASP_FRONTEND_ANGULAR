
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { crearGeneroDTO, generoDTO } from './genero';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private apiUrl:string=environment.appURL;
  constructor(private http:HttpClient) { }


  public obtenerTodos():Observable<generoDTO[]>{
    return this.http.get<generoDTO[]>(this.apiUrl);
  }
  public crearGenero(genero:crearGeneroDTO):Observable<generoDTO[]>{
    return this.http.post<generoDTO[]>(this.apiUrl,genero);
  }
}
