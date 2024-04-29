$(document).ready(() => {



    let tableEle = $("<table>");
    let theadEle = $("<thead>");
    let tbodyEle = $("<tbody>");

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function (response) {
            let jsonData = response;
            console.log(jsonData);

            if (jsonData) {
                let tr = $("<tr>");

                let th2 = $("<th>").html("Name");
                tr.append(th2);

                let th3 = $("<th>").html("Username");
                tr.append(th3);

                let th4 = $("<th>").html("Email");
                tr.append(th4);

                let th5 = $("<th>").html("Phone");
                tr.append(th5);

                theadEle.append(tr);
            }

            if (jsonData) {
                $.each(jsonData, function (index, data) {
                    let tr = $("<tr>");

                    let td2 = $("<td>").html(data.name);
                    tr.append(td2);

                    let td3 = $("<td>").html(data.username);
                    tr.append(td3);

                    let td4 = $("<td>").html(data.email);
                    tr.append(td4);

                    let td5 = $("<td>").html(data.phone);
                    tr.append(td5);

                    tbodyEle.append(tr);
                });
            }

            tableEle.append(theadEle);
            tableEle.append(tbodyEle);

            $("#result").append(tableEle);
        },
        error: function (error) {
            console.log(error);
        }
    });

    $("#form").submit((e) => {
        e.preventDefault();

        if ($("#name").val() === "") {
            alert("Name cannot be empty");
            return;
        }

        if ($("#username").val() === "") {
            alert("Username cannot be empty");
            return;
        }

        if ($("#email").val() === "") {
            alert("Email cannot be empty");
            return;
        }

        if ($("#phone").val() === "") {
            alert("Phone cannot be empty");
            return;
        }

        if (isNaN($("#phone").val()) && $("#phone").val().length != 10) {
            alert("Phone must be a valid number");
            return;
        }

        let tr = $("<tr>");

        let td1 = $("<td>").text($("#name").val());
        let td2 = $("<td>").text($("#username").val());
        let td3 = $("<td>").text($("#email").val());
        let td4 = $("<td>").text($("#phone").val());

        tr.append(td1, td2, td3, td4);

        tbodyEle.append(tr);
    });
});
