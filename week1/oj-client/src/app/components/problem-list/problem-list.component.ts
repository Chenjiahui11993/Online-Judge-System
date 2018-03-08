import { Component, OnInit } from '@angular/core';
import {Problem} from'../../Model/Problem-model';
import{PROBLEMS} from'../../mock-problem';
import{DataService} from '../../services/data.service';
// this cannot be seen by the view(html)


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
// model part
export class ProblemListComponent implements OnInit {
   problems: Problem[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProblems();
  }
   getProblems():void{
     this.problems=this.dataService.getProblems();
   }
}
