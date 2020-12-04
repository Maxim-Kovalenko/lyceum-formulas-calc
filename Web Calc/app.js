let buttons = document.querySelectorAll('button')
let h1 = document.querySelector('#stand_res')
h1.innerHTML= '0'
let znak = false
function addValue(element){
    if(element.value==='C'){h1.innerHTML='0'}else if(element.value==='='){h1.innerHTML=eval(h1.innerHTML)}
    else if(h1.innerHTML==='0'){h1.innerHTML = element.value}
    else if(element.value==='-'||element.value==='+'||element.value==='/'||element.value==='*'){
        if(znak===false){h1.innerHTML=h1.innerHTML+element.value;znak=true;}
    }
    else{h1.innerHTML=h1.innerHTML+element.value;znak=false;}
}
buttons[0].addEventListener('click', function(){addValue(buttons[0])})
buttons[1].addEventListener('click', function(){addValue(buttons[1])})
buttons[2].addEventListener('click', function(){addValue(buttons[2])})
buttons[3].addEventListener('click', function(){addValue(buttons[3])})
buttons[4].addEventListener('click', function(){addValue(buttons[4])})
buttons[5].addEventListener('click', function(){addValue(buttons[5])})
buttons[6].addEventListener('click', function(){addValue(buttons[6])})
buttons[7].addEventListener('click', function(){addValue(buttons[7])})
buttons[8].addEventListener('click', function(){addValue(buttons[8])})
buttons[9].addEventListener('click', function(){addValue(buttons[9])})
buttons[10].addEventListener('click', function(){addValue(buttons[10])})
buttons[11].addEventListener('click', function(){addValue(buttons[11])})
buttons[12].addEventListener('click', function(){addValue(buttons[12])})
buttons[13].addEventListener('click', function(){addValue(buttons[13])})
buttons[14].addEventListener('click', function(){addValue(buttons[14])})
buttons[15].addEventListener('click', function(){addValue(buttons[15])})