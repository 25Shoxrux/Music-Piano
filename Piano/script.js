let keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.onclick = (e) =>{
        let key = e.target;
        let note = document.getElementById(key.dataset.note);
        console.log(note);
        key.classList.add('active');
        note.currentTime = 0;
        note.play();
        key.onmousemove = () =>{
        key.classList.remove('active');
        }

     }
});

document.onkeydown = (event) => {
    let key = event.key;
    let piano = document.querySelector('[data-d='+key+']');
    console.log(piano);
    let audio = document.querySelector('[data-c='+key+']');
    // piano.classList.add('active');
    // piano.classList.remove('active');
    audio.currentTime = 0;
    audio.play();
    piano.onkeyup = () =>{
       
    }
   
}