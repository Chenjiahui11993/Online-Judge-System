import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Problem} from '../../Model/Problem-model';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
   problem:Problem;
  constructor(private dataService: DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.problem=this.dataService.getProblem2(+params['id']);
      this.dataService.getProblem2(+params['id'])
      .then(problem => this.problem = problem)
      .catch(err => this.problem = err);
      
    });
  }

}
