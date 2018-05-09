import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{DataService} from'./services/data.service';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { FormsModule } from '@angular/forms';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { EditorComponent } from './components/editor/editor.component';
import {CollaborationService} from './services/collaboration.service';
  import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [DataService,
  CollaborationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
