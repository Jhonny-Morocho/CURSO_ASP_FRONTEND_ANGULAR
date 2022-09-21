
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generoDTO } from './genero';
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
}
