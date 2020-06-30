window.onload = () => {
    (function quantityProducts () {
        const quantityArrowMinus = document.querySelectorAll('.product__quantity--minus');
        const quantityArrowPlus = document.querySelectorAll('.product__quantity--plus');

        quantityArrowMinus.forEach(current => {
            current.addEventListener('click', quantityMinus);
        });

        quantityArrowPlus.forEach(current => {
            current.addEventListener('click', quantityPlus);
        });

        function quantityMinus(event) {
            event.preventDefault();
            if (this.nextElementSibling.value > 1) {
                this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1;
            }
        }

        function quantityPlus(event) {
            event.preventDefault();
            this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
        }
    })();

    (function colorSelect() {
        const select = document.querySelectorAll('.select');
        const placeholder = document.querySelectorAll('.select__placeholder');
        const label = document.querySelectorAll('.select__color');
        let placeholderIndex;

        select.forEach((current, index) => {
            current.addEventListener('click', () => {
                current.classList.toggle('active');
                placeholderIndex = index;
            });

            current.addEventListener('mouseleave', () => {
                current.classList.remove('active');
            });

        });

        label.forEach(current => {
            current.addEventListener('click', (event) => {
                placeholder[placeholderIndex].innerText = event.target.parentElement.innerText;    
            });
        })
    })();

    (function btnActive() {
        const buyButton = document.querySelectorAll('.product__buy');
        const compareButton = document.querySelectorAll('.product__compare');
        let btnArray = [...buyButton, ...compareButton];

        btnArray.forEach(current => {
            current.addEventListener('click', (event) => {
                event.preventDefault();
                current.classList.toggle('active');
            });
        });
    })();
}