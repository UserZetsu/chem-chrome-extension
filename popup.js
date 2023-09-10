document.getElementById('searchButton').addEventListener('click', function() {
    const smilesString = document.getElementById('smilesInput').value;
    fetchCompoundDetails(smilesString);
});

function fetchCompoundDetails(smiles) {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles}/JSON`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('results').textContent = 'Error fetching data.';
        });
}

function displayResults(data) {
    // Process and display data in the popup
    // This is just a simple example, you can format the data as you see fit
    document.getElementById('results').textContent = JSON.stringify(data, null, 2);
}
