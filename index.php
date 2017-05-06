<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="footable/footable.core.css">
      <link rel="stylesheet" href="footable/footable.metro.css">
      <link rel="stylesheet" href="datepicker/css/bootstrap-datepicker.min.css">
      <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
      <script type="text/javascript" src="js/script.js"></script>
      <script type="text/javascript" src="js/bootstrap.min.js"></script>
      <script type="text/javascript" src="footable/footable.js"></script>
      <script type="text/javascript" src="footable/footable.paginate.js"></script>
      <script type="text/javascript" src="datepicker/js/bootstrap-datepicker.js"></script>
      <script src="datepicker/locales/bootstrap-datepicker.pt-BR.min.js" type="text/javascript" charset="utf-8" async defer></script>
      <link href="css/crud-css.css" rel="stylesheet" />
      <link rel="shortcut icon" href="img/jquery.ico" type="image/x-icon" />
      <title>Registration jQuery</title>
   </head>
   <body>
      <nav class="navbar navbar-inverse" role="navigation">
         <div class="container">
            <div class="navbar-header">
               <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> 
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button> 
               <a class="navbar-brand" href="#">CrudJQuery</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul class="nav navbar-nav">
                  <li><a href="#home"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                  <li><a href="#cadastro"><span class="glyphicon glyphicon-edit"></span> Registration</a></li>
                  <li><a href="#busca"><span class="glyphicon glyphicon-search"></span> Search</a></li>
               </ul>
               <ul class="nav navbar-nav navbar-right">
                  <li><a href="#login"><span class="glyphicon glyphicon-log-in"></span><span id="lnkLogin"></span></a></li>
               </ul>
            </div>
         </div>
      </nav>


      <div id="home" class="container">
            <h1 class="color2">Home</h1>
            <hr>
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-3">CrudJQuery</h1>
                <p class="lead">Prototype of a Physical Person registration system that shows the jQuery's use (client-side), with PHP(server-side) and SQLite database. Front-end using the framework BootStrap.</p>
              </div>
            </div>
            <div class="row col-md-12">
               <div class="col-md-offset-9">
                  <img class="logoJ" src="img/logoj.png">
               </div>
            </div>
            <div class="row col-md-12">
               <div class="col-md-offset-9">
                  <img class="offset-md-1 logoP" src="img/logop.png">
                  <img class="offset-md-1 logoS" src="img/logos.png">
                  <img class="offset-md-1 logoB" src="img/logob.png">
               </div>
            </div>
      </div>

      <div id="cadastro" class="container">
         <h1 class="color2">Registration</h1> 
            <div id="divFrmCadastro">
                <div class="col-md-8">
                  <div class="form-group">
                    <input type="hidden" class="form-control" id="token" readonly required>
                  </div>
                  <div class="form-group">
                      <input type="hidden" class="form-control" id="codigoEdicao" readonly required>
                  </div>
                  <div class="form-group divErrors" id="divErrors">
                      <ul id="listError"></ul>
                  </div> 
                  <div class="form-group">
                      <label for="nome" class="control-label">Name</label>
                      <input type="text" class="form-control" id="nome" required>
                   </div>
                   <div class="form-group">
                      <label for="email" class="control-label">E-mail</label>
                      <input type="text" id="email" class="form-control"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
                   </div>
                   <div class="form-group">
                      <label for="renda" class="control-label">Salary</label>
                      <input type="number" id="renda" class="form-control"  pattern="[0-9]" required>
                   </div>
                   <div class="form-group">
                      <label for="dataNasc" class="control-label">Date Of Birth</label>
                      <input type='text' data-provide="datepicker" readonly="readonly" class="form-control" data-date-format="dd/mm/yyyy" id="dataNasc" required />
                   </div>
                   <div class="form-group">
                      <label for="sexo" class="control-label">Genre</label>
                      <select required value="" id="sexo" class="form-control"  required>
                         <option value="M">Male</option>
                         <option value="F">Female</option>
                      </select>
                   </div>
                   <div class="form-group">
                      <button type="button" id="btnDelConfirm" class="col-md-2 btn btn-danger" data-toggle="modal" data-target="#confirmDelete">Delete</button>
                      <button id="btnClr" class="col-md-2 btn">Clear</button>
                      <button type="button" id="btnEditConfirm" class="col-md-2 btn btn-warning" data-toggle="modal" data-target="#confirmEdition">Edit</button>
                      <button id="btnIst" class="col-md-2 btn btn-success">Insert</button>
                   </div>
                 </div>
            </div>
      </div>
      

        <div id="login" class="container">
            <h3 class="color2">Login</h3>
            <div class="row">
               <div id="divfrmlogin">
                  <div class="form-group">
                     <div class="form-group" id="divMessage">
                        <div class="divMessage">
                           <ul id="listMessage"></ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div role="form">
                        <div class="form-group">
                           <label for="usuario" class="control-label">User</label>
                           <input id="usuario" type="text" class="form-control" value="admin" required>
                        </div>
                        <div class="form-group">
                           <label for="senha" class="control-label">Password</label>
                           <input id="senha" type="password" class="form-control" value="121181" required>
                        </div>
                        <div class="form-group">
                           <button id="btnLogin" class="col-md-7 btn btn-success">Login</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      

         <div id="busca" class="container">
            <h1 class="color2">Search</h1>
            <h3>Enter the search criteria</h3>
            <div class="radio">
               <label><input type="radio" name="opcao" id="chkName" checked><b>FOR NAME</b></label>
            </div>
            <div class="radio">
               <label><input type="radio" id="chkCode" name="opcao"><b>FOR ID</b></label>
            </div>
            <div class="form-group">
               <label for="dado" class="control-label">Data for search</label>
            </div>
            <div class="form-group">
               <div>
                  <div class="row col-md-3">
                     <input type="text" id="dado" class="form-control" required>
                  </div>
                  <button id="btnBuscar" class="btn btn-primary">Search</button>
               </div>
            </div>
            <div id="divResultado">
               <div class="form-group">
                  <h4>Filter by name</h4>
                  <div class="row col-md-3">
                     <input type="text" id="filtroNome" name="filtroNome" class="form-control" required>
                  </div>
               </div>
               <table id="tableSearch" class="footable" data-page-size="6" data-first-text="FIRST" data-next-text="NEXT" data-previous-text="PREVIOUS" data-last-text="LAST">
                  <thead>
                     <tr>
                        <th>CODE</th>
                        <th>NAME</th>
                        <th class="visible-sm">EMAIL</th>
                        <th class="visible-sm">SALARY</th>
                        <th class="visible-sm">DATE BIRTH</th>
                        <th class="visible-sm">GENRE</th>
                        <th>SELECT</th>
                     </tr>
                  </thead>
                  <tbody>
                  </tbody>
                  <tfoot>
                     <td colspan='5'>
                        <div class='pagination'></div>
                     </td>
                  </tfoot>
               </table>
            </div>
         </div>

      
      <div id="info" class="modal fade" role="dialog">
        <div class="modal-dialog modal-sm">
          <div class="modal-content modal-sm">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" id="titleModal"></h4>
            </div>
            <div class="modal-body">
              <p id="textModal"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>

      <div id="confirmLogout" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content modal-sm">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" id="titleModal">Question</h4>
            </div>
            <div class="modal-body">
              <p id="textModal">Do you want close this session?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-dismiss="modal">No</button> 
              <button type="button" class="btn btn-primary" id="btnLogout" data-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>


      <div id="confirmDelete" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content modal-sm">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" id="titleModal">Question</h4>
            </div>
            <div class="modal-body">
              <p id="textModal">Do you want delete this Physical Person?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-dismiss="modal">No</button> 
              <button id="btnDel" class="btn btn-danger" data-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>

      <div id="confirmEdition" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" id="titleModal">Question</h4>
            </div>
            <div class="modal-body">
              <p id="textModal">Do you want edit this Physical Person?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-dismiss="modal">No</button> 
              <button id="btnEdt" class="btn btn-warning" data-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>

      <script type="text/javascript">   
          j('#dataNasc').datepicker({ dateFormat: 'dd/mm/yy' });
      </script>

     
   </body>
</html>