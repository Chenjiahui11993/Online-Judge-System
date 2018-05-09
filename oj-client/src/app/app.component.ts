import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName='';
  isdisabled:string='true';
  createTag=false;
  userNames=["abc","efg"];
  checkClick()
  {  
    
    if(this.userName===""){
      console.log("12345");
     this.isdisabled="false";
      return this.isdisabled;
      
    }
  }
 onclickBtn(){
  console.log("dianjile");
  this.userNames.push(this.userName);
  this.createTag=true;
 }
  onUpdate(event:Event)
{
  this.userName=(<HTMLInputElement>event.target).value;
  console.log("123");  
}
getColor()
{
  return 'green';
}

}
