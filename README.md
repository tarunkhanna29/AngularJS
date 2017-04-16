<p># AngularJS</p>
<p>2 ways to run below project:-</p>
<p>Run json server as :-</p>
<p>json-server --watch db.json -p 4000</p>
<p>There is db.json that is providing all the data in json format. </p>
<p>Go to browser and enter:-</p>
<p>localhost:4000</p>
<p>You will see the application running. This application runs from public folder available in json-server.</p>
<p>Allow json-server to keep running on port 4000 as shown above.</p>
<p>Go to confusion folder and run:-</p>
<p>gulp watch</p>
<p>This will run the application at port 3000. The application is trying to read the data from port 4000. So, json-server should keep running.</p>
<p>Go to browser and enter:-</p>
<p>localhost:3000</p>
