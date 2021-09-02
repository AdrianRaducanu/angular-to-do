import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './interfata';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private url = 'https://6099a1040f5a130017219804.mockapi.io/Todo';
  private endPoint = '/';

  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  postData(taskToPost: Task): Observable<any> {
    return this.http.post(this.url, taskToPost);
  }
  updateData(taskToUpdate: Task): Observable<any> {
    this.endPoint = `/${taskToUpdate.id}`;
    //console.log(this.url + this.endPoint);
    return this.http.put(this.url + this.endPoint, taskToUpdate);
  }
  deleteData(taskToDelete: Task): Observable<any> {
    this.endPoint = `/${taskToDelete.id}`;
    return this.http.delete(this.url + this.endPoint);
  }
}
