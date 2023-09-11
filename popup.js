document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('searchButton');
    var dropdown = document.getElementById('dropdown');

    button.addEventListener('click', function() {
        dropdown.innerHTML = '';

        var options = ['Option 1', 'Option 2', 'Option 3'];

        options.forEach(function(option){
            var optElem = document.createElement('option');
            optElem.value = option;
            optElem.textContent = option; 
            dropdown.appendChild(optElem);
        });
    });
});