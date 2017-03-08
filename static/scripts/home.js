console.log('Hello, world!')

document.getElementById('changeColor').addEventListener('click', function() {
    var color = document.getElementById('backgroundColor').value;
    var body = document.getElementById('body');
    body.style.background = color;
    console.log('Background color changed.');
});

function validateForm() {
    var name = document.getElementById('nameInput').value;
    var species = document.getElementById('speciesInput').value;
    var age = document.getElementById('ageInput').value;

    if (!name.length || !species.length || !age.length) {
        alert('All fields must be filled in!');
        return false;
    }

    if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
        alert('Age must be a number!');
        return false;
    }

    console.log(name, species, age);

    return true;
}
