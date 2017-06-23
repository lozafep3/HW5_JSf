function guessGame() {

    var conf = confirm('Желаете начать игру?');

    if (conf === false) {
        alert('Сегодня вы не выиграли миллион, а могли');
    } else {

        var maxNumber = 5;
        var attempt = 1;
        var mult = 1;
        var win = 0;
        var winSum = 0;
        var cont = true;

        var num = Math.floor(Math.random() * (maxNumber + 1));

        function tryYourLuck() {

            switch (attempt) {
                case 1:
                    win = 10 * mult;
                    break;
                case 2:
                    win = 5 * mult;
                    break;
                case 3:
                    win = 2 * mult;
                    break;
            }

            var roll = +prompt('Назовите целое число от 0 до ' + maxNumber);

            if (roll === num) {
                winSum = winSum + win;
                mult = mult * 3;
                attempt = 1;
                maxNumber = maxNumber * 2;
                num = Math.floor(Math.random() * (maxNumber + 1));
                alert('Вы угадали! Ваши выигрыш: ' + winSum + '$');
                cont = confirm('Желаете продолжить?');
            } else {
                alert('Мимо! Попробуйте ещё раз');
                attempt++;
            }
        }

        while (attempt < 4 && cont === true) {
            tryYourLuck();
        }

        alert('Окончательный выигрыш: ' + winSum + '$');

    }

}

guessGame();