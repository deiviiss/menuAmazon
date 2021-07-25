const
  body = document.querySelector('.body'),
  grid = document.getElementById('grid'),
  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
  btnDepartamentos = document.getElementById('btn-departamentos'),
  btnBurguer = document.getElementById('btn-menu-barras'),
  btnRegresarCategoria = document.querySelector('#grid .categorias .btn-regresar'),
  btnCerrar = document.querySelector('.btn-menu-cerrar')
  ;

//Valida dispositivo móvil
esDispositivo = () => innerWidth <= 800;
// esDispositivo = () => {
//   if (window.innerWidth <= 800) {
//     return true
//   }
//   else {
//     return false
//   }
// };

//*eventos desktop

btnDepartamentos.addEventListener('mouseover', () => {
  if (!esDispositivo()) {
    grid.classList.add('activo')
  }

});

grid.addEventListener('mouseleave', () => {
  if (!esDispositivo()) {
    grid.classList.remove('activo')
  }
});

//*eventos movil

btnBurguer.addEventListener('click', (e) => {
  e.preventDefault()
  contenedorEnlacesNav.classList.toggle('activo')
  body.classList.toggle('activo')
});

btnDepartamentos.addEventListener('click', (e) => {
  e.preventDefault()
  grid.classList.add('activo')
  btnCerrar.classList.add('activo')
})

//regresar de categorias
btnRegresarCategoria.addEventListener('click', (e) => {
  e.preventDefault()
  grid.classList.remove('activo')
  btnCerrar.classList.remove('activo')
})

//regresar de subcategorias
btnRegresarSubCategoria = document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar')

btnRegresarSubCategoria.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();

    contenedorSubCategorias.classList.remove('activo');
  })
})

btnCerrar.addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelectorAll('#menu .activo').forEach((elemento) => {
    elemento.classList.remove('activo')
  })
  document.querySelector('body').style.overflow = 'visible';
  // grid.classList.remove('activo')
  // contenedorEnlacesNav.classList.remove('activo')
  // btnCerrar.classList.remove('activo')
})

//*menu
//itera las categorias
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
  elemento.addEventListener('mouseenter', (e) => {

    if (!esDispositivo()) {
      // console.log(e.target.dataset.categoria);
      //itera las subcategorias
      document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {

        categoria.classList.remove('activo');

        // console.log(categoria.dataset.categoria);
        // compara los dataset de categorias y subcategorias
        if (e.target.dataset.categoria == categoria.dataset.categoria) {
          categoria.classList.add('activo')
        }
      })

    }
  })
})

//*menu movíl
//itera las categorias
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
  elemento.addEventListener('click', (e) => {

    if (esDispositivo()) {
      //muestra el contenedor
      contenedorSubCategorias.classList.add('activo');

      // console.log(e.target.dataset.categoria);
      //itera las categorias
      document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {

        categoria.classList.remove('activo');

        // console.log(categoria.dataset.categoria);
        // compara los dataset de categorias y subcategorias
        if (categoria.dataset.categoria == e.target.dataset.categoria) {
          categoria.classList.add('activo')
        }

      })
    }
  })
})
