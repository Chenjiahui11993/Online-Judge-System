import { Routes, RouterModule } from '@angular/router';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

const routes : Routes=[
    {
      path:'',
      redirectTo:'problems',
      pathMatch:'full'
    },
    {
        path:'problems',
        component:ProblemListComponent
    },
    {
        path:'problems/:id',
        component:ProblemDetailComponent
     },
     {
         path:'**',
         redirectTo:'problems'
     }
];
export const routing = RouterModule.forRoot(routes);