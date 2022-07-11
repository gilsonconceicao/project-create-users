document.querySelectorAll('[txt-code]').forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        const insertText = document.querySelector('.code-aplication'); 

        fetch(button.getAttribute('txt-code'))
            .then(response => response.text())
            .then(archives => insertText.innerHTML = archives)
    }
})