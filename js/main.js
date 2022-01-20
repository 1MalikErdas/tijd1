 const time = prompt("Hoe laat is het?");

if(time >= 6 && time <= 12){
    document.body.innerHTML += `Het is ochtend ${time} uur.`;
}
else if(time >=12 && time < 18){
    document.body.innerHTML += `Het is middag ${time} uur.`;
}
else if(time >= 18 && time < 24){
    document.body.innerHTML += `Het is avond ${time} uur.`;
}
else if(time < 6 && time === 24){
    document.body.innerHTML += `Het is nacht ${time} uur.`;
}
else{
    document.body.innerHTML += `Vul alsjeblieft een de geldige uur in. ${time}`;
}
