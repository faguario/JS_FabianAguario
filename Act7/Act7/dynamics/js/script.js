$(document).ready(function() {
  $(".results").load("./dynamics/php/Consultas.php");

  $(".submitcarr").on("click", ()=>{
    let carrera=$("input").val();
    let peticion=$.ajax({ 
        url: "./dynamics/php/Consultas.php",
        data: {busq: carrera},
        method: "POST"
    });
    peticion.done((resp) =>{
        $(".results").html(resp);
    });
    peticion.fail((resp) => {
        $(".results").html("<h1>fallaste ups </h1>");
    })
  });
  $(".submitcarr").on("click", ()=>{
    let filtro=$("select").val();
    let peticion2=$.ajax({
        url: "./dynamics/php/Consultas.php",
        data: {dato: filtro},
        method: "POST"
    });
    peticion2.done((resp ) =>{
        $(".results").html(resp);
    });
  });

});
