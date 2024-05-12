const form = document.forms["form"];
const popUp = document.getElementById("popUp");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const paragraph = document.createElement("p");
    const username = document.getElementById("username").value;
    const password = document.querySelector(".password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.querySelector(".lastName").value;
    // const last = document.getElementsByClassName("lastName")[0].value;
    // alert("Welcome " + firstName + " " + last);
    // alert("Welcome " + firstName + " " + lastName);
    form.reset();

    const obj = {
        username : username,
        password : password,
        firstName : firstName,
        lastName : lastName
    }

    console.log(obj)  

    async function postJSON(data) {
        console.log(data)
        

        try {
          const response = await fetch("http://localhost:5050/api/note/register", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
          paragraph.textContent = result.message;
          console.log(result.message);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
      postJSON(obj);
      popUp.append(paragraph);
      
})
