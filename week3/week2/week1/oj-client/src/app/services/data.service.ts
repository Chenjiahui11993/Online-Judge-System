import { Injectable } from '@angular/core';
import { Problem } from '../Model/Problem-model';
//import { PROBLEMS } from '../mock-problem';
import { Observable} from 'rxjs/Rx';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
 // problem: Problem[]=PROBLEMS;
  private _problemSource = new BehaviorSubject<Problem[]>([]);
  constructor(private httpClient: HttpClient) { }

  getProblems():Observable<Problem[]>{
    //return this.problem;
     this.httpClient.get('api/v1/problems')
    .toPromise()
    .then((res:any) => {
      this._problemSource.next(res);
    })
    .catch(this.errorHandler);
    return this._problemSource.asObservable();
  }
  // findProblem(id:number):Problem{
  //  return this.problem.find((problem)=>problem.id===id);
  // }

  getProblem2(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
    .toPromise()
    .then((res: any) => res)
    .catch(this.errorHandler);
  }
  addProblem(problem: Problem) {
  //  problem.id = this.problem.length+1;
  //  this.problem.push(problem);
  //const options = { header:new HttpHeaders({'Content-Type': 'application/json'})};
  
  const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  return this.httpClient.post('api/v1/problems', problem, options)
  .toPromise()
  .then((res: any) => {
    this.getProblems();
    return res;
  })
  .catch(this.errorHandler);

  }

  private errorHandler(error: any): Promise<any> {
      return Promise.reject(error.body || error);

  }
}
