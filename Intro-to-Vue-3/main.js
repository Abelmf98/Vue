const product = 'Socks'

//Creo la aplicación de Vue
const app = Vue.createApp({
  data(){
    return{
      producto: 'Calcetines',
      descripcion : 'De puro hilo de humo',
      imagen: 'assets/images/socks_blue.jpg',
      tooltip: 'Sin agujeros',
      url:'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
      stock:'4',
      enOferta: false,
      detalles: ['50% algodón', '30% lana', '20% poliester'],
      variantes:[
        {ref: 'A020', color:'green'},
        {ref: 'B022', color:'red'},
        {ref: 'A020', color:'blue'}
      ],
      unidades: 0
    }
  }
})

//#app hace referencia a <div id=app...
window.onload = () =>{const appMontada = app.mount('#app')}
