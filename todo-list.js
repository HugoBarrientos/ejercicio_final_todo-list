const button = document.querySelector("#basic-addon2");
const cancelButton = document.getElementsByClassName('cancel-button');
var num = 4;

button.addEventListener('click', (e) => {
    console.log(e.target);
    AddActivity();
    num = num + 1;
});


function AddActivity(){
    const activity = document.createTextNode(document.getElementById('form-text').value);
    if(activity.length != 0){
        const text = document.createElement("div");
        text.className = "form-check"; 
        
        const input = document.createElement("input");
        input.className = "form-check-input";
        input.type = "checkbox";
        
        const label = document.createElement("label"); 
        label.className = "form-check-label";
        label.setAttribute("for", "flexCheckDefault");

        label.appendChild(activity);

        const inputButton= document.createElement("input")
        inputButton.className = "cancel-button";
        inputButton.src =  "./cancelar-image.png";
        inputButton.type = "image"
        inputButton.setAttribute('onclick','remove(this)');
        inputButton.id = "cancel-button-" + num;


        text.appendChild(input)
        text.appendChild(label)
        text.appendChild(inputButton)
        var section = document.getElementById("activities")
        section.appendChild(text)
    }
}

function remove(el){
    var element = el;
    element.parentNode.remove();
}