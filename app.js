document.querySelector('#login').onclick = function(){
    const name = document.querySelector('#name').value;
    document.querySelector('#mtitle').innerHTML = ('Welcome {$.name}')
}