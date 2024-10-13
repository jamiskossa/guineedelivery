document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupération des données du formulaire
    const pickupAddress = document.getElementById('pickupAddress').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const packageDetails = document.getElementById('packageDetails').value;
    const deliveryType = document.getElementById('deliveryType').value;

    // Validation simple
    if (!pickupAddress || !deliveryAddress || !packageDetails) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Simuler la soumission de la demande
    alert(`Demande de livraison envoyée avec succès : \nAdresse de ramassage : ${pickupAddress}\nAdresse de livraison : ${deliveryAddress}\nType : ${deliveryType}`);
    
    // Réinitialiser le formulaire
    document.getElementById('deliveryForm').reset();
});
