//
let nav = document.querySelector('nav');

const menuIcon = document.querySelector('.nav-icon');

menuIcon.addEventListener('click', function(){
    nav.innerHTML= `
    <div class="cont cont-1">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
</div>
    `
})