const button = document.querySelector("#basic-addon2");

button.addEventListener('click', (e) => {
    console.log(e.target);
    const activity = document.getElementsByClassName('form-control');
    AddActivity(activity.value);
});


function AddActivity(activity2){
    if(activity2 !== ''){
        const text = document.createElement("div")
        text.className = "form-check"; 
        
        const input = document.createElement("input")
        input.className = "form-check-input"
        input.type = "checkbox"
        
        const label = document.createElement("label") 
        label.className = "form-check-label"
        label.setAttribute("for", "flexCheckDefault")

        const activity = document.createTextNode(document.getElementById('form-text').value);
        label.appendChild(activity)

        text.appendChild(input)
        text.appendChild(label)
        var section = document.getElementById("activities")
        section.appendChild(text)
    }
}