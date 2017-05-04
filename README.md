# static_files

### Introduction

In web development, static files are unchanging resources such as images, html, css, or client-side scripts. 

Frequently, these files are served by existing static file servers such as [**nginx**](https://www.nginx.com/resources/admin-guide/serving-static-content/)

We will be building some of the functionality from nginx's static content server using Node.js and Express.


TL;DR : file-serving, dynamic routing, separation of front-end and back-end development. 


### Specifications

##### Summary

Develop a server which can respond to GET requests for resources by their filename i.e. visiting localhost:8080/public/1.png in a browser will display the 1.png located in this repository's public folder. 

##### Routing

Routes need to be dynamic to be able to accomplish this goal. Only a single route will need to be defined in index.js to accomplish this goal. 

##### Files

The relevant filenames captured from the route will need to be read from the filesystem and sent as the response to the requesting client. 

[Express File sending](http://expressjs.com/en/4x/api.html#res.sendFile)

##### Directory View

Folders will need to be represented through UI to inform users which files are available in the current directory. 

If the current directory has a parent directory, the parent directory link should be available as well using an open folder icon.

Clicking files will simply display the file. Clicking on folders will allow users to browse the selected directory. 

##### Server-side Rendering

The easiest way to generate the Directory View is using server-side templating. We will need to use EJS.


##### Dependencies

[File System](https://nodejs.org/api/fs.html)  
[Express](http://expressjs.com/)  
[EJS](http://www.embeddedjs.com/)  
[Bootstrap](http://getbootstrap.com/)  
[Git](https://git-scm.com)

