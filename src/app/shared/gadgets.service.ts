import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Gadgets } from './gadgets';
import { Observable,throwError } from 'rxjs';
import { retry,catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

  apiUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers:new HttpHeaders({
      'content-Type':'application/json',
    }),
  };

  getGadgets():Observable <Gadgets>  {
    return this.http.get<Gadgets>(this.apiUrl + '/gadgets')
      .pipe(retry(1),catchError(this.handleError));
  }

  getGadget(id:any):Observable <Gadgets>  {
    console.log(id);
    return this.http.get<Gadgets>(this.apiUrl + '/gadgets/' +id)
      .pipe(retry(1),catchError(this.handleError));
  }

  createGadgets(gadget:any):Observable <Gadgets>{
    return this.http.post<Gadgets>(
      this.apiUrl+'/gadgets',JSON.stringify(gadget),this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }

  deleteGadgets(id:any) {
    {
      return this.http.delete<Gadgets>(this.apiUrl+'/gadgets/' + id,this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
    }
  }

  updateGadgets( id:any,gadget:any ):Observable<Gadgets>{
    return this.http.put<Gadgets>(
      this.apiUrl+'/gadgets/'+id,JSON.stringify(gadget),this.httpOptions
    )
    .pipe(retry(1),catchError(this.handleError));
  }

  handleError(error:any)  {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage=error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage:${error.message}`
    }
    window.alert(errorMessage);
    return throwError(()=>{
      return errorMessage;
    })
  }
}
