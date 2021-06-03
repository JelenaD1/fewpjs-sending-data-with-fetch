
function submitData(name, email)  {
      let dataInfo = {
        name: name,
        email: email
    }

    let configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataInfo)
      };

return fetch("http://localhost:3000/users", configurationObject)
       .then(resp => resp.json())
       .then(object => {
        let h =document.createElement("h1")
        h.innerHTML = object.id
        document.body.appendChild(h)

       })
       .catch(error => {
          let h2 = document.createElement("h2")
          h2.innerHTML = error.message 
          document.body.appendChild(h2)
          console.log(error)
       })



}