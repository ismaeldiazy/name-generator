document.querySelector('#generar-nombre').addEventListener('submit', loadNames);

// Ajax call and print results
function loadNames(e) {
    e.preventDefault();
    // Read variables
    const origin = document.getElementById('origen');
    const selectedOrigin = origin.options[origin.selectedIndex].value;

    const gender = document.getElementById('genero');
    const selectedGender = gender.options[gender.selectedIndex].value;
    
    const quantity = document.getElementById('numero').value;

    let url = '';
    url += 'https://uinames.com/api/?';
    // If ther's origin, add it to the URL
    if (selectedOrigin !== "") {
        url += `region=${selectedOrigin}&`;
    }
    // If there's gender, add it
    if (selectedGender !== "") {
        url += `gender=${selectedGender}&`;
    }
    // If there's quantity, add it
    if (quantity !== "") {
        url += `amount=${quantity}&`;
    }
    
    console.log(url);

}