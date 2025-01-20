let LIST_NAME_PERSON = [];
let listContainer    = document.getElementById("resultado"); 

const agregarAmigo = () => {

    if(LIST_NAME_PERSON.length === 0) clearContainerList();

    const namePerson = document.getElementById("amigo");
    let  valueName   = namePerson.value.trim()

    if (!validName( valueName )) return; 
    
    LIST_NAME_PERSON.push( valueName )
    namePerson.value = "";

    showListName( valueName );
}

const validName = namePerson  =>{
    let isValid = true;
    if(namePerson.length === 0) {
        isValid = false;
        let textNoName = "por favor, ingrese un nombre válido";
        showAlert( textNoName );
        return isValid;
    }
    return isValid;
}

const showListName = namePerson  =>{
    const liElement       = document.createElement("li"); 
    liElement.textContent = namePerson; 
    listContainer.appendChild(liElement); 
}

const showAlert =  text  =>{
    alert(`${text}`)
}

const clearContainerList = (  ) =>{
    listContainer.innerHTML = "";
}
const sortearAmigo = () => {
    if(LIST_NAME_PERSON.length === 0) {
        let textNoName = "No hay ningun nombre ingresado, por favor ingresar nombres antes de sortear";
        showAlert( textNoName );
        return
    }

    clearContainerList( );

    let limit               = LIST_NAME_PERSON.length;
    let valueRandom         = Math.floor(Math.random() * limit);      
    const liElement         = document.createElement("li"); 
    liElement.textContent   = `El amigo secreto sorteado es: ${LIST_NAME_PERSON[valueRandom]}`;

    listContainer.appendChild(liElement);

    LIST_NAME_PERSON = [];

}