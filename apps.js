//STATEMENT CONSTRUCTOR
class Statement {
    constructor(name, major, sub1, sub2, sub3) {
        this.name = name;
        this.major = major;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
    }
}


//UI OBJECT
//.........................................................................
function UI() {

//FUNCTION FOR INPUT WELCOME
welcoming = function(message){
    const welcome = document.querySelector('#welcomeName');
    welcome.textContent = `Welcome, ${message}`;
}


//FUNCTION FOR CREATING FIELDS
 createFields = function(statement) {


    // TRANSFORMING INPUTS FOR THE MATH OPERATIONS
        const m1 = parseFloat(statement.sub1);
        const m2 = parseFloat(statement.sub2);
        const m3 = parseFloat(statement.sub3);
        const tm = `${m1+m2+m3}`;
        const avg = `${tm/3}`;
        
        const row = document.createElement('tr');

    if(m1 < 35 || m2 < 35 || m3 < 35){
         //  CREATING ELEMENT AND APPEND IT 
          row.innerHTML = (
                 `<td>${statement.name}</td>
                 <td>${statement.major}</td>
                 <td>${m1}</td>
                 <td>${m2}</td>
                 <td>${m3}</td>
                 <td>${tm}</td>
                 <td>${avg + '%'} </td>
                 <td class="delete"> <i class="fa-sharp fa-solid fa-circle-xmark"></i> </td`
         );
         row.className = 'bg-danger text-white';
    } else {
        
         row.innerHTML = (
                 `<td>${statement.name}</td>
                 <td>${statement.major}</td>
                 <td>${m1}</td>
                 <td>${m2}</td>
                 <td>${m3}</td>
                 <td>${tm}</td>
                 <td>${avg + '%'} </td>
                 <td class="delete"> <i class="fa-sharp fa-solid fa-circle-xmark"></i> </td>`
         );
         row.className = 'bg-success text-white';
    }
   


        
    // APPENDING TO THE TABLE BODY 
        const list = document.querySelector('#listbody');
        list.appendChild(row);
},


//FUNCTION FOR CLEARING THE FIELDS
clearFields = () => {
    const name = document.getElementById('name').value = "";
    const major = document.getElementById('major').value = "";
    const sub1 = document.getElementById('mark1').value = "";
    const sub2 = document.getElementById('mark2').value = "";
    const sub3 = document.getElementById('mark3').value = "";
    const welcome = document.querySelector('#welcomeName').textContent = "Enter the students name";;
}


//FUNCTION TO DELETE THE FIELDS
deleteItem = (target) =>{
    target.parentElement.remove();
}


//FUNCTION TO ALERT
appAlert = (message,className) =>{

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const insertAlert = document.querySelector("#appAlert");

    insertAlert.appendChild(div);

    //SETTING TIMEOUT
    setTimeout(() => {
        div.remove();
    }, 2000);

}

//FUNCTION TO CHECK THE STATUS (PASS OR FAIL)
statusOf = (statement) => {
    const stat = document.querySelector('#stat');
    const div = document.createElement('div');
    const bgc = document.querySelector('#rg');

    if(statement.sub1 < 35 || statement.sub2 < 35 || statement.sub3 < 35 ){
        div.className = `alert alert-danger`;
        div.appendChild(document.createTextNode('FAIL, SONA MUTHA POCHAAAAAA'));
        stat.appendChild(div);
    } else {
        div.className = `alert alert-success`;
        div.appendChild(document.createTextNode('PASS PANNITA DA PARAMA'));
        stat.appendChild(div);
    }

   setTimeout(() => {
        div.remove();
   }, 4000);

    


    
}

}
//.........................................................................


//EVENT LISTENER TO INPUT NAME

document.querySelector('#name').addEventListener('input', function(e){
    e.preventDefault();
    const ui = new UI();

    const welcome = document.querySelector('#welcomeName');
    const inputWelcome = document.querySelector('#name');
    if(inputWelcome.value === ""){
        welcome.textContent = "Enter the students name";
    } else {
        welcoming(inputWelcome.value);
    }

});





//EVENT LISTENER TO CREATE

document.querySelector('#forms').addEventListener('submit', function(e) {
    e.preventDefault(e);

    const name = document.getElementById('name').value;
    const major = document.getElementById('major').value;
    const sub1 = document.getElementById('mark1').value;
    const sub2 = document.getElementById('mark2').value;
    const sub3 = document.getElementById('mark3').value;

    

    const statem = new Statement(name , major, sub1, sub2, sub3);
    const ui = new UI();

    if (name === "" || major === "" || sub1 === "" ||
        sub2 === "" || sub3 === "") {
        appAlert('PLEASE FILL ALL THE FIELDS', 'alert-danger');
    } else {
        createFields(statem);
        clearFields();
        appAlert('MARKS INSERTED SUCCESSFULLY', 'alert-success');
        statusOf(statem);
    }

})


//EVENT LISTENER TO DELETE 
document.querySelector('#listbody').addEventListener('click',function(e){

    const ui = new UI();

    if(e.target.parentElement.className === 'delete'){
        
        deleteItem(e.target.parentElement);
        appAlert('MARKS DELETED SUCCESSFULLY', 'alert-success')
    }


})