<script>
  // your script goes here
</script>

<nav>

  <div class="logo">
    <h1>Candu Mandalas</h1> 
  </div>

  <div class="menu">
    <ul>
      <li>Inicio</li>
      <li>Productos</li>
      <li>Como Comprar</li>
      <li>Sobre Mi</li>
    </ul>
  </div>

</nav>

<style>
  
  nav {
    padding: 20px 100px;
    display: flex;
    align-items: center;
  }


  h1{
    font-family: 'Sacramento', cursive;
    color: #424949;
    font-size: 45px;
    letter-spacing: 2px;
    cursor: pointer;
    
    text-shadow: -1px -1px 0px#566573,
                  1px 1px 0px #F8F9F9,
                  5px 5px 10px #607D8B;
  }

  h1:hover {
    text-shadow: -1px -1px 0px#566573,
                  1px 1px 0px #F8F9F9,
                  5px 5px 13px #607D8B;
  }

  .menu {
    flex-grow: 1;
  }

  .menu ul {
    list-style: none;
    padding: 0 30px;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
  }

  .menu li {
    cursor: pointer;    
    position: relative;
    padding: 5px;
  }

  .menu li:hover {
    color:#424949;
  }

  .menu li::before {
    content: '';
    width: 0;
    height: 3px;
    background: -webkit-linear-gradient(50deg, #fccb6e 5%, #F06292 90%);
    background:    -moz-linear-gradient(50deg, #fccb6e 5%, #F06292 90%);
    background:     -ms-linear-gradient(50deg, #fccb6e 5%, #F06292 90%);
    background:      -o-linear-gradient(50deg, #fccb6e 5%, #F06292 90%);
    background:         linear-gradient(50deg, #fccb6e 5%, #F06292 90%);
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all .2s;
  }

  .menu li:hover::before {
    width: 100%;
  }
  
</style>