let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//appels des fonctions
tableaffiche();

// cacher bouton update 
document.getElementById("btn_update").style.visibility = 'hidden'; 




// stockage variables
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    errorMsg= classes("error"),
    successIcon= classes("success-icon"),
    failureIcon= classes("failure-icon");
    
    // Array pour stocker les utilisateurs
    const users = JSON.parse(localStorage.getItem('lists')) || []; // si reload affiche list ou si vide affiche tableau vide
    

    // Enregistrer les users dans localstorage
    form.addEventListener ("submit", (e) => { 
        e.preventDefault();
        
        
        // localStorage.setItem("nom", username.value);
        // localStorage.setItem("email", email.value);
        // localStorage.setItem("password", password.value);
       
        const user = {username:username.value, email:email.value, password:password.value};
            
        console.log("user", user);

        users.push(user);

        const userstr = JSON.stringify(users);

        localStorage.setItem("lists", userstr);

        engine(username, 0, "username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(password, 2, "Password cannot be blank");

    

        
        // afficher encore le tableau lorsque ajout donnees 
        tableaffiche();


      
      

    });

    // Pour faire la validation de notre formulaire

    let engine = (id, serial, message) => {

        if (id.value.trim() === "") {
            errorMsg[serial].innerHTML = message;
            id.style.border="2px solid red"; 

            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";

        }
        else {
            errorMsg[serial].innerHTML = "";
            id.style.border="2px solid green"; 

            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";

        }
    }
    

    function tableaffiche (){
        var table = document.getElementById("myTable");

        table.innerHTML="";

        const persons = JSON.parse(localStorage.getItem('lists')) || [] ;

        console.log("persons", persons); 

        persons.forEach(myFunction);

        function myFunction(value) {
            
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = value.username;
            cell2.innerHTML = value.email;
            cell3.innerHTML = value.password;
            cell4.innerHTML = '<a href="#" onclick="edit(this)" > Edit </a>'+ " ";
            cell5.innerHTML = '<a href="#" onclick="deleteRow(this)"  > Suppr </a>';

        }

    }
    
       
        function deleteRow(r) {
            alert("oksuppr");
            var i = r.parentNode.parentNode.rowIndex -1;
            console.log("iii",i);
            document.getElementById("myTable").deleteRow(i);

      }   

      function edit(r){
        //alert("okedit");

        var i = r.parentNode.parentNode.rowIndex - 1;
        // console.log("iii",i);

        var row = document.getElementById("myTable").rows[i];

        cell_username= document.getElementById("myTable").rows[i].cells[0].innerHTML;
        cell_email= document.getElementById("myTable").rows[i].cells[1].innerHTML;
        cell_password= document.getElementById("myTable").rows[i].cells[2].innerHTML;
        
        
        console.log("celluser", cell_username);


        console.log("row",row);
        
        document.getElementById("username").value= cell_username;
        document.getElementById("email").value= cell_email;
        document.getElementById("password").value= cell_password;

        document.getElementById("btn_update").style.visibility = 'visible'; 
        document.getElementById("btn_save").style.visibility = 'hidden'; 

        var moduser = {username:cell_username, email: cell_email, password:cell_password};
        return moduser; 
       
        // nouv_list= localStorage.getItem('lists');

 


      }  



    function update(){
        alert("ok update ");

        users.push(moduser);
        console.log("newperson",users);

        document.getElementById("myTable").deleteRow(i);


        
        tableaffiche();


      }
         

        





      



    //   var moduser= edit(r);

    //   users.push(moduser); 
    //   console.log("newperson",users);



      
     
    
                       
            









            

