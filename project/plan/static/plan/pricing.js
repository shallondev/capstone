document.addEventListener('DOMContentLoaded', function() {

    console.log("script loaded");

    // Get references to all elements that can open the modal
    const openModalButtons = [
        document.getElementById('standard'),
        document.getElementById('standardPlus'),
        document.getElementById('premium')
    ];

    // Get reference to the overlay
    const overlay = document.getElementById('overlay');

    // Get a reference to the modal
    const modal = document.getElementById('crud-modal');
        
    // Function to open the modal
    function openModal() {
        console.log("function runs!");
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        overlay.classList.remove('hidden')
    }

    // Add event listener to each button
    openModalButtons.forEach(function(button) {
        console.log("success!");
        button.addEventListener('click', openModal);
    });

});