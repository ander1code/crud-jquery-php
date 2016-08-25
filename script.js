var j = $.noConflict();
j(document).ready(function () {


    function TokenGen() {
        j.post('token.php', function (data) {
            j("#token").text(data);
        });
    }

    TestSession();
    TokenGen();
    OpenHome();
    var status_session = 0;
    var status_edition = 0;

    function TestSession() {

        var param = JSON.stringify({
            opcao: 7
        });
        j.post('Execucao.php', param, function (data) {
            status_session = data;
        });
    }

    function FrmInsertion() {
        j('#btnDel').hide();
        j('#btnEdt').hide();
        j('#btnIst').show();
        j('#nome').val("");
        j('#email').val("");
        j('#renda').val("");
        var d = new Date();
        j('#dataNasc').val(d.toLocaleString());
        j('#sexo').val("M");
    }

    function FrmEdition() {

        j('#btnDel').show();
        j('#btnEdt').show();
        j('#btnIst').hide();
    }



    //Navigation
    function OpenHome() {
        j("#home").show();
        j("#cadastro").hide();
        j("#busca").hide();
        j("#login").hide();
    }

    OpenHome();

    function OpenRegistration() {
        TestSession();
        if (status_session == 1) {
            j("#home").hide();
            j("#cadastro").show();
            j("#busca").hide();
            j("#login").hide();
            if (status_edition == 0) {
                FrmInsertion();
            } else {
                FrmEdition();
            }
        } else {
            OpenHome();
            alert('Usuário não autenticado.');
        }
    }

    function OpenSearch() {
        TestSession();
        if (status_session == 1) {
            j("#home").hide();
            j("#cadastro").hide();
            j("#busca").show();
            j("#login").hide();
            ClearSearch();
            j('#chkName').attr("checked", "checked");
        } else {
            OpenHome();
            alert('Usuário não autenticado.')
        }
        ;
    }

    function OpenLogin() {
        TestSession();
        j("#home").hide();
        j("#cadastro").hide();
        j("#busca").hide();
        j("#login").show();
        if (status_session == 0) {
            j("#divfrmlogin").show();
            j("#btnLogin").show();
            j("#btnLogout").hide();
        } else {
            j("#btnLogin").hide();
            j("#btnLogout").show();
            j("#divfrmlogin").hide();
        }
    }

    function ToLogin() {

        var login = j("#usuario").val();
        var senha = j("#senha").val();
        var token = j("#token").text();
        var param = JSON.stringify({
            opcao: 6,
            login: login,
            senha: senha,
            token: token
        });
        j.post('Execucao.php', param, function (data) {
            if (data == 1) {
                alert("User Authentaticaded");
                status_session = 1;
                window.location.href = "/jquery/#home";
                OpenHome();
                TokenGen();
            } else {
                alert("User not Authentaticaded");
                TokenGen();
            }
        });
    }

    function ToLogout() {

        var param = JSON.stringify({
            opcao: 8
        });
        j.post('Execucao.php', param, function (data) {
            alert(data);
            status_session = 0;
            window.location.href = "/jquery/#home";
            OpenHome();
            TokenGen();
        });
    }

    //Registration:
    function Delete() {

        if (confirm("Deseja excluir registro do Sistema?") == true)
        {
            j('#btnEdt').attr("disabled", "disabled");
            j('#btnDel').attr("disabled", "disabled");
            var code = j('#codigoEdicao').val();
            var token = j('#token').text();
            var param = JSON.stringify({
                opcao: 3,
                codigo: code,
                token: token
            });
            j.post('Execucao.php', param, function (data) {
                alert(data);
                j('#btnEdt').removeAttr('disabled');
                j('#btnDel').removeAttr('disabled');
                FrmInsertion();
                TokenGen();
            });
        } else
        {
            alert("Nothing operation was executed");
        }


    }

    function Delete(code) {

        if (confirm("Deseja excluir registro do Sistema?") == true)
        {
            j('#lnkEdit').attr("disabled", "disabled");
            j('#lnkDel').attr("disabled", "disabled");
            var token = j('#token').text();
            var param = JSON.stringify({
                opcao: 3,
                codigo: code,
                token: token
            });
            j.post('Execucao.php', param, function (data) {
                alert(data);
                j('#lnkEdit').removeAttr('disabled');
                j('#lnkDel').removeAttr('disabled');
                j('#btnBuscar').trigger("click");
                TokenGen();
            });
        } else
        {
            alert("Nothing operation was executed");
        }
    }

    function Edit() {

        if (confirm("Deseja editar registro do Sistema?") == true)
        {
            j('#btnEdt').attr("disabled", "disabled");
            j('#btnDel').attr("disabled", "disabled");
            var code = j('#codigoEdicao').val();
            var name = j('#nome').val();
            var email = j('#email').val();
            var salary = j('#renda').val();
            var dateBirth = j('#dataNasc').val();
            var genre = j('#sexo').val();
            var token = j('#token').text();
            var param = JSON.stringify({
                opcao: 2,
                codigo: code,
                nome: name,
                email: email,
                renda: salary,
                dataNasc: dateBirth,
                sexo: genre,
                token: token
            });
            j.post('Execucao.php', param, function (data) {
                alert(data);
                j('#btnEdt').removeAttr('disabled');
                j('#btnDel').removeAttr('disabled');
                TokenGen();
            });
        } else
        {
            alert("Nothing operation was executed");
        }
    }

    function Insert() {

        j('#btnIst').attr("disabled", "disabled");
        var name = j('#nome').val();
        var email = j('#email').val();
        var salary = j('#renda').val();
        var dateBirth = j('#dataNasc').val();
        var genre = j('#sexo').val();
        var token = j('#token').text();
        var param = JSON.stringify({
            opcao: 1,
            nome: name,
            email: email,
            renda: salary,
            dataNasc: dateBirth,
            sexo: genre,
            token: token
        });
        j.post('Execucao.php', param, function (data) {
            alert(data);
            j('#btnIst').removeAttr('disabled');
            FrmInsertion();
            TokenGen();
        });
    }



    function GetPhysicalPersonForName() {
		
		j('#tableSearch > tbody').empty();
       

        j('#btnBuscar').attr("disabled", "disabled");
        var token = j('#token').text();
        var dataSearch = j('#dado').val();
        if (dataSearch == "") {
            dataSearch = "%";
            j('#dado').val("%");
        }

        var param = JSON.stringify({
            opcao: 4,
            dado: dataSearch,
            token: token
        });
        j.post('Execucao.php', param, function (data) {

            if (data != "[]")
            {
                var code;
                var name;
                var email;
                var salary;
                var dateBirth;
                var genre;

                var data = j.parseJSON(data);
                j.each(data, function (key, value) {


                    j("#divResultado").show();
                    j('tbody').append("<tr><td>" + value.CODIGO + "</td><td class='mdl-data-table__cell--non-numeric'>" + value.NOME + "</td><td class='mdl-data-table__cell--non-numeric ocultar_celular'>" + value.EMAIL + "</td><td class='ocultar_celular'>" + value.RENDA + "</td><td>" + value.DATANASC + "</td><td>" + value.SEXO + "</td><td><a href='#cadastro'><img src='imgs/edit.ico' id='lnkEdit' class='iconsearch'></a></td><td><a href='#busca'><img src='imgs/delete.ico' id='lnkDel' class='iconsearch'></a></td></tr>");
                    j("tbody > tr").bind("mouseover", function ()
                    {
                        code = j(this).find("td:eq(0)").text();
                        name = j(this).find("td:eq(1)").text();
                        email = j(this).find("td:eq(2)").text();
                        salary = j(this).find("td:eq(3)").text();
                        dateBirth = j(this).find("td:eq(4)").text();
                        genre = j(this).find("td:eq(5)").text();
                    });

                    j("tbody > tr").find("td:eq(6)").bind("click", function ()
                    {
                        SelectPerson(code, name, email, salary, dateBirth, genre);
                    });

                    j("tbody > tr").find("td:eq(7)").bind("click", function ()
                    {
                        Delete(code);
                    });
                });
            } else
            {
                alert("No records with this search criteria by name.");
                ClearSearch();
            }

            j('#btnBuscar').removeAttr('disabled');
            TokenGen();
        });
    }

    function GetPhysicalPersonForCode() {
		
		j('#tableSearch > tbody').empty();
       
        j('#btnBuscar').attr("disabled", "disabled");
        try {
            var token = j('#token').text();
            var dataSearch = j('#dado').val();
            parseInt(dataSearch);
            if (dataSearch != "") {
                var param = JSON.stringify({
                    opcao: 5,
                    dado: dataSearch,
                    token: token
                });
                j.post('Execucao.php', param, function (data) {

                    if (data != "[]")
                    {
                        var code;
                        var name;
                        var email;
                        var salary;
                        var dateBirth;
                        var genre;

                        var data = j.parseJSON(data);
                        j.each(data, function (key, value) {


                            j("#divResultado").show();
                            j('tbody').append("<tr><td>" + value.CODIGO + "</td><td class='mdl-data-table__cell--non-numeric'>" + value.NOME + "</td><td class='mdl-data-table__cell--non-numeric ocultar_celular'>" + value.EMAIL + "</td><td class='ocultar_celular'>" + value.RENDA + "</td><td>" + value.DATANASC + "</td><td>" + value.SEXO + "</td><td><a href='#cadastro'><img src='imgs/edit.ico' id='lnkEdit' class='iconsearch'></a></td><td><a href='#busca'><img src='imgs/delete.ico' id='lnkDel' class='iconsearch'></a></td></tr>");
                            j("tbody > tr").bind("mouseover", function ()
                            {
                                code = j(this).find("td:eq(0)").text();
                                name = j(this).find("td:eq(1)").text();
                                email = j(this).find("td:eq(2)").text();
                                salary = j(this).find("td:eq(3)").text();
                                dateBirth = j(this).find("td:eq(4)").text();
                                genre = j(this).find("td:eq(5)").text();
                            });

                            j("tbody > tr").find("td:eq(6)").bind("click", function ()
                            {
                                SelectPerson(code, name, email, salary, dateBirth, genre);
                            });

                            j("tbody > tr").find("td:eq(7)").bind("click", function ()
                            {
                                Delete(code);
                            });
                        });
                    } else
                    {
                        alert("No records with this search criteria by name.");
                        ClearSearch();
                    }
                    j('#btnBuscar').removeAttr('disabled');
                    TokenGen();
                });
            } else {
                alert("Required Field for search by code is empty.");
                j('#btnBuscar').removeAttr('disabled');
                ClearSearch();
            }
        } catch (err) {
            alert("Invalued data for search by code.");
            j('#btnBuscar').removeAttr('disabled');
            ClearSearch();
        }
    }

    function SelectPerson(code, name, email, salary, dateBirth, genre) {

        j("#codigoEdicao").val(code);
        j('#nome').val(name);
        j('#email').val(email);
        j('#renda').val(salary);
        j('#dataNasc').val(dateBirth);
        j('#sexo').val(genre);
        OpenRegistration();
        status_edition = 1;
    }




    //Links:
    j('a[href="#home"').click(function () {
        OpenHome();
    });
    j('a[href="#cadastro"').click(function () {
        OpenRegistration();
    });
    j('a[href="#busca"').click(function () {
        OpenSearch();
    });
    j('a[href="#login"').click(function () {
        OpenLogin();
    });
    //Login
    j("#btnLogin").click(function () {
        ToLogin();
    });
    j("#btnLogout").click(function () {
        ToLogout();
    });
    //Registration:
    j('#btnDel').click(function () {
        Delete();
    });
    j('#btnEdt').click(function () {
        Edit();
    });
    j('#btnIst').click(function () {
        Insert();
    });
    j('#btnClr').click(function () {
        FrmInsertion();
    });
    j('#btnBuscar').click(function () {

        if (j("#chkName").is(':checked')) {
            GetPhysicalPersonForName();
        } else {
            GetPhysicalPersonForCode();
        }

    });

    j('#chkName').click(function () {
        ClearSearch();
    });

    j('#chkCode').click(function () {
        ClearSearch();
    });

    j('#lnkEdit').click(function () {
        SelectPerson();
        OpenRegistration();
    });

    j('#lnkDel').click(function () {


    });


    function ClearSearch() {
        j("#dado").val("");
        j("#divResultado").hide();
        j('tbody').empty();
    }
});