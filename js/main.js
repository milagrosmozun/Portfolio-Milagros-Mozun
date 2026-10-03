/* =============================================
   PORTFOLIO - MILAGROS MOZUN
   main.js

   El sitio funciona sin JavaScript: esto sólo agrega
   tres comodidades (abrir el menú en celular, cambiar
   el tema y el tamaño de texto) y el año del pie.
   ============================================= */


/* ---------------------------------------------
   1. BOTÓN "MENÚ" EN PANTALLAS CHICAS
   Agrega o saca la clase "abierta" del <nav>.
--------------------------------------------- */
var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu-principal");

botonMenu.addEventListener("click", function () {
    var estaAbierto = menu.classList.toggle("abierta");
    botonMenu.setAttribute("aria-expanded", estaAbierto);
});


/* ---------------------------------------------
   2. BOTÓN "ACCESIBILIDAD"
   Abre y cierra el panel de opciones.
--------------------------------------------- */
var botonAccesibilidad = document.getElementById("boton-accesibilidad");
var panel = document.getElementById("panel-accesibilidad");

botonAccesibilidad.addEventListener("click", function () {
    var estaAbierto = panel.classList.toggle("abierto");
    botonAccesibilidad.setAttribute("aria-expanded", estaAbierto);
});


/* ---------------------------------------------
   3. TEMA CLARO / OSCURO
   Escribe el atributo data-tema en la etiqueta <html>.
   El CSS se encarga del resto cambiando las variables.
--------------------------------------------- */
var botonesTema = document.querySelectorAll("[data-tema]");

botonesTema.forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.documentElement.setAttribute("data-tema", boton.dataset.tema);
        marcarActivo(botonesTema, boton);
    });
});


/* ---------------------------------------------
   4. TAMAÑO DE TEXTO
   Escribe el atributo data-texto en <html>, que cambia
   el font-size base y agranda todo lo que está en rem.
--------------------------------------------- */
var botonesTexto = document.querySelectorAll("[data-texto]");

botonesTexto.forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.documentElement.setAttribute("data-texto", boton.dataset.texto);
        marcarActivo(botonesTexto, boton);
    });
});


/* ---------------------------------------------
   5. FUNCIÓN AUXILIAR
   Deja la clase "activa" sólo en el botón elegido.
--------------------------------------------- */
function marcarActivo(grupo, elegido) {
    grupo.forEach(function (boton) {
        boton.classList.remove("activa");
    });
    elegido.classList.add("activa");
}


/* ---------------------------------------------
   6. AÑO ACTUAL EN EL PIE DE PÁGINA
--------------------------------------------- */
document.getElementById("anio").textContent = new Date().getFullYear();
