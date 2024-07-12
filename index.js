// remove the main element
const currentMain = document.getElementById('main');
if (currentMain){
currentMain.remove();
};

//adding data to h1
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Anne Wangui is the champion';

document.body.append(newHeader);
