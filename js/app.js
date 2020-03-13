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
    
    // Connect with Ajax
    // Instantiate XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    // Start connection
    xhr.open('GET', url, true);
    // Data and print template
    xhr.onload = function() {
        if (this.status === 200) {
            objectList = JSON.parse(this.responseText);
            // Generate HTML
            let htmlNames = '<h2>Generated names</h2>';

            htmlNames += '<ul class="lista">';
            // Print every generated name
            objectList.forEach(function(object) {
                htmlNames += `
                    <li>${object.name}</li>
                `
            });
            htmlNames += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNames;
        }
    }
    // Send request
    xhr.send();
}