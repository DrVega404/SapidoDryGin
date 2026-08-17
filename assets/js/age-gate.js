document.addEventListener("DOMContentLoaded", function () {
    var ageGate = document.getElementById("age-gate");
    var btnYes = document.getElementById("age-yes");
    var btnNo = document.getElementById("age-no");
    var errorMsg = document.getElementById("age-error");

    // Verifica se gli elementi esistono nella pagina per evitare errori in console
    if (!ageGate || !btnYes || !btnNo || !errorMsg) {
        return;
    }

    // Controlla se l'utente ha già verificato l'età in precedenza
    if (localStorage.getItem("ageVerified") === "true") {
        ageGate.style.display = "none";
    } else {
        ageGate.style.display = "flex";
    }

    // Azione al click su "Sì"
   btnYes.addEventListener("click", function () {
       localStorage.setItem("ageVerified", "true");
       ageGate.style.display = "none";
   });

    // Azione al click su "No"
    btnNo.addEventListener("click", function () {
        errorMsg.style.display = "block";
    });
});