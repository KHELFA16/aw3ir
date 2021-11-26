window.onload = function () {
    document.querySelector("#Submit").addEventListener("click", function(event){
      event.preventDefault();

      
      var name =document.querySelector("#Nom").value;
      var name2 =document.querySelector("#Prenom").value;
      var address =document.querySelector("#address").value;
      var Email =document.querySelector("#ademail").value;
      var myModal = new bootstrap.Modal(document.getElementById('myModal'));
      var dateNaissance = new Date(document.getElementById("dob").value);
      if(name == "" || name.length < 5){
        document.querySelector(".modal-title").textContent = "Attention ";
        document.querySelector(".modal-body").textContent = "le nom saisie doit avoir plus de 5 characteres ";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(name2 == "" || name2.length < 5){
        document.querySelector(".modal-title").textContent = "Attention ";
        document.querySelector(".modal-body").textContent = "le preneom saisie doit avoir plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(document.getElementById("dob").value == ""){
        document.querySelector(".modal-title").textContent = "Attention ";
        document.querySelector(".modal-body").textContent = "veillez selectionner une date";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if (dateNaissance.getTime() > Date.now()){
        document.querySelector(".modal-title").textContent = "Attention ";
        document.querySelector(".modal-body").textContent = "la date ne doit pas etre dans le futur";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(address == "" || address.length < 5 ){
        document.querySelector(".modal-title").textContent = "Attention ";
        document.querySelector(".modal-body").textContent = "l'adresse saisie doit avoir plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(Email == "" || Email.length < 5 || validateEmail(document.getElementById("ademail").value) == false ){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir un email valide ";
        document.querySelector("#map").src = "#";
        myModal.show();
       }

      else{
        document.querySelector(".modal-title").textContent = `Bienvenue ${document.querySelector("#Prenom").value} !` ;
        var month = dateNaissance.getUTCMonth() + 1;
        var day = dateNaissance.getUTCDate();
        var year = dateNaissance.getUTCFullYear();
        newdate = day + "/" + month + "/" + year;
        document.querySelector("#first").textContent = "Vous êtes né le "+ newdate +" et vous habitez ici: ";

        document.querySelector("#map").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector("#address").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
        document.querySelector("#lien").href= `http://maps.google.com/maps?q=${document.querySelector("#address").value}`;
        

        myModal.show();
      }
});
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}