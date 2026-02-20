$(document).ready(function (){

    let peopleArray = [];
    let actionStack = [];

    
    function hideAllMessages() {
        $("#homeMessage, #contactMessage, #aboutMessage, #helpMessage, #personSection").hide();
    }

    function setActive(buttonId) {
        $(".navBtn").removeClass("active");
        $(buttonId).addClass("active");
    }

    
    $("#loginBtn").click(function () {
        let user = $("#username").val();
        let pass = $("#password").val();

        if( user === "Username" && pass === "12345") {
            Swal.fire("Success", "Sign in Successful", "success");
            $("#loginPage").hide();
            $("#mainPage").show();
            $("#homeMessage").show(); 
        } else {
            Swal.fire("Error", "Invalid Username or Password", "error");
        }
    });
    
    $("#homeBtn").click(function () {
        setActive("#homeBtn");
        hideAllMessages();
        $("#homeMessage").show();
    });

    $("#personBtn").click(function () {
        setActive("#personBtn");
        hideAllMessages();
        $("#personSection").show();
    });

    $("#contactBtn").click(function () {
        setActive("#contactBtn");
        hideAllMessages();
        $("#contactMessage").show();
    });

    $("#aboutBtn").click(function () {
        setActive("#aboutBtn");
        hideAllMessages();
        $("#aboutMessage").show();
    });

    $("#helpBtn").click(function () {
        setActive("#helpBtn");
        hideAllMessages();
        $("#helpMessage").show();
    });

    $("#exitBtn").click(function () {
        Swal.fire({
            title: "Exit System?",
            text: "Are you sure you want to exit?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Exit",
            cancelButtonText: "No, Stay"
        }).then((result) => {
            if (result.isConfirmed) location.reload();
        });
    });

    $("#saveBtn").click(function () {
        let person = {
            name: $("#name").val(),
            middlename: $("#middlename").val(),
            lastname: $("#lastname").val(),
            gmail: $("#gmail").val()
        };

        if (person.name === "" || person.lastname === "") {
            Swal.fire("Error", "Name & Last Name required", "error");
            return;
        }

        peopleArray.push(person);
        actionStack.push("Saved");

        Swal.fire("Submitted!", "User information stored", "success");

        renderList();
        clearInputs();
    });

    function renderList() {
        let tbody = $("#dataTable tbody");
        tbody.empty();

        for (let i = 0; i < peopleArray.length; i++) {
            let p = peopleArray[i];
            tbody.append(`<tr>
                <td>${p.name}</td>
                <td>${p.middlename}</td>
                <td>${p.lastname}</td>
                <td>${p.gmail}</td>
            </tr>`);
        }
    }

    function clearInputs() {
        $("#name, #middlename, #lastname, #gmail").val("");
    }

});