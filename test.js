function test() {
    let inp1 = document.querySelector('.i-1');
    let inp2 = document.querySelector('.i-2');
    let sel3 = document.querySelector('.s-3');
    let inf1 = +inp1.value;
    let inf2 = +inp2.value;
    let infsel = sel3.value;
    switch (infsel) {
        case '+':
            document.querySelector('.out-1').innerHTML = parseInt(inf1 + inf2);
            break;
        case '-':
            document.querySelector('.out-1').innerHTML = parseInt(inf1 - inf2);
            break;
        case '*':
            document.querySelector('.out-1').innerHTML = parseInt(inf1 * inf2);
            break;
        case '/':
            document.querySelector('.out-1').innerHTML = parseInt(inf1 / inf2);
            break;
    }
}
document.querySelector('.b-1').onclick = test;


