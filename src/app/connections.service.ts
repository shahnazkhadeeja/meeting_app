import { Injectable } from '@angular/core';
import { Observable, of, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  baseUrl = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead  
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    }),
    
  };

  //Meeting Crud
  createMeeting(data: any): Observable<any> {
    console.log("data recvd", data);

    return this.http.post<any>(`${this.baseUrl}/insert-meeting.php`, data).pipe(
      catchError(this.handleError('createMeeting', []))
    );;


  }
  getMeeting(page:any){
    console.log("reached service");
    return this.http.get<any>(`${this.baseUrl}/meeting-list.php?page=`+page).pipe(
      catchError(this.handleError('getMeeting', []))
    );
  }

  delete(sendObj: any): Observable<any> {
    let send = sendObj
    return this.http.post(`${this.baseUrl}/delete-meeting.php`, send).pipe(
      catchError(this.handleError('delete', []))

    );

  }

  meetingUpdate(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/meeting-update.php`, data).pipe(
      catchError(this.handleError('meetingUpdate', []))
    );;


  }


  callParticipants(){

    return this.http.post(`${this.baseUrl}/viewparticipants.php`, {}).pipe(
      catchError(this.handleError(' callParticipants', []))

    );
  }
  //Task Crud

  taskCreate(data: any): Observable<any> {
    console.log("data recvd", data);

    return this.http.post<any>(`${this.baseUrl}/insert-task.php`, data).pipe(
      catchError(this.handleError('taskCreate', []))
    );;

  }

  getTasks(page:any) {

    return this.http.get<any>(`${this.baseUrl}/task-list.php?page=`+page).pipe(
      catchError(this.handleError('getTasks', []))
    );
  }


  getStatusTasks() {    
    return this.http.post(`${this.baseUrl}/task_status.php`, {}).pipe(
      catchError(this.handleError('getStatusTasks', []))

    );
  }



  deletetask(sendObj: any): Observable<any> {
    let send = sendObj
    return this.http.post(`${this.baseUrl}/delete-task.php`, send).pipe(
      catchError(this.handleError('delete', []))

    );

  }

  updateStatus(sendObj: any): Observable<any> {
    let send = sendObj
    return this.http.post(`${this.baseUrl}/update-status.php`, send).pipe(
      catchError(this.handleError('updateStatus', []))

    );
  }

  taskUpdate(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update-task.php`, data).pipe(
      catchError(this.handleError('taskUpdate', []))
    );;

  }

  slugtoTitle(slug: any) {
    return slug.replace("_", " ");
  }

  updateTaskStatus(send:any):Observable<any>{
    
    return this.http.post(`${this.baseUrl}/update-taskstatus.php`, send).pipe(
      catchError(this.handleError('updateTaskStatus', []))

    );

  }

  //agenda
  createAgenda(data:any):Observable<any>
  {
    console.log("data recvd", data);

    return this.http.post<any>(`${this.baseUrl}/insert-agenda.php`, data).pipe(
      catchError(this.handleError('createAgenda', []))
    );

  }
}
