var conta = [];
var achou = 0;

function addItem(n) {
    if (achou != 0) {
        document.getElementById('visor').value = "";
        achou = 0;
    }
    conta.push(n);
    document.getElementById('visor').value += n;
}

function calcular() {
    var visor = conta.join('');
    var result = eval(visor);
    if (result == "NaN" || result == "undefined") {
        result = "Error";
    }
    document.getElementById('visor').value = result;
    conta = result;
    conta = [];
    achou++;
}

function apagar() {
    conta.pop();
    var visor = conta.join('');
    document.getElementById('visor').value = visor;
}

function underOne() {
    var visor = conta.join('');
    var divid = parseFloat(visor);
    var res = 1 / divid;
    if (res == "NaN" || res == "undefined") {
        res = "Error";
    }
    document.getElementById('visor').value = res;
    conta = [];
    achou++;
}

function callSqrt() {
    var visor = conta.join('');
    var divid = parseFloat(visor);
    var res = Math.sqrt(divid);
    if (res == "NaN" || res == "undefined") {
        res = "Error";
    }
    document.getElementById('visor').value = res;
    conta = [];
    achou++;
}

function callPercent() {
    var indexes = [];
    var num = [], percent = [];
    for (var i = 0; i < conta.length; i++) {
        if (conta[i] == '*') {
            indexes.push(conta[i]);
        }
    }
    if (indexes.length > 1) {
        var errMsg = ["Error"];
        document.getElementById('visor').value = errMsg;
        conta = [];
        achou++;
    }
    else {
        for (var i = 0; i < conta.length; i++) {
            if (conta[i] != '*') {
                num.push(conta[i]);
            }
            else {
                var point = i + 1;
                break;
            }
        }

        for (var i = point; i < conta.length; i++) {
            percent.push(conta[i]);
        }

        var numS = num.join('');
        var numF = parseFloat(numS);
        var percentS = percent.join('');
        var percentF = parseFloat(percentS);

        var res = (numF * percentF) * 0.01;
        if (res == "NaN" || res == "undefined") {
            res = "Error";
        }
        document.getElementById('visor').value = res;
        conta = [];
        num = [];
        percent = [];
        achou++;
    }
}

function inverteSinal() {
    if (conta[0] == '-') {
        conta.shift();
        var visor = conta.join('');
        document.getElementById('visor').value = visor;

    }
    else {
        conta.unshift('-');
        var visor = conta.join('');
        document.getElementById('visor').value = visor;
    }
}

function limpaVisor() {
    document.getElementById('visor').value = "";
    conta = [];
    achou = 0;
}

function arrumaHex() {
    document.getElementById('botaoIgual').setAttribute("onclick", "calculaHex()");
    document.getElementById('msg').innerHTML = "Hexadecimal";

}

function arrumaDec() {
    document.getElementById('botaoIgual').setAttribute("onclick", "calcular()");
    document.getElementById('msg').innerHTML = "Decimal";
}

function arrumaOct() {
    document.getElementById('botaoIgual').setAttribute("onclick", "calculaOct()");
    document.getElementById('msg').innerHTML = "Octal";
}

function arrumaBin() {
    document.getElementById('botaoIgual').setAttribute("onclick", "calculaBin()");
    document.getElementById('msg').innerHTML = "Binario";
}

function calculaHex() {
    var visor = conta.join('');
    var verifAd = visor.replace(/\+/g, " + ");
    var verifSub = verifAd.replace(/\-/g, " - ");
    var verifMult = verifSub.replace(/\*/g, " * ");
    var verifTotal = verifMult.replace(/\//g, " / ");
    var vetorConta = verifTotal.split(" ");
    var vetorDec = [];
    for (var i = 0; i < vetorConta.length; i++) {
        if (vetorConta[i] == '+' || vetorConta[i] == '-' || vetorConta[i] == '*' || vetorConta[i] == '/') {
            vetorDec.push(vetorConta[i]);
            continue;
        }
        var index = parseInt(vetorConta[i], 16);
        vetorDec.push(index);
    }
    var contaDec = vetorDec.join('');
    var resultDec = eval(contaDec);
    var resultHex = resultDec.toString(16);
    if (resultHex == "NaN" || resultHex == "undefined") {
        resultHex = "Error";
    }
    document.getElementById('visor').value = resultHex;
    conta = [];
    achou++;
}

function calculaOct() {
    var visor = conta.join('');
    var verifAd = visor.replace(/\+/g, " + ");
    var verifSub = verifAd.replace(/\-/g, " - ");
    var verifMult = verifSub.replace(/\*/g, " * ");
    var verifTotal = verifMult.replace(/\//g, " / ");
    var vetorConta = verifTotal.split(" ");
    var vetorDec = [];
    for (var i = 0; i < vetorConta.length; i++) {
        if (vetorConta[i] == '+' || vetorConta[i] == '-' || vetorConta[i] == '*' || vetorConta[i] == '/') {
            vetorDec.push(vetorConta[i]);
            continue;
        }
        var index = parseInt(vetorConta[i], 8);
        vetorDec.push(index);
    }
    var contaDec = vetorDec.join('');
    var resultDec = eval(contaDec);
    var resultOct = resultDec.toString(8);
    if (resultOct == "NaN" || resultOct == "undefined") {
        resultOct = "Error";
    }
    document.getElementById('visor').value = resultOct;
    conta = [];
    achou++;
}

function calculaBin() {
    var visor = conta.join('');
    var verifAd = visor.replace(/\+/g, " + ");
    var verifSub = verifAd.replace(/\-/g, " - ");
    var verifMult = verifSub.replace(/\*/g, " * ");
    var verifTotal = verifMult.replace(/\//g, " / ");
    var vetorConta = verifTotal.split(" ");
    var vetorDec = [];
    for (var i = 0; i < vetorConta.length; i++) {
        if (vetorConta[i] == '+' || vetorConta[i] == '-' || vetorConta[i] == '*' || vetorConta[i] == '/') {
            vetorDec.push(vetorConta[i]);
            continue;
        }
        var index = parseInt(vetorConta[i], 2);
        vetorDec.push(index);
    }
    var contaDec = vetorDec.join('');
    var resultDec = eval(contaDec);
    var resultBin = resultDec.toString(2);
    if (resultBin == "NaN" || resultBin == "undefined") {
        resultBin = "Error";
    }
    document.getElementById('visor').value = resultBin;
    conta = [];
    achou++;
}

function chamaAlerta() {
    document.getElementById('changeBox').style.display = "block";
    document.getElementById('changeBox').style.position = "absolute";
}

function showStand() {
    document.getElementById('calcConv').style.display = "none";
    document.getElementById('calcNormal').style.display = "block";
    document.getElementById('changeBox').style.display = "none";
    document.getElementById('visor').value = "";
    conta = [];
}

function showConv() {
    document.getElementById('calcNormal').style.display = "none";
    document.getElementById('calcConv').style.display = "block";
    document.getElementById('changeBox').style.display = "none";
    document.getElementById('visor').value = "";
    conta = [];
}