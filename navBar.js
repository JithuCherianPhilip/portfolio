function navScreen() {
    if (!document.querySelector('.nav-screen')) {
        const navBox = document.createElement('div');
        navBox.className = "nav-screen";
        navBox.innerHTML = `
            <div class="nav-head">
                <a href="index.html" class="nav-title">Jithu Cherian Philip</a>
                <p class="close-nav">x</p>
            </div>
            <div class="nav-child for-mobile">
                <a href="about.html" class="title">About</a>
                <a href="contact.html" class="title">Contact</a>
            </div>`;
        
        document.body.append(navBox);

        const closeButton = navBox.querySelector('.close-nav');
        closeButton.addEventListener('click', () => {
            navBox.remove();
        });
    }
}

const menuIcon = document.querySelector('.menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', navScreen);
}
