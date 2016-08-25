<!DOCTYPE html>
<html lang="pt-br">

<head>
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <link rel="icon" href="imgs/jquery-icon.png">

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Sistema pequeno de Cadastro feito com jQuery, Material Design Lite (componente da Google). No lado do servidor, PHP e SQLite.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>Registration jQuery</title>

    <!-- Page styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.min.css">
    <link rel="stylesheet" href="css/mycss.css">

    <script type="text/javascript" src="jquery-1.8.0.js"></script>
    <script type="text/javascript" src="script.js"></script>


    <script>


    </script>
    

</head>

<body>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header ">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Registration System</span>
                <div class="mdl-layout-spacer"></div>
                <br>
                <br>
                <br>
                <nav class="mdl-navigation ocultar_celular">
                    <a href="#home" class="mdl-navigation__link">Home</a>
                    <a href="#cadastro" class="mdl-navigation__link">Registration</a>
                    <a href="#busca" class="mdl-navigation__link">Search</a>
                    <a href="#login" class="mdl-navigation__link">Login</a>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer mostrar_celular">
            <span class="mdl-layout-title">Menu</span>
            <nav class="mdl-navigation">
                <a href="#home" class="mdl-navigation__link">Home</a>
                <a href="#cadastro" class="mdl-navigation__link">Registration</a>
                <a href="#busca" class="mdl-navigation__link">Search</a>
                <a href="#login" class="mdl-navigation__link">Login</a>
            </nav>
        </div>

        <div id="token" style="display:none;"></div>

        <div class="mdl-layout__content">

            <main>
                <div id="cadastro">
                    <div class="mdl-grid" style="text-align:center;">
                        <div class="mdl-cell mdl-cell--12-col">

                            <h6>Registration System</h6>
                            
                            <input type="hidden" id="codigoEdicao">

                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="nome" style="color:black;" required>
                                <label class="mdl-textfield__label" for="nome">Name:</label>
                            </div>
                            
                            <br>
                            
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="email">E-mail:</label>
                                <input class="mdl-textfield__input" type="text" id="email" style="color:black;" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
                                <span class="mdl-textfield__error">Invalid E-mail.</span>
                            </div>
                          
                            <br>

                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="renda">Salary:</label>
                                <input class="mdl-textfield__input" type="number" id="renda" style="color:black;" pattern="[0-9]" required>
                                <br>
                                <br>
                            </div>
                            <br>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="dataNasc">Data of Birth:</label>
                                <input class="mdl-textfield__input" type="date" id="dataNasc" required style="color:black;">
                                <br>
                                <br>
                            </div>
                            <br>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <label class="mdl-textfield__label" for="sexo">Genre:</label>
                                <select class="mdl-textfield__input" required value="" id="sexo" required>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                <br>
                                <br>
                            </div>
                            <br>
                            <button class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop" id="btnDel">Delete</button>
                            <button class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop" id="btnClr">Clear</button>
                            <button class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop" id="btnEdt">Edit</button>
                            <button class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop" id="btnIst">Insert</button>
                        </div>
                    </div>
                </div>



                <div id="home">

                    <div class="mdl-grid" style="text-align:center;">
                        <div class="mdl-cell mdl-cell--12-col" style="text-align:left;">
                            <h1>Home</h1>
                            <h4>Registration System</h4>
                            <p>This system aims to show the example of jQuery technologies together with PHP and SQLite.</p>
                            <p style="font-size:18px;">
                                jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document <br>
								traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use <br>
								API that works across a multitude of browsers. With a combination of versatility and extensibility, <br>
								jQuery has changed the way that millions of people write JavaScript.<br>
                            </p>
                            <img src="imgs/JQuery_logo.svg" class="logoAngular">
                            <br>
                            <img src="imgs/php.png" class="logo">
                            <img src="imgs/sqlite-logo.png" class="logo">
                        </div>
                    </div>
                </div>

                <div id="login">
                    <div class="mdl-grid" style="text-align:center;">
                        <div class="mdl-cell mdl-cell--12-col">
                            <h6>Login</h6>

                            <div id="divfrmlogin">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <label class="mdl-textfield__label" for="usuario">User:</label>
                                    <input class="mdl-textfield__input" id="usuario" type="text" style="color:black;">
                                </div>
                                <br>
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <label class="mdl-textfield__label" for="senha">Password:</label>
                                    <input class="mdl-textfield__input" id="senha" type="password" style="color:black;">
                                </div>
                                <br>
                            </div>

                            <button id="btnLogin" class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop">Login</button>

                            <button id="btnLogout" class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop">Logout</button>
                        </div>
                    </div>
                </div>

                <div id="busca">
                    <div class="mdl-grid" style="text-align:center;">
                        <div class="mdl-cell mdl-cell--12-col">
                            <h6>Search Registration</h6>
                            
                            <span class="tituloBusca">Enter the search criteria :</span>
                            <br>
                            <label class="mdl-radio mdl-js-radio" for="chkName" style="margin-left:30%;">
                                <input type="radio" name="opcao" id="chkName" class="mdl-radio__button" checked>
                                <span class="mdl-radio__label">For Name</span>
                            </label>
                            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="chkCode">
                                <input type="radio" id="chkCode" name="opcao" class="mdl-radio__button">
                                <span class="mdl-radio__label">For Code</span>
                            </label>
                            <br>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="margin-right:18%;">
                                <label class="mdl-textfield__label" for="dado">Data for search:</label>
                                <input class="mdl-textfield__input" type="text" id="dado" style="color:black;">
                            </div>
                            <br>
                            <button id="btnBuscar" class="mdl-button mdl-js-button mdl-button--primary mdl-button--raised mdl-js-ripple-effect botao_celular botao_desktop">Search</button>
                            <br>
                            <br>
                            <div id="divResultado">
                                <table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp tabela_celular" id="tableSearch">
                                    <thead>
                                        <tr>
                                            <th>CODE</th>
                                            <th class="mdl-data-table__cell--non-numeric">NAME</th>
                                            <th class="mdl-data-table__cell--non-numeric ocultar_celular">EMAIL</th>
                                            <th class="ocultar_celular">SALARY</th>
                                            <th class="mdl-data-table__cell--non-numeric ocultar_celular">DATE BIRTH</th>
                                            <th class="mdl-data-table__cell--non-numeric ocultar_celular">GENRE</th>
                                            <th class="mdl-data-table__cell--non-numeric">EDIT</th>
                                            <th class="mdl-data-table__cell--non-numeric">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </main>
            </div>
        </div>
</body>

</html>