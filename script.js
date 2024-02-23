// script.js

// Callback hell to deploy the timer using arrow functions
setTimeout(() => {
    updateCountdown(10);
    setTimeout(() => {
        updateCountdown(9);
        setTimeout(() => {
            updateCountdown(8);
            setTimeout(() => {
                updateCountdown(7);
                setTimeout(() => {
                    updateCountdown(6);
                    setTimeout(() => {
                        updateCountdown(5);
                        setTimeout(() => {
                            updateCountdown(4);
                            setTimeout(() => {
                                updateCountdown(3);
                                setTimeout(() => {
                                    updateCountdown(2);
                                    setTimeout(() => {
                                        updateCountdown(1);
                                        document.querySelector('.countdown').textContent = "Happy Independence Day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

function updateCountdown(count) {
    document.querySelector('.countdown').textContent = count;
}
