// DOM - Document Object Mode

// Créer l'évènement save()

function save() {
    let tache = document.getElementById('tache').nodeValue
    localStorage.setItem('nameTask', tache)
}
