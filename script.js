const container = document.querySelector('#container');

const para = document.createElement('p');
para.style.color = '#F00';
para.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.style.color = '#00F';
h3.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');
div.style.border = '1px solid #000';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

container.appendChild(para);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);