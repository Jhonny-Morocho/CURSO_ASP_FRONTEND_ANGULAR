
import { HttpClient, HttpParams } from '@angular/common/http';
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


  public obtenerTodos(pagina:number,cantidadElemosMostar:number):Observable<any>{
    let params:HttpParams=new HttpParams();
    params= params.append("pagina",pagina.toString()); 
    //params=params.append("cantidadTotalRegistros",cantidadElemosMostar.toString()); 
    params=params.append("recordPorPagina",cantidadElemosMostar.toString());
    return this.http.get<generoDTO[]>(this.apiUrl,{observe:'response',params} );
  }
  public crearGenero(genero:crearGeneroDTO):Observable<generoDTO[]>{
    return this.http.post<generoDTO[]>(this.apiUrl,genero);
  }

  public obtenerPorId(id:number):Observable<generoDTO>{
    return this.http.get<generoDTO>(`${this.apiUrl}/${id}`);
  }
  public editar(genero:generoDTO, id:number):Observable<generoDTO>{
    return this.http.put<generoDTO>(`${this.apiUrl}/${id}`,genero);
  }
  public borrar(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
