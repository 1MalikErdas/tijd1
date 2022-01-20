 const time = prompt("Hoe laat is het?");

if(time >= 6 && time <= 12){
    document.body.innerHTML += `Het is ochtend. ${time}`;
}
else if(time >=12 && time < 18){
    document.body.innerHTML += `Het is middag. ${time}`;
}
else if(time >= 18 && time < 24){
    document.body.innerHTML += `Het is avond. ${time}`;
}
else if(time < 6 && time === 24){
    document.body.innerHTML += `Het is nacht. ${time}`;
}
else{
    document.body.innerHTML += `Vul alsjeblieft een de geldige uur in. ${time}`;
}
