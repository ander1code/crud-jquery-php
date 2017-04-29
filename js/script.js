var j = $.noConflict();
j(document).ready(function () {
         function TokenGen() {
            j.post('token.php', function (data) {
               j("#token").val(data);
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
               SetTextLogin();
            });
         }

         function OpenModalInfo(title, message){
         	  j("#titleModal").text(title);
         	  j("#textModal").text(message);
         		j("#info").modal("show");
         }

         function SetTextLogin() {
            var linkLogin = j("#lnkLogin");
            if (status_session == 0) {
               linkLogin.text(" Login");
               linkLogin.attr({
                  'href': '#home'
               });
               linkLogin.off();
            } else {
            	 linkLogin.off();
               linkLogin.text(" Logout");
               linkLogin.click(function (event) {
                  j("#confirmLogout").modal("show");
               });
               linkLogin.attr({
                  'href': '#'
               });
            }
         }

         function FrmInsertion() {
            j('#btnDelConfirm').hide();
            j('#btnEditConfirm').hide();
            j('#btnIst').show();
            j('#nome').val("");
            j('#email').val("");
            j('#renda').val("");
            
            var data18 = new Date();
            data18.setFullYear(data18.getFullYear() - 18);
            var date_string = data18.getDate() + "/" + parseInt(data18.getMonth() + 1) + "/" + data18.getFullYear();

            j('#dataNasc').val(date_string);
            j('#sexo').val("M");
         }

         function FrmEdition() {
            j('#btnDelConfirm').show();
            j('#btnEditConfirm').show();
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
               j("#divFrmCadastro").hide();
               j('#divErrors').hide();
               j("#home").hide();
               j("#cadastro").show();
               j("#divFrmCadastro").show();
               j("#busca").hide();
               j("#login").hide();
               if (status_edition == 0) {
                  FrmInsertion();
               } else {
                  FrmEdition();
               }
            } else {
               OpenHome();
               OpenModalInfo("Information", "User not Authentaticaded");
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
               OpenModalInfo("Information", "User not Authentaticaded");
            };
         }

         function OpenLogin() {
            j('#divMessage').hide();
            TestSession();
            j("#home").hide();
            j("#cadastro").hide();
            j("#busca").hide();
            j("#login").show();
            if (status_session == 0) {
            	j("#divfrmlogin").hide();
               j("#btnLogin").hide();
               j("#divfrmlogin").fadeIn("slow");
               j("#btnLogin").fadeIn("slow");
            } else {
               j("#btnLogin").hide();
               j("#divfrmlogin").hide();
            }
         }

         function ToLogin() {
            j('#divMessage').hide();
            var login = j("#usuario").val();
            var senha = j("#senha").val();
            var token = j("#token").val();
            var param = JSON.stringify({
               opcao: 6,
               login: login.trim(),
               senha: senha.trim(),
               token: token.trim()
            });
            j.post('Execucao.php', param, function (data) {
               if (data == 1) {
                  OpenModalInfo("Information", "User Authentaticaded.");
                  status_session = 1;
                  var url = "#home";
                  window.location.replace(url);
                  SetTextLogin();
                  OpenHome();
                  TokenGen();
               } else {
                  SetMessageLogin("User not Authentaticaded");
                  TokenGen();
               }
            });
         }

         function ToLogout() {
            var param = JSON.stringify({
               opcao: 8
            });
            j.post('Execucao.php', param, function (data) {
               OpenModalInfo("Information", data);
               status_session = 0;
               var url = "#home";
               window.location.replace(url);
               SetTextLogin();
               OpenHome();
               TokenGen();
            });
         }

         
         //Registration:
         function Delete() {
             j('#btnEditConfirm').attr("disabled", "disabled");
             j('#btnDelConfirm').attr("disabled", "disabled");
             var code = j('#codigoEdicao').val();
             var token = j('#token').val();
             var param = JSON.stringify({
                opcao: 3,
                codigo: code,
                token: token
             });
             j.post('Execucao.php', param, function (data) {
                OpenModalInfo("Information", data);
                j('#btnEditConfirm').removeAttr('disabled');
                j('#btnDelConfirm').removeAttr('disabled');
                FrmInsertion();
                TokenGen();
             });
				 }

         function Delete(code) {
               j('#lnkEdit').attr("disabled", "disabled");
               j('#lnkDel').attr("disabled", "disabled");
               var token = j('#token').val();
               var param = JSON.stringify({
                  opcao: 3,
                  codigo: code,
                  token: token
               });
               j.post('Execucao.php', param, function (data) {
                  OpenModalInfo("Information", data);
                  j('#lnkEdit').removeAttr('disabled');
                  j('#lnkDel').removeAttr('disabled');
                  j('#btnBuscar').trigger("click");
                  TokenGen();
               });
          }

         function Edit() {
               if(Validacao() == true){
               j('#btnEditConfirm').attr("disabled", "disabled");
               j('#btnDelConfirm').attr("disabled", "disabled");
               var code = j('#codigoEdicao').val();
               var name = j('#nome').val();
               var email = j('#email').val();
               var salary = j('#renda').val();
               var dateBirth = j('#dataNasc').val();
               var genre = j('#sexo').val();
               var token = j('#token').val();
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
                  OpenModalInfo("Information", data);
                  j('#btnEditConfirm').removeAttr('disabled');
                  j('#btnDelConfirm').removeAttr('disabled');
                  TokenGen();
               });
            }
            else{
                j('#divErrors').fadeIn(1000);
            }
         }

         function Insert() {

            if(Validacao() == true)
            {
               j('#btnIst').attr("disabled", "disabled");
               var name = j('#nome').val();
               var email = j('#email').val();
               var salary = j('#renda').val();
               var dateBirth = j('#dataNasc').val();
               var genre = j('#sexo').val();
               var token = j('#token').val();
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
                   OpenModalInfo("Information", data);
                  if (data != 'There Required Fields for insertion empty.') {
                     FrmInsertion();
                  }
                  j('#btnIst').removeAttr('disabled');
                  TokenGen();
               });
            }
            else
            {
               j('#divErrors').fadeIn(1000);
            }
         }

         function GetPhysicalPersonForName() {
            j('#tableSearch > tbody').empty();
            //j('#btnBuscar').attr("disabled", "disabled");
            var token = j('#token').val();
            var dataSearch = j('#dado').val();
            if (dataSearch == "") {
               dataSearch = "%";
               j('#dado').val();
            }
            var param = JSON.stringify({
               opcao: 4,
               dado: dataSearch,
               token: token
            });
            j.post('Execucao.php', param, function (data) {
                  if (data != "[]") {
                     var code;
                     var name;
                     var email;
                     var salary;
                     var dateBirth;
                     var genre;
                     var data = j.parseJSON(data);
                     j.each(data, function (key, value) {
                           console.log(value.DATANASC);
                           j("#divResultado").show();
                           j('tbody').append("<tr><td>"+value.CODIGO+"</td><td>"+value.NOME+"</td><td class='visible-sm'>"+value.EMAIL+"</td><td class='visible-sm'>"+value.RENDA+"</td><td class='visible-sm'>"+value.DATANASC+"</td><td class='visible-sm'>"+value.SEXO+"</td><td><a href='#cadastro'><img src='img/edit.ico' class='imgTab' id='lnkEdit'></a></td><td><a href='#busca'><img src='img/delete.ico' class='imgTab' id='lnkDel'></a></td></tr>");
                              j("tbody > tr").bind("mouseover", function () {
                                 code = j(this).find("td:eq(0)").text();
                                 name = j(this).find("td:eq(1)").text();
                                 email = j(this).find("td:eq(2)").text();
                                 salary = j(this).find("td:eq(3)").text();
                                 dateBirth = j(this).find("td:eq(4)").text();
                                 genre = j(this).find("td:eq(5)").text();
                              }); j("tbody > tr").find("td:eq(6)").bind("click", function () {
                                 SelectPerson(code, name, email, salary, dateBirth, genre);
                              }); j("tbody > tr").find("td:eq(7)").bind("click", function () {
                                 Delete(code);
                              });
                           }); j('.footable').footable();
                     }
                     else {
                        OpenModalInfo("Information", "No records with this search criteria by name.");
                        ClearSearch();
                     }
                     j('#btnBuscar').removeAttr('disabled');
                     TokenGen();
                  });
            }

            function GetPhysicalPersonForCode() {
               j('#tableSearch > tbody').empty();
               //j('#btnBuscar').attr("disabled", "disabled");
               try {
                  var token = j('#token').val();
                  var dataSearch = j('#dado').val();
                  parseInt(dataSearch);
                  if (dataSearch != "") {
                     var param = JSON.stringify({
                        opcao: 5,
                        dado: dataSearch,
                        token: token
                     });
                     j.post('Execucao.php', param, function (data) {
                           if (data != "[]") {
                              var code;
                              var name;
                              var email;
                              var salary;
                              var dateBirth;
                              var genre;
                              var data = j.parseJSON(data);
                              j.each(data, function (key, value) {
                                    var date = new Date(value.DATANASC);
                                    date_format = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
                                    j("#divResultado").show();
                                    j('tbody').append("<tr><td>"+value.CODIGO+"</td><td>"+value.NOME+"</td><td class='visible-sm'>"+value.EMAIL+"</td><td class='visible-sm'>"+value.RENDA+"</td><td class='visible-sm'>"+date_format+"</td><td class='visible-sm'>"+value.SEXO+"</td><td><a href='#cadastro'><img src='img/edit.ico' class='imgTab' id='lnkEdit'></a></td><td><a href='#busca'><img src='img/delete.ico' class='imgTab' id='lnkDel'></a></td></tr>");
                                       j("tbody > tr").bind("mouseover", function () {
                                          code = j(this).find("td:eq(0)").text();
                                          name = j(this).find("td:eq(1)").text();
                                          email = j(this).find("td:eq(2)").text();
                                          salary = j(this).find("td:eq(3)").text();
                                          dateBirth = j(this).find("td:eq(4)").text();
                                          genre = j(this).find("td:eq(5)").text();
                                       }); j("tbody > tr").find("td:eq(6)").bind("click", function () {
                                          SelectPerson(code, name, email, salary, dateBirth, genre);
                                       }); j("tbody > tr").find("td:eq(7)").bind("click", function () {
                                          Delete(code);
                                       });
                                    });
                              }
                              else {
                                 OpenModalInfo("Information", "No records with this search criteria by name.");
                                 ClearSearch();
                              }
                              j('#btnBuscar').removeAttr('disabled');
                              TokenGen();
                           });
                     }
                     else {
                        OpenModalInfo("Information", "Required Field for search by code is empty.");
                        j('#btnBuscar').removeAttr('disabled');
                        ClearSearch();
                     }
                  } catch (err) {
                     OpenModalInfo("Information", "Invalued data for search by code.");
                     j('#btnBuscar').removeAttr('disabled');
                     ClearSearch();
                  }
               }

               function SelectPerson(code, name, email, salary, dateBirth, genre) {
                  status_edition = 1;
                  j("#codigoEdicao").val(code);
                  j('#nome').val(name);
                  j('#email').val(email);
                  j('#renda').val(salary);
                  j('#dataNasc').val(dateBirth);
                  j('#sexo').val(genre);
                  ClearSearch();
                  OpenRegistration();
               }
               //Links:
               j('a[href="#home"').click(function () {
                  OpenHome();
               });
               j('a[href="#cadastro"').click(function () {
               		OpenRegistration();
               		FrmInsertion();
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
                  Delete((j("#codigoEdicao").val()));
                  FrmInsertion();
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

               function ClearSearch() {
                  j("#dado").val("");
                  j("#divResultado").hide();
                  j('tbody').empty();
               }

               function Filter() {
                  var input, filter, table, tr, td, i;
                  input = document.getElementById("filtroNome");
                  filter = input.value.toUpperCase();
                  table = document.getElementById("tableSearch");
                  tr = table.getElementsByTagName("tr");
                  for (i = 0; i < tr.length; i++) {
                     td = tr[i].getElementsByTagName("td")[1];
                     if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                           tr[i].style.display = "";
                        } else {
                           tr[i].style.display = "none";
                        }
                     }
                  }
               }
               j("#filtroNome").keyup(function () {
                  Filter();
                  j('.footable').footable();
               });
               

               //Validations:
               //http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
               function ValidarEmail(email) {
                  if (email != "") {
                     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                     return re.test(email);
                  }
                  return false;
               }

               function ValidarRenda(renda) {
                  if (renda != "") {
                     try {
                        parseFloat(renda);
                        if (renda > 0) {
                           return true;
                        }
                        return false;
                     } catch (e) {
                        return false;
                     }
                  }
                  return false;
               }

               function ValidarDataNasc(dataNasc) {

                  if (dataNasc != "") {
                     var data18 = new Date();
                     data18.setFullYear(data18.getFullYear() - 18);

                     var dia = dataNasc.substring(0,2);
                     var mes = dataNasc.substring(3,5);
                     var ano = dataNasc.substring(6,10);
                     var mes_inteiro = parseInt(mes);
                     var dateCompare = new Date(ano, mes_inteiro-1, dia);

                     if (dateCompare <= data18) {
                     return true;
                     } else {
                     return false;
                     }
                  }
                  return false;
               }

               function ValidarSexo(sexo) {
                  if (sexo != "") {
                     var re = /^[MF]{1}$/;
                     return re.test(sexo);
                  }
                  return false;
               }


               function SetErro(erro){
                  j("#listError").append("<li>" + erro + "</li>");
               }



               function Validacao() {

                  var flag = true;
                  j('#divErrors').hide();
                  j("#listError").empty();

                  console.log(j("#dataNasc").val());

                  if (j("#nome").val() == "") {
                     SetErro("Empty Name.");
                     flag = false;
                  }
                  if (j("#email").val() != "") {
                     if (!ValidarEmail(j("#email").val())) {
                        SetErro("Invalid Email.");
                        flag = false;
                     }
                  } else {
                     SetErro("Empty Email.");
                     flag = false;
                  }
                  if (j("#renda").val() != "") {
                     if (!ValidarRenda(j("#renda").val())) {
                        SetErro("Invalid Salary.");
                        flag = false;
                     }
                  } else {
                     SetErro("Empty Salary.");
                     flag = false;
                  }
                  if (j("#dataNasc").val() != "") {
                     if (!ValidarDataNasc(j("#dataNasc").val())) {
                        SetErro("Invalid Date of Birth.");
                        flag = false;
                     }
                  } else {
                     SetErro("Empty Date of Birth.");
                     flag = false;
                  }
                  if (j("#sexo").val() != "") {
                     if (!ValidarSexo(j("#sexo").val())) {
                        SetErro("Invalid Gender.");
                        flag = false;
                     }
                  } else {
                     SetErro("Empty Gender.");
                     flag = false;
                  }
                  return flag;
               }


               function SetMessageLogin(message){

                  j("#listMessage").empty();
                  j("#listMessage").append("<li>" + message + "</li>");

                  j("#divMessage").fadeIn('slow');

                  setTimeout(function() {
                     HideMessage();
                  }, 5000);
               }

               function HideMessage(){
                  j('#divMessage').fadeOut('slow');
               }

               j('#dataNasc').datepicker({
               });

            });



                 
                  
