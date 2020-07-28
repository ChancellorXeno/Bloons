console.log('fuck');
var pop_total = 0;

CreateButtons();

function CreateButtons(){
    for(count = 1; count < 101; count++){
        var btn = document.createElement("BUTTON");
        btn.innerHTML = count;
        btn.id = 'btn'+count;
        document.getElementById('container').appendChild(btn);
        pop_total+count;
    }
}
console.log(pop_total);