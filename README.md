<div align="center">
    <h1>Fagfolk Modal Window MVC</h1>
    <h3>
        <a href="https://chrisonoo.github.io/FagfolkModalWindowMVC/">
            Live demo
        </a>
        <span> | </span>
        <a href="https://github.com/chrisonoo/FagfolkModalWindowMVC">
            GitHub
        </a>
    </h3>
    <p>Application supporting the acquisition of new customers</p>
    <p><b>Status:</b> Project completed</p>
        <br>
        <p>Technologies and tools:</p>
    <p>
        <img src="docs/img/html5.svg" width="40" height="40" alt="html"/>
        <img src="docs/img/css3.svg" width="40" height="40" alt="css"/>
        <img src="docs/img/js.svg" width="40" height="40" alt="javascript"/>
        <img src="docs/img/firebase.svg" width="40" height="40" alt="firebase"/>
        <img src="docs/img/angular.svg" width="40" height="40" alt="angular"/>
        <img src="docs/img/git.svg" width="40" height="40" alt="git"/>
        <img src="docs/img/github.svg" width="40" height="40" alt="github"/>
        <img src="docs/img/phpstorm.svg" width="40" height="40" alt="phpstorm"/>
        <img src="docs/img/md.svg" width="40" height="40" alt="markdown"/>
    </p>
</div>
<br>

## About project

The task I embarked on was to develop a module capable of opening in a modal window on any page where its code is inserted.

The paramount challenge lay in creating code that would be 100% unobtrusive for the systems in which the module will be implemented, thereby preventing any undesirable interference between the module and the generated page.

The module is designed to be fully compatible with the rest of the system and interfaces with the Firebase database for user registration and logging of construction project data.


![tests](docs/img/tests.png)

## Test 1 - simple test page

![test1-1](docs/img/test1-1.jpeg)
![test1-2](docs/img/test1-2.jpeg)

## Test 2 - FagFolk.net page

![test2-1](docs/img/test2-1.jpeg)
![test2-2](docs/img/test2-2.jpeg)

## Project structure

<pre>
project/
├── fagfolk.net/
│   ├── index_files/ (page copy, just for test)
│   ├── server/ (files with modal window)
│   └── index.html
├── test-page/
│   ├── css/
│   ├── img/
│   ├── server/ (files with modal window)
│   └── test-page.html
└── index.html (start project)
</pre>

## Project notes

1. Files from the `server` folder are placed on the FagFolk server and downloaded when the page is loaded. After clicking on the banner on the page, the modal window view is generated from the JavaScript file.
2. All HTML and CSS is generated from the JavaScript file.
3. The test page presents the idea of how the entire project works, but does not yet implement all the mechanisms, nor the full design.
4. The full structure of the website is described in the attached document [download documentation](docs/Module-Code-Builder.pptx)

