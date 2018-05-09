import { Component, OnInit, OnDestroy } from '@angular/core';
import {Problem} from'../../Model/Problem-model';
import {PROBLEMS} from'../../mock-problem';
import {Subscription} from 'rxjs/Subscription';
import{DataService} from '../../services/data.service';
// this cannot be seen by the view(html)


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
// model part
export class ProblemListComponent implements OnInit, OnDestroy {
   problems: Problem[];
   subscriptionProblem: Subscription;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProblems();
  }
  ngOnDestroy() {
    this.subscriptionProblem.unsubscribe();
  }
   getProblems():void{
     this.subscriptionProblem = this.dataService.getProblems()
     .subscribe(problems => this.problems = problems);
   }
}
