# Online-Judge-System --Now the system are merged into www.wpilife.org/coding ! Please try it!
Collaborative Online Judge System (COJ) is a full-stack system supporting collaborative code editing, compiling, execution and result judgement. 
Frontend - client: Angular.js, Socket.io
Frontend - server: Node.js, Socket.io, Redis, MongoDB, Nginx
Backend (executor): Nginx, Flask, Docker
Major Use Cases:
1.	User can use interactive code editor to edit code. Supported languages are Java, C++ and Python. In addition, we need to keep the capacity for new languages. 
2.	Multiple users can edit the same piece of code simultaneously. Each user’s change can be seen and applied to every other user’s code immediately. 
3.	User can compile the code by clicking ‘compile’ button. The compile result will be displayed to user.
4.	User can run the code by clicking ‘run’ button. The execution result will be displayed to user.
5.	User can browse pre-stored coding problem list.
6.	User can get details of a specific coding problem by clicking the problem in the list.
7.	User can submit the code through ‘submit’ button to submit the code to solve the chosen question. The result, including compiling, correctness and running time, will be displayed to user. 
8.	User’s submissions will be recorded for reference. 
9.	User can check his progress / statistics for questions.
Detailed Design:
We are using socket.io as the communication protocol between client and server. The reasons are:
1.  Client-server communication is heavy;
2.  Full-duplex asynchronous messaging is prefered;
3.  WebSockets pass through most firewalls without any reconfiguration.
Client-side Editor:
Here we have two options to choose an editor for browser: ACE and CodeMirror. They are both Javascript-based editor for browser and support source code editing. They both support multiple languages, color themes, programing APIs for advanced usage. (Complete feature comparison can be found here.)
Programing API is the top-1 feature we should consider. We need to dynamically get and change the status of the editor. These include getting the change of the content, applying the change to the current content, and so on. Both ACE and CodeMirror expose a good set of APIs.

We chose ACE as it has been proven to be a stable editor by adopting by Cloud9 IDE. It is easier to get help from community considering the number of users. 
Executor Server:
We are going to use Docker container to execute user-submitted code on server. In order not to slow down the frontend server (Node.js server), we should deploy Docker container on backend server and make it accept execution requests coming from frontend server.
Docker:
With Docker Hub, we are able to pre-create a container image with all necessary environment & tools ready, then use it on all execution instances. This approach needs one-time image download and initialization every time it executes code. Considering the fast initialization and loose time constraints, it is OK to accept the initialization time.


