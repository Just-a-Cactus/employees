;
(function () {
    "use strict";
    const div = document.querySelector('#employeeList');

    const xhr = new XMLHttpRequest();
    let DB = [];

    xhr.open('GET', '../data/employees.json');
    xhr.send();
    xhr.onload = function () {
        DB = JSON.parse(this.responseText);
        let ul = document.createElement('ul');
        ul.classList.add('bulleted');

        const tmpl = document.querySelector('#li-tmpl').innerHTML;
        let temp = "";

        // var 1
        DB.forEach(e => {
            temp = tmpl.replace(/{{name}}/ig, e.name);
            if (e.inoffice === true)
                ul.innerHTML += temp.replace(/{{class}}/ig, 'in');
            else if (e.inoffice === false)
                ul.innerHTML += temp.replace(/{{class}}/ig, 'out');
        });

        // var 2
        DB.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e.name;
            if (e.inoffice === true)
                li.classList.add('in');
            else if (e.inoffice === false)
                li.classList.add('out');
            ul.appendChild(li);
        });

        div.appendChild(ul);
        console.log(DB);
    }
})();