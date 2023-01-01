(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
  
    const serviceID = "service_mj0szhi";
    const templateID = "template_t930p2n";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("from_name").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message is sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
}