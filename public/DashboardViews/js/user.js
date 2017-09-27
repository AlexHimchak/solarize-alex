  $.ajax({ url: "/api/User", method: "GET" })
    .done(function(userData) {
        console.log(userData);
        var userArray = userData;

        var userList = $('#table1');
        userArray.forEach(function(user) {
            console.log(user);
            var userRow = $("<tr>");
            userRow.append("<td>"+ user.id +"</td>");
            userRow.append("<td>"+ user.user_name +"</td>");
            userRow.append("<td>"+ user.state +"</td>");
            userRow.append("<td>"+ user.email +"</td>");
            userRow.append("<td>"+ user.phone +"</td>");
            userRow.append("<td>" +"</td>");
            userRow.append("<td>"+ "</td>");
            userRow.append("<td>" +"</td>");
            userList.append(userRow);
        });

    });

// var newUser = {
//                     user_name: $("#first_name").val().trim(),
//                     user_password : "password",
//                     salt : "password",
//                     company_name: "company name",
//                     email: $("#email").val().trim(),
//                     phone: $("#phone").val().trim(),
//                     state: $("#state").val().trim(),
                    
//                 };
//                 console.log(newUser);


//                 $.post("/api/user", newUser)
//                     .done(function(data) {
//                         console.log(data);
//                         console.log("--------------------shop id: " + data.id);