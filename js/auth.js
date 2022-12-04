
let error = 0;

document.querySelector("#sign-up-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("input[name='username']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const confirmPassword = document.querySelector("input[name='confirm-password']").value;

    // dummy validation for username if username is equal to albert
    if (username === "albert") {
        // add error on parent element
        document.querySelector("input[name='username']").parentElement.classList.add("error");
        // add error message with error-message class
        // check if error message already exists
        if (!document.querySelector("input[name='username']").parentElement.querySelector(".error-message")) {
            document.querySelector("input[name='username']")
            .parentElement
            .insertAdjacentHTML("beforeend", `<p class="error-message">Username is already taken</p>`);
        } 
    } else {
        error = 0;
    }
    
    if (password !== confirmPassword) {
        // add error class and add element error-message
        document.querySelectorAll(".auth-right__form-group").forEach(form_group => {
            console.log(form_group)
            const forElement = form_group.getAttribute("data-for");
            if (forElement === "confirm-password") {
                form_group.classList.add("error");
                // if error-message element doesn't exist, create it
                if (!form_group.querySelector(".error-message")) {
                    const errorMessage = document.createElement("div");
                    errorMessage.classList.add("error-message");
                    errorMessage.innerHTML = "Passwords do not match";
                    form_group.appendChild(errorMessage);
                }
            }

            if (forElement === "password") {
                form_group.classList.add("error");
                // if error-message element doesn't exist, create it
                if (!form_group.querySelector(".error-message")) {
                    const errorMessage = document.createElement("div");
                    errorMessage.classList.add("error-message");
                    errorMessage.innerHTML = "Passwords do not match";
                    form_group.appendChild(errorMessage);
                }
            }
        });
        error = 1;
    } else {
        error = 0;
    }


    if (!error) {
        // submit form
        document.querySelector("#sign-up-form").submit();
        alert("Successfully Signed Up!");
    }
})

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        // get parent element
        const parentElement = input.parentElement;
        // remove error class
        parentElement.classList.remove("error");
        // remove error message
        parentElement.querySelector(".error-message").remove();
        
    })
})
