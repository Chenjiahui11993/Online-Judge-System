import { Injectable } from '@angular/core';
import {Problem} from '../Model/Problem-model';
import{PROBLEMS} from '../mock-problem';
@Injectable()
export class DataService {
  problem: Problem[]=PROBLEMS;
  constructor() { }
  getProblems():Problem[]{
    return this.problem;
  }
  findProblem(id:number):Problem{
   return this.problem.find((problem)=>problem.id===id);
  }
  getProblem2(id: number): Problem {
    return this.problem.find( (problem) => problem.id === id);
  }
  addProblem(problem:Problem){
   problem.id = this.problem.length+1;
   this.problem.push(problem);
  }
}
