document.getElementById('login').disabled = true ;    

document.getElementById('username').onkeyup = function(){
    if(document.getElementById('username').value.length > 0){
        document.getElementById('login').disabled = false ;    
    }
    else{
        document.getElementById('login').disabled = true ;    
    }
}

document.getElementById('login').onclick = function() {
    const val = document.getElementById('username').value;
    document.getElementById('mtitle').innerHTML = `Welcome ${val} !`;
    document.querySelector('#username').value = '';
    document.getElementById('login').disabled = true ;    
};