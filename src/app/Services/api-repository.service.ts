import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRepositoryService<T> {
  BASEURL: string = 'https://localhost:7169/api/';
  constructor(private httpClient: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An client side error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAll(endPoint: string): Observable<T[]> {
    return this.httpClient.get<T[]>(this.BASEURL + endPoint + '?size=30').pipe(
      retry(2),
      catchError((err) => this.handleError(err))
    );
  }
  getById(endPoint: string, id: number): Observable<T> {
    return this.httpClient.get<T>(this.BASEURL + endPoint + '/' + id).pipe(
      retry(2),
      catchError((err) => this.handleError(err))
    );
  }
  add(endPoint: string, body: T) {
    return this.httpClient.post<T>(this.BASEURL + endPoint, body).pipe(
      retry(2),
      catchError((err) => this.handleError(err))
    );
  }
}
