// DOM - Document Object Mode

// Créer l'évènement save()

// function save() {
//     let tache = document.getElementById('tache').value;
//     localStorage.setItem('nameTask', tache)
// }

// // Créer l'évènement remove()
// function remove() {
//     document.getElementById('tache').value = 'Le chef il veut du à l ail';
//     localStorage.removeItem('nameTask')
// }

const lienGoogle = document.getElementById('google')
const cg = document.getElementById('cg')

lienGoogle.addEventListener('click', function(e){
    if(!cg.checked){
        e.preventDefault()
    }

})