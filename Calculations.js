console.log('fuck');
var pops = 0;
//            0  1  2  3  4  5  6  7  8  9  10 11 12  13  14  15  16 17  18  19 20  21  22  23 24  25  26  27  28  29  30  31  32 33  34   35  36   37   38   39  40   41  42   43   44   45  46   47   48   49   50   51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
var normal = [0,20,35,35,71,59,57,75,92,90,204,78,80,169,145,151,152,48,240,141,66,230,176,154,43,210,207,535,138,260,207,406,545,72,778,1015,760,1202,1157,1620,616,2040,517,1198,1150,2289,684,1598,2752,4771,3540,,,,,,,,]
var ABR    = [0]

CreateButtons();
function CreateButtons(){
    for(let count = 1; count < 101; count++){
        let btn = document.createElement('button');
        btn.innerHTML = count;
        btn.id = "button" + count;
        btn.value = count;
        btn.onclick = function() {
            pops += normal[count];
            console.log(pops)
        };
        document.getElementById('container').appendChild(btn);
    }
}

// an array for each type of gamemode (normal, ABR, fortified) with arr.length to pick the right one 

// RBE per bloon: red=1 - blue=2 - green=3 - yellow=4 - pink=5 - black/white/purple=11 - zebra/lead=23 - rainbow=47 - ceramic=95 - MOAB=616 - F>MOAB=856 - BFB=3,214 - F>BFB=4,824
// ZOMG=16,656 - F>ZOMG=27,296 - DDT=816 - F>DDT=1256 - BAD=55,760 - F>BAD=98,360