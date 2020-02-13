// ESTE CODIGO ES PARA EL EFECTO DE GOTICAS DE AGUA


// jQuery(document).ready(function() {
//     "use strict"

//     $('.lider').ripples({
//         dropRadius: 10,
//         perturbance: 0.01,
//       });
// });

// esto es para el menu

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;



// este es para que se jecute la funsion que escribimos mas abajo del scroll
function menus() {
  desplazamiento_Actual = window.pageYOffset;
  if (desplazamiento_Actual <=800) {
    nav.classList.remove('nav2');
    nav.className = ('nav1');
    nav.style.transition = '1s';
    menu.style.top = '80px';
    abrir.style.color = '#fff';

  }else{
    nav.classList.remove('nav1');
    nav.className = ('nav2');
    nav.style.transition = '1s';
    menu.style.top = '100px';
    abrir.style.color = '#000';


  }
}

// esta funsion hace parte tambien del menu responsive
function apertura() {
  if (cerrado) {
    menu.style.width = '70vh';
    cerrado = false;
  }else{
    menu.style.width = '0%';
    menu.style.overflow = 'hidden'
    cerrado = true;
  }
}

// este codigo es para que el seundo menu se muestre bien se cargue bien en tamaño pqueño
window.addEventListener('load',function() {
  menus();
});
// este evento es para que ce cierre el menu cuando demos click en cualquier parte
window.addEventListener('click', function(e) {
  if (cerrado==false) {
    let span = document.querySelector('span');
    if (e.target!== span && e.target !== abrir) {
      // aui le vamos a decir si lo que tocamos es diferente a estos otros elementes, cierralo
      menu.style.width = '0%';
      menu.style.overflow = 'hidden'
      cerrado = true;
    }
  }
});
// esto es para que cada vez que se haga scroll se ejecute una funsion

window.addEventListener('scroll', function() {
  console.log(window.pageYOffset);
  menus();
})

// esta es la funsion para que el menu se abra en modo responsive
window.addEventListener('resize', function() {
  if (screen.width>= 700) {
    cerrado = true;
    menu.style.removeProperty('overflow');
    menu.style.removeProperty('width');
  }
});

abrir.addEventListener('click', function() {
  apertura()
})



// este es el efecto del portafolio con jquery

$(document).ready(function() {
  $('.enlaces').click(function() {
    var valor = $(this).attr('data-nombre');

    if (valor == 'todos') {
      $('.filtro').show('1000')
// aqui se le esta diciendo que todos los que no tengan la clase los esconda
    }else{
      $('.filtro').not('.'+ valor).hide('1000');
      // muestra alos que no tengan la clase
      $('.filtro').filter('.'+ valor).show('1000');
    }

  // esto es para la clase active
  $('ul .enlaces').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
  })
})

// validar fomurlario

function validar () {
  var nombre, correo, send, expesion; 
  // value es para que guarde su valor
  nombre = document.getElementById("nombre").value;
  correo =  document.getElementById("correo").value;

  // esta podria ser una mejor forma de hacerlo
  // if (nombre==="" || correo === "") {
  //   alert('Todos los campos deben estar ');
  //   return false;
  // }
expresion = /\w+@\w+\.+[a-z]/;

  if (nombre === "") {
    alert("El campo nombre esta vacio");
    return false
  }
  else if (correo === "") {
    alert("El campo correo esta vacio");
    return false;
  }
  else if (nombre.length>30) {
    alert("el nombre es muy largo");
    return false;
  }
  else if (correo.length>100) {
    alert("el correo es muy largo");
    return false;
  }

  else if (!expresion.test) {
    alert("el correo no es valido");
    return false;
  }

  }