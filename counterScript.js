var blast, myelocyte, metamyelocyte, promyelocyte;
var neutrophil, nrbc, lymphocyte, basophil;
var monocyte, eosinophil, plasmacell;
var total;

blast = 0;
promyelocyte = 0;
myelocyte = 0;
metamyelocyte = 0;
neutrophil = 0;
nrbc = 0;
lymphocyte = 0;
basophil = 0;
monocyte = 0;
eosinophil = 0;
plasmacell = 0;
myeloid = blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + basophil + eosinophil + monocyte;
total = blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + nrbc + lymphocyte + basophil + monocyte + eosinophil + plasmacell;

var numberToCount = document.getElementById("numCells").value;

function updateTable() {
    var numberToCount = document.getElementById("numCells").value;
    total = blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + nrbc + lymphocyte + basophil + monocyte + eosinophil + plasmacell;

    blastP = ((blast/total)*100).toFixed(1);
    promyelocyteP = ((promyelocyte/total)*100).toFixed(1);
    myelocyteP = ((myelocyte/total)*100).toFixed(1);
    metamyelocyteP = ((metamyelocyte/total)*100).toFixed(1);
    neutrophilP = ((neutrophil/total)*100).toFixed(1);
    nrbcP = ((nrbc/total)*100).toFixed(1);
    lymphocyteP = ((lymphocyte/total)*100).toFixed(1);
    basophilP = ((basophil/total)*100).toFixed(1);
    monocyteP = ((monocyte/total)*100).toFixed(1);
    eosinophilP = ((eosinophil/total)*100).toFixed(1);
    plasmacellP = ((plasmacell/total)*100).toFixed(1);

    if (total == 0) {
        // start up the counter values
        document.getElementById('totalP').innerHTML = 0;
        document.getElementById('numCellCounted').innerHTML = 0;

        document.getElementById('blast').innerHTML = 0;
        document.getElementById('blastP').innerHTML = 0;

        document.getElementById('promyelocyteP').innerHTML = 0;
        document.getElementById('promyelocyte').innerHTML = 0;

        document.getElementById('myelocyte').innerHTML = 0;
        document.getElementById('myelocyteP').innerHTML = 0;

        document.getElementById('metamyelocyte').innerHTML = 0;
        document.getElementById('metamyelocyteP').innerHTML = 0;

        document.getElementById('neutrophilP').innerHTML = 0;
        document.getElementById('neutrophil').innerHTML = 0;

        document.getElementById('nrbcP').innerHTML = 0;
        document.getElementById('nrbc').innerHTML = 0;
        
        document.getElementById('lymphocyteP').innerHTML = 0;
        document.getElementById('lymphocyte').innerHTML = 0;

        document.getElementById('basophilP').innerHTML = 0;
        document.getElementById('basophil').innerHTML = 0;
        
        document.getElementById('monocyteP').innerHTML = 0;
        document.getElementById('monocyte').innerHTML = 0;        
        
        document.getElementById('eosinophilP').innerHTML = 0;
        document.getElementById('eosinophil').innerHTML = 0;

        document.getElementById('plasmacellP').innerHTML = 0;
        document.getElementById('plasmacell').innerHTML = 0;

        document.getElementById('MERatio').innerHTML = "M/E Ratio:  ";

    } else {

        document.getElementById('numCellCounted').innerHTML = total;
        document.getElementById('totalP').innerHTML = total;

        document.getElementById('blastP').innerHTML = blastP;
        document.getElementById('blast').innerHTML = blast;

        document.getElementById('promyelocyteP').innerHTML = promyelocyteP;
        document.getElementById('promyelocyte').innerHTML = promyelocyte;

        document.getElementById('myelocyteP').innerHTML = myelocyteP;
        document.getElementById('myelocyte').innerHTML = myelocyte;

        document.getElementById('metamyelocyteP').innerHTML = metamyelocyteP;
        document.getElementById('metamyelocyte').innerHTML = metamyelocyte;
        
        document.getElementById('neutrophilP').innerHTML = neutrophilP;
        document.getElementById('neutrophil').innerHTML = neutrophil;

        document.getElementById('nrbcP').innerHTML = nrbcP;
        document.getElementById('nrbc').innerHTML = nrbc;
        
        document.getElementById('lymphocyteP').innerHTML = lymphocyteP;
        document.getElementById('lymphocyte').innerHTML = lymphocyte;

        document.getElementById('basophilP').innerHTML = basophilP;
        document.getElementById('basophil').innerHTML = basophil;
        
        document.getElementById('monocyteP').innerHTML = monocyteP;
        document.getElementById('monocyte').innerHTML = monocyte;        
        
        document.getElementById('eosinophilP').innerHTML = eosinophilP;
        document.getElementById('eosinophil').innerHTML = eosinophil;

        document.getElementById('plasmacellP').innerHTML = plasmacellP;
        document.getElementById('plasmacell').innerHTML = plasmacell;

        myeloid = blast + myelocyte + metamyelocyte + promyelocyte + neutrophil + basophil + eosinophil + monocyte;

        if (((myeloid==0) && (nrbc!=0)) || ((myeloid/nrbc)<0.1)) {
            document.getElementById('MERatio').innerHTML = "M/E Ratio:  <0.1:1";
        } else if (((myeloid!=0) && (nrbc==0)) || ((myeloid/nrbc)>15)) {
            document.getElementById('MERatio').innerHTML = "M/E Ratio:  >15:1";
        } else {
            document.getElementById('MERatio').innerHTML = "M/E Ratio:    "+((myeloid/nrbc)).toFixed(1)+":1";
        }
    }
}

updateTable();

// function to copy the table

// function to copy the table
function selectElementContents(el) {
    let body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
    document.execCommand("Copy");}


function cellCountFunction(event) {
    var numberToCount = document.getElementById("numCells").value;
    var chCode = (event.which || event.code || event.keyCode);
    
    // using the hematogones.com method:
    // 0 = 48, 1 = 49, ... 9 = 57, + = 43, - = 45
    //
    // using the old super cell counter:
    // a (blast) = 97, s (pro) = 115, 

    if ((chCode == 55)||(chCode == 97)) {
        blast +=1
        total += 1
        document.getElementById('blast').innerHTML = blast;
    }

    if ((chCode == 56)||(chCode == 115)) {
        promyelocyte +=1
        total += 1
        document.getElementById('promyelocyte').innerHTML = promyelocyte;
    }

    if ((chCode == 57)||(chCode == 100)) {
        myelocyte +=1
        total += 1
        document.getElementById('myelocyte').innerHTML = myelocyte;
    }

    if ((chCode == 54)||(chCode == 102)) {
        metamyelocyte +=1
        total += 1
        document.getElementById('metamyelocyte').innerHTML = metamyelocyte;
    }

    if ((chCode == 51)||(chCode == 103)) {
        neutrophil +=1
        total += 1
        document.getElementById('neutrophil').innerHTML = neutrophil;
    }

    if ((chCode == 45)||(chCode == 43)||(chCode == 114)) {
        nrbc +=1
        total += 1
        document.getElementById('nrbc').innerHTML = nrbc;
    }

    if ((chCode == 53)||(chCode == 122)) {
        lymphocyte +=1
        total += 1
        document.getElementById('lymphocyte').innerHTML = lymphocyte;
    }

    if ((chCode == 48)||(chCode == 99)) {
        basophil +=1
        total += 1
        document.getElementById('basophil').innerHTML = basophil;
    }

    if ((chCode == 50)||(chCode == 118)) {
        monocyte +=1
        total += 1
        document.getElementById('monocyte').innerHTML = monocyte;
    }

    if ((chCode == 49)||(chCode == 120)) {
        eosinophil +=1
        total += 1
        document.getElementById('eosinophil').innerHTML = eosinophil;
    }

    if ((chCode == 52)||(chCode == 116)) {
        plasmacell +=1
        total += 1
        document.getElementById('plasmacell').innerHTML = plasmacell;
    }

    updateTable();

    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }

    return total;
    
}

/*
****** Code for the BUTTONS *******
*** start from the top rown and goes down ****
*/
function blastUP() {
    blast +=1
    total += 1
    document.getElementById('blast').innerHTML = blast;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function blastDOWN() {
    if (blast == 0) {
        return;
    }

    blast -=1
    total -= 1
    document.getElementById('blast').innerHTML = blast;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function proUP() {
    promyelocyte +=1
    total += 1
    document.getElementById('promyelocyte').innerHTML = promyelocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function proDOWN() {
    if (promyelocyte == 0) {
        return;
    }

    promyelocyte -=1
    total -= 1
    document.getElementById('promyelocyte').innerHTML = promyelocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function myeloUP() {
    myelocyte +=1
    total += 1
    document.getElementById('myelocyte').innerHTML = myelocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function myeloDOWN() {
    if (myelocyte == 0) {
        return;
    }

    myelocyte -=1
    total -= 1
    document.getElementById('myelocte').innerHTML = myelocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function metaUP() {
    metamyelocyte +=1
    total += 1
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function metaDOWN() {
    if (metamyelocyte == 0) {
        return;
    }

    metamyelocyte -=1
    total -= 1
    document.getElementById('metamyelocyte').innerHTML = metamyelocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function neutUP() {
    neutrophil +=1
    total += 1
    document.getElementById('neutrophil').innerHTML = neutrophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function neutDOWN() {
    if (neutrophil == 0) {
        return;
    }

    neutrophil -=1
    total -= 1
    document.getElementById('neutrophil').innerHTML = neutrophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function nrbcUP() {
    nrbc +=1
    total += 1
    document.getElementById('nrbc').innerHTML = nrbc;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function nrbcDOWN() {
    if (nrbc == 0) {
        return;
    }

    nrbc -=1
    total -= 1
    document.getElementById('nrbc').innerHTML = nrbc;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function lymphUP() {
    lymphocyte +=1
    total += 1
    document.getElementById('lymphocyte').innerHTML = lymphocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function lymphDOWN() {
    if (lymphocyte == 0) {
        return;
    }

    lymphocyte -=1
    total -= 1
    document.getElementById('lymphocyte').innerHTML = lymphocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function basoUP() {
    basophil +=1
    total += 1
    document.getElementById('basophil').innerHTML = basophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function basoDOWN() {
    if (basophil == 0) {
        return;
    }

    basophil -=1
    total -= 1
    document.getElementById('basophil').innerHTML = basophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function monoUP() {
    monocyte +=1
    total += 1
    document.getElementById('monocyte').innerHTML = monocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function monoDOWN() {
    if (monocyte == 0) {
        return;
    }

    monocyte -=1
    total -= 1
    document.getElementById('monocyte').innerHTML = monocyte;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function eosUP() {
    eosinophil +=1
    total += 1
    document.getElementById('eosinophil').innerHTML = eosinophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function eosDOWN() {
    if (eosinophil == 0) {
        return;
    }

    eosinophil -=1
    total -= 1
    document.getElementById('eosinophil').innerHTML = eosinophil;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}

function plasmaUP() {
    plasmacell +=1
    total += 1
    document.getElementById('plasmacell').innerHTML = plasmacell;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
    if (total == numberToCount) {
        alert ("Congratulations! You counted "+numberToCount+" cells!");
    }
}

function plasmaDOWN() {
    if (plasmacell == 0) {
        return;
    }

    plasmacell -=1
    total -= 1
    document.getElementById('plasmacell').innerHTML = plasmacell;
    document.getElementById('numCellCounted').innerHTML = total;
    updateTable();
}