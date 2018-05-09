import { Component, OnInit } from '@angular/core';
import {CollaborationService } from'../../services/collaboration.service';
import { ActivatedRoute, Params } from'@angular/router';
import { DataService } from '../../services/data.service';
declare const ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  sessionId: string;
  editor: any;
  languages: string [] = ['Java', 'Python'];
  language: string = 'Java';
  defaultContent = {
     'Java': `public class Example {
      public static void main(String[] args) {
          // Type your Java code here
      }
    }`,
    'Python': `class Solution:
    def example():
        # Write your Python code here`
   };
   output: string = 'bc';
  constructor(private collaboration: CollaborationService, 
             private rouete: ActivatedRoute,
             private dataservice: DataService ) { }

  ngOnInit() {
    this.rouete.params
    .subscribe(params =>{
      this.sessionId = params['id'];
      this.initEditor();
      this.collaboration.restoreBuffer();
    });
  }
  initEditor(): void{
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChanged = null;

    this.editor.on('change', (e) => {
      console.log('editor change?' + JSON.stringify(e));
      if(this.editor.lastAppliedChanged !== e) {
        this.collaboration.change(JSON.stringify(e));
        console.log(2121212);
      }
    });
  }
  resetEditor(): void {
   this.editor.setValue(this.defaultContent[this.language]);
   this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
  }
  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();

  }
 submit(): void {
   console.log('submit');
   const userCodes = this.editor.getValue();
   const data = {
     userCodes: userCodes,
     lang: this.language.toLocaleLowerCase()
   };
   this.dataservice.buildAndRun(data)
   .then( res => this.output = res.text);
 }
}