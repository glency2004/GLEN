
<html>
<head>
<link rel="stylesheet" type="text/css" href=Pets.css />
 <title> Validaciones con Javascript </title>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
 <link rel="stylesheet" href="Pets.css">
 <script type="text/Javascript" src="js/jquery.js">
    
 
    </head>
    <body>
    <!--Menu de navegacion del sitio-->
    
<ul class="navbar">

  <li> <a href="PETSHOP.htm"> NUESTROS SERVICIOS</a></li>
   <li> <a href="ALIMENTO%20PERRO.htm"> ALIMENTO PARA PERROS</a></li>
    <li> <a href="ALIMENTO%20GATO.htm"> ALIMENTO PARA GATOS </a> </li>
    
  
<!-------------------------------------------------------------------->
              <!--ESTE ES LA CABECERA DE NUESTRO DOCUMENTO INDEX-->
              <header class="header">
                  <a href="NuevoPets.htm">
              
                  <title>Formulario de Características de la Mascota</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY"></script>
    <script>
        // Inicialización de Google Maps
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
            var geocoder = new google.maps.Geocoder();

            document.getElementById('submit').addEventListener('click', function() {
                geocodeAddress(geocoder, map);
            });
        }

        function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('address').value;
            geocoder.geocode({'address': address}, function(results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    </script>
</head>
<body onload="initMap()">
    <div class="container">
        <h1>Formulario de Registro de Mascotas</h1>
        <form action="process_form.php" method="POST" enctype="multipart/form-data">
            <fieldset>
                <h2>Informacion General</h2>

                <label for="codigo">Código:</label>
                <input type="text" id="codigo" name="codigo" required>

                <label for="fecha">Fecha:</label>
                <input type="date" id="fecha" name="fecha" required>

                <label for="nombre_propietario">Nombre Propietario/Denunciante:</label>
                <input type="text" id="nombre_propietario" name="nombre_propietario" required>

                <label for="address">Zona (Dirección):</label>
                <input type="text" id="address" name="zona" required>
                <div id="map" style="height: 400px; width: 100%;"></div>

                <label for="motivo">Motivo:</label>
                <select id="motivo" name="motivo" required>
                    <option value="entrega_voluntaria">Entrega Voluntaria</option>
                    <option value="denuncia">Denuncia</option>
                    <option value="captura">Captura</option>
                    <option value="vigilancia_epidemiologica">Vigilancia Epidemiológica</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>Características de la Mascota</legend>
                <label for="fotografia">Agregar Fotografía:</label>
                <input type="file" id="fotografia" name="fotografia" accept="image/*" required>

                <label for="nombre_mascota">Nombre de la Mascota:</label>
                <input type="text" id="nombre_mascota" name="nombre_mascota" required>

                <label for="especie">Especie:</label>
                <select id="especie" name="especie" required>
                    <option value="canino">Canino</option>
                    <option value="felino">Felino</option>
                </select>

                <label for="raza">Raza:</label>
                <input type="text" id="raza" name="raza" required>

                <label for="edad">Edad:</label>
                <select id="edad" name="edad" required>
                    <option value="cachorro">Cachorro (0 a 1 año)</option>
                    <option value="adulto">Adulto (1 a 8 años)</option>
                    <option value="longevo">Longevo (arriba de 8 años)</option>
                </select>

                <label for="sexo">Sexo:</label>
                <select id="sexo" name="sexo" required>
                    <option value="hembra">Hembra</option>
                    <option value="macho">Macho</option>
                </select>

                <label for="color">Color:</label>
                <input type="text" id="color" name="color" required>

                <label for="estado">Estado de la Mascota:</label>
                <select id="estado" name="estado" required>
                    <option value="sano">Sano</option>
                    <option value="enfermedad_leve">Enfermedad Leve</option>
                    <option value="enfermedad_grave">Enfermedad Grave</option>
                    <option value="enfermedad_terminal">Enfermedad Terminal</option>
                    <option value="atropellado">Atropellado</option>
                    <option value="sospechoso_rabia">Sospechoso a Rabia</option>
                </select>

                <label for="observaciones">Observaciones:</label>
                <textarea id="observaciones" name="observaciones" rows="4"></textarea>
            </fieldset>

            <fieldset>
                <legend>Retirado</legend>
                <label for="nombre_retirado">Nombre:</label>
                <input type="text" id="nombre_retirado" name="nombre_retirado">

                <label for="fecha_retirado">Fecha:</label>
                <input type="date" id="fecha_retirado" name="fecha_retirado">
            </fieldset>

            <fieldset>
                <legend>Adopción</legend>
                <label for="nombre_adopcion">Nombre:</label>
                <input type="text" id="nombre_adopcion" name="nombre_adopcion">

                <label for="fecha_adopcion">Fecha:</label>
                <input type="date" id="fecha_adopcion" name="fecha_adopcion">
            </fieldset>

            <fieldset>
                <legend>Procedimiento Según Normativa</legend>
                <label for="fecha_procedimiento">Fecha:</label>
                <input type="date" id="fecha_procedimiento" name="fecha_procedimiento">
            </fieldset>

            <button type="submit" id="submit">Enviar</button>
        </form>
    </div>
</body>
</html>
   

                  </a>
              </header>
               <!---FIN DEL HEADER-->