let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenvalue = '';
for (item of button) {
    item.addEventListener('click', (event) => {
        buttonText = event.target.innerText;
        if (buttonText == 'A') {
            buttonText == '+';
            screenvalue += buttonText;
            screen.value = screenvalue;

        } else if (buttonText == 'C') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenvalue);

        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}

