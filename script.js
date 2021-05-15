function calcular() {
    var res = document.getElementById('txtres');
    var p = document.getElementById('p');
    var soma = document.getElementById('soma');
    var sub = document.getElementById('sub');
    var mult = document.getElementById('mult');
    var divi = document.getElementById('divi');
    var igual = document.getElementById('igual');
    var back = document.getElementById('back');
    var n0 = document.getElementById('n0');
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var n3 = document.getElementById('n3');
    var n4 = document.getElementById('n4');
    var n5 = document.getElementById('n5');
    var n6 = document.getElementById('n6');
    var n7 = document.getElementById('n7');
    var n8 = document.getElementById('n8');
    var n9 = document.getElementById('n9');
    //Verificar a tecla enter foi pressionada
    const inputTecla = document.getElementById('txtres');
    inputTecla.addEventListener('keydown', function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
            case 13:  //caso a tecla enter for pressionada
                res.style.font = 'normal 35pt Comic Sans MS';
                var n = Number(eval(res.value)); //EVAL: o JS entende os numeros e operações dentro da string 
                p.innerText = `${n.toFixed(1)}`;
                igual.style.background = '#cecece';
                setTimeout(() => { igual.style.background = 'rgb(39, 39, 39)' }, 150);
                break;
            case 08: //caso a tecla back for pressionada
                back.style.background = '#cecece';
                setTimeout(() => { back.style.background = 'rgb(39, 39, 39)' }, 150);
                break;
            default:
                break;
        }
    });

    //Verificar o caracter digitado
    function keyPressed(evt) {
        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
        return String.fromCharCode(key);
    };

    document.onkeypress = function (evt) {
        var str = keyPressed(evt);
        if (str == '+'){
            soma.style.background = '#cecece';
            setTimeout(() => { soma.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '-') {
            sub.style.background = '#cecece';
            setTimeout(() => { sub.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '*') {
            mult.style.background = '#cecece';
            setTimeout(() => { mult.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '/') {
            divi.style.background = '#cecece';
            setTimeout(() => { divi.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '=') {
            igual.style.background = '#cecece';
            setTimeout(() => { igual.style.background = 'rgb(39, 39, 39)' }, 150);
        }else if (str == '0') {
            n0.style.background = '#cecece';
            setTimeout(() => { n0.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '1') {
            n1.style.background = '#cecece';
            setTimeout(() => { n1.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '2') {
            n2.style.background = '#cecece';
            setTimeout(() => { n2.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '3') {
            n3.style.background = '#cecece';
            setTimeout(() => { n3.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '4') {
            n4.style.background = '#cecece';
            setTimeout(() => { n4.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '5') {
            n5.style.background = '#cecece';
            setTimeout(() => { n5.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '6') {
            n6.style.background = '#cecece';
            setTimeout(() => { n6.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '7') {
            n7.style.background = '#cecece';
            setTimeout(() => { n7.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '8') {
            n8.style.background = '#cecece';
            setTimeout(() => { n8.style.background = 'rgb(39, 39, 39)' }, 150);
        } else if (str == '9') {
            n9.style.background = '#cecece';
            setTimeout(() => { n9.style.background = 'rgb(39, 39, 39)' }, 150);
        };
    };

    //Verificar click de mouse no botão
    soma.addEventListener('click', clicarSoma);
    sub.addEventListener('click', clicarSub);
    mult.addEventListener('click', clicarMult);
    divi.addEventListener('click', clicarDivi);
    igual.addEventListener('click', clicarIgual);
    back.addEventListener('click', clicarBack);
    n0.addEventListener('click', clicarn0);
    n1.addEventListener('click', clicarn1);
    n2.addEventListener('click', clicarn2);
    n3.addEventListener('click', clicarn3);
    n4.addEventListener('click', clicarn4);
    n5.addEventListener('click', clicarn5);
    n6.addEventListener('click', clicarn6);
    n7.addEventListener('click', clicarn7);
    n8.addEventListener('click', clicarn8);
    n9.addEventListener('click', clicarn9);

    function clicarSoma() {
        soma.style.background = '#cecece';
        setTimeout(() => { soma.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
            res.value += '+';
        };
    };
    function clicarSub() {
        sub.style.background = '#cecece';
        setTimeout(() => { sub.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '-';
        };
    };
    function clicarMult() {
        mult.style.background = '#cecece';
        setTimeout(() => { mult.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12 ) {
        res.value += '*';
        };
    };
    function clicarDivi() {
        divi.style.background = '#cecece';
        setTimeout(() => { divi.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '/';
        };
    };
    function clicarIgual() {
        var n = Number(eval(res.value));
        p.innerText = `${n.toFixed(1)}`;
        igual.style.background = '#cecece';
        setTimeout(() => { igual.style.background = 'rgb(39, 39, 39)' }, 150);
    };
    function clicarn0() {
        n0.style.background = '#cecece';
        setTimeout(() => { n0.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '0';
        };
    };
    function clicarn1() {
        n1.style.background = '#cecece';
        setTimeout(() => { n1.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '1';
        };
    };
    function clicarn2() {
        n2.style.background = '#cecece';
        setTimeout(() => { n2.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '2';
        };
    };
    function clicarn3() {
        n3.style.background = '#cecece';
        setTimeout(() => { n3.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '3';
        };
    };
    function clicarn4() {
        n4.style.background = '#cecece';
        setTimeout(() => { n4.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '4';
        };
    };
    function clicarn5() {
        n5.style.background = '#cecece';
        setTimeout(() => { n5.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '5';
        };
    };
    function clicarn6() {
        n6.style.background = '#cecece';
        setTimeout(() => { n6.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '6';
        };
    };
    function clicarn7() {
        n7.style.background = '#cecece';
        setTimeout(() => { n7.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '7';
        };
    };
    function clicarn8() {
        n8.style.background = '#cecece';
        setTimeout(() => { n8.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '8';
        };
    };
    function clicarn9() {
        n9.style.background = '#cecece';
        setTimeout(() => { n9.style.background = 'rgb(39, 39, 39)' }, 150);
        if (res.value.length < 12) {
        res.value += '9';
        }
    };
    function clicarBack() {
        back.style.background = '#cecece';
        setTimeout(() => { back.style.background = 'rgb(39, 39, 39)' }, 150);
        res.value = '';
    };

};













/*   const inputEle = document.getElementById('txtres');
    inputEle.addEventListener('keyup', function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) { // codigo da tecla enter
            // colocas aqui a tua função a rodar
            var i = eval(res)

            res.style.font = 'normal 35pt Comic Sans MS'
            res.style.marginBottom = '40px'
            p.innerText = `${eval(i.value)}`
        }
    }); */