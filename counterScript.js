
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
myeloid = (blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + basophil + eosinophil + monocyte);
total = (blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + nrbc + lymphocyte + basophil + monocyte + eosinophil + plasmacell);

function beep() {
    var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

function resetPage() {
    if (confirm("Are you sure you want to reset the counter?")) {
        window.location.reload();
    }
}

function updateTable() {

    myeloid = (blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + basophil + eosinophil + monocyte);
    total = (blast + promyelocyte + myelocyte + metamyelocyte + neutrophil + nrbc + lymphocyte + basophil + monocyte + eosinophil + plasmacell);

    // Calculation of the percentages (P)
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

    document.getElementById('numCellCounted').innerHTML = total;
    document.getElementById('totalP').innerHTML = total;
    document.getElementById('totalPB').innerHTML = total;

    document.getElementById('blastP').innerHTML = blastP;
    document.getElementById('blast').innerHTML = blast;

    document.getElementById('promyelocyteP').innerHTML = promyelocyteP;
    document.getElementById('promyelocyte').innerHTML = promyelocyte;

    document.getElementById('myelocyteP').innerHTML = myelocyteP;
    document.getElementById('myelocyte').innerHTML = myelocyte;

    document.getElementById('metamyelocyteP').innerHTML = metamyelocyteP;
    document.getElementById('metamyelocyte').innerHTML = metamyelocyte;
    
    document.getElementById('neutrophilP').innerHTML = neutrophilP;
    document.getElementById('neutrophilPB').innerHTML = neutrophilP;
    document.getElementById('neutrophil').innerHTML = neutrophil;

    document.getElementById('nrbcP').innerHTML = nrbcP;
    document.getElementById('nrbc').innerHTML = nrbc;
    
    document.getElementById('lymphocyteP').innerHTML = lymphocyteP;
    document.getElementById('lymphocytePB').innerHTML = lymphocyteP;
    document.getElementById('lymphocyte').innerHTML = lymphocyte;

    document.getElementById('basophilP').innerHTML = basophilP;
    document.getElementById('basophilPB').innerHTML = basophilP;
    document.getElementById('basophil').innerHTML = basophil;
    
    document.getElementById('monocyteP').innerHTML = monocyteP;
    document.getElementById('monocytePB').innerHTML = monocyteP;
    document.getElementById('monocyte').innerHTML = monocyte;        
    
    document.getElementById('eosinophilP').innerHTML = eosinophilP;
    document.getElementById('eosinophilPB').innerHTML = eosinophilP;
    document.getElementById('eosinophil').innerHTML = eosinophil;

    document.getElementById('plasmacellP').innerHTML = plasmacellP;
    document.getElementById('plasmacell').innerHTML = plasmacell;

    if (((myeloid==0) && (nrbc!=0)) || ((myeloid/nrbc)<0.1)) {
        document.getElementById('MERatio').innerHTML = "  <0.1:1";
    } else if (((myeloid!=0) && (nrbc==0)) || ((myeloid/nrbc)>15)) {
        document.getElementById('MERatio').innerHTML = "  >15:1";
    } else {
        document.getElementById('MERatio').innerHTML = "  "+((myeloid/nrbc)).toFixed(1)+":1";
    }

    if (blastP>0) {
        document.getElementById('blastA').innerHTML = blastP + "% blasts, ";
    }

    if (promyelocyteP>0) {
        document.getElementById('promyelocytePB').innerHTML = promyelocyteP + "% promyelocytes, ";
    }

    if (myelocyteP>0) {
        document.getElementById('myelocytePB').innerHTML = myelocyteP + "% myelocytes, ";
    }

    if (metamyelocyteP>0) {
        document.getElementById('metamyelocytePB').innerHTML = metamyelocyteP + "% metamyelocytes, ";
    }

    if (plasmacellP>0) {
        document.getElementById('plasmacellPB').innerHTML = plasmacellP + "% plasma cells, ";
    }
    
    var numberToCount = document.getElementById("numCells").value;
    if (total == numberToCount) {
        // load the chime
        beep();
        setTimeout(function() {    
            alert ("Congratulations! You counted "+numberToCount+" cells!");
        },100)
    }
}

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
        updateTable();
    }

    if ((chCode == 56)||(chCode == 115)) {
        promyelocyte +=1
        total += 1
        updateTable();
    }

    if ((chCode == 57)||(chCode == 100)) {
        myelocyte +=1
        total += 1
        updateTable();
    }

    if ((chCode == 54)||(chCode == 102)) {
        metamyelocyte +=1
        total += 1
        updateTable();
    }

    if ((chCode == 51)||(chCode == 103)) {
        neutrophil +=1
        total += 1
        updateTable();
    }

    if ((chCode == 45)||(chCode == 43)||(chCode == 114)) {
        nrbc +=1
        total += 1
        updateTable();
    }

    if ((chCode == 53)||(chCode == 122)) {
        lymphocyte +=1
        total += 1
        updateTable();
    }

    if ((chCode == 48)||(chCode == 99)) {
        basophil +=1
        total += 1
        updateTable();
    }

    if ((chCode == 50)||(chCode == 118)) {
        monocyte +=1
        total += 1
        updateTable();
    }

    if ((chCode == 49)||(chCode == 120)) {
        eosinophil +=1
        total += 1
        updateTable();
    }

    if ((chCode == 52)||(chCode == 116)) {
        plasmacell +=1
        total += 1
        updateTable();
    }
}

/*
****** Code for the BUTTONS *******
*** start from the top rown and goes down ****
*/
function blastUP() {
    blast +=1
    total += 1
    updateTable();
}

function blastDOWN() {
    if (blast == 0) {
        return;
    }

    blast -=1
    total -= 1
    updateTable();
}

function proUP() {
    promyelocyte +=1
    total += 1
    updateTable();
}

function proDOWN() {
    if (promyelocyte == 0) {
        return;
    }

    promyelocyte -=1
    total -= 1
    updateTable()
}

function myeloUP() {
    myelocyte +=1
    total += 1
    updateTable()
}

function myeloDOWN() {
    if (myelocyte == 0) {
        return;
    }

    myelocyte -=1
    total -= 1
    updateTable()
}

function metaUP() {
    metamyelocyte +=1
    total += 1
    updateTable()
}

function metaDOWN() {
    if (metamyelocyte == 0) {
        return;
    }

    metamyelocyte -=1
    total -= 1
    updateTable()
}

function neutUP() {
    neutrophil +=1
    total += 1
    updateTable()
}

function neutDOWN() {
    if (neutrophil == 0) {
        return;
    }

    neutrophil -=1
    total -= 1
    updateTable()
}

function nrbcUP() {
    nrbc +=1
    total += 1
    updateTable()
}

function nrbcDOWN() {
    if (nrbc == 0) {
        return;
    }

    nrbc -=1
    total -= 1
    updateTable()
}

function lymphUP() {
    lymphocyte +=1
    total += 1
    updateTable()
}

function lymphDOWN() {
    if (lymphocyte == 0) {
        return;
    }

    lymphocyte -=1
    total -= 1
    updateTable()
}

function basoUP() {
    basophil +=1
    total += 1
    updateTable()
}

function basoDOWN() {
    if (basophil == 0) {
        return;
    }

    basophil -=1
    total -= 1
    updateTable()
}

function monoUP() {
    monocyte +=1
    total += 1
    updateTable()
}

function monoDOWN() {
    if (monocyte == 0) {
        return;
    }

    monocyte -=1
    total -= 1
    updateTable();
}

function eosUP() {
    eosinophil +=1
    total += 1
    updateTable()
}

function eosDOWN() {
    if (eosinophil == 0) {
        return;
    }

    eosinophil -=1
    total -= 1
    updateTable()
}

function plasmaUP() {
    plasmacell +=1
    total += 1
    updateTable()
}

function plasmaDOWN() {
    if (plasmacell == 0) {
        return;
    }

    plasmacell -=1
    total -= 1
    updateTable()
}