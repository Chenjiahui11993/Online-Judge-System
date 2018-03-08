import { Injectable } from '@angular/core';
declare const io: any;
@Injectable()
export class CollaborationService {

collaborationSocket: any;
  constructor() { }
init(editor: any, sessionId: string): void {

  this.collaborationSocket = io(window.location.origin, {query: 'sessionId =' + sessionId});
  //this.collaborationSocket.on('message', (message) => {
 //  console.log('message receive from the server' + message);
 // });
 this.collaborationSocket.on('change', (delta: string) => {
   delta = JSON.parse(delta);
   editor.lastAppliedChanged = delta;
   editor.getSession().getDocument().applyDeltas([delta]);
 });
}
 change(delta: string): void{
   this.collaborationSocket.emit('change', delta);

 }
 restoreBuffer(): void{
   this.collaborationSocket.emit('restoreBuffer');
 }
}
