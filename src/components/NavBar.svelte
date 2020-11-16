<script>

    import { push } from "svelte-spa-router";
    import * as animateScroll from "svelte-scrollto";

    const goTo = (page, moveto) => {

        push(page);
        moveTo(moveto);
    }

    const moveTo = (where) => {
        animateScroll.scrollTo({element: where})
    }

</script>

<nav>

  <div class="logo">
    <h1>Candu Mandalas</h1> 
  </div>

  <div class="menu">
    <ul>
      <li on:click={() => goTo('/', '.logo')}>Inicio</li>
      <li on:click={() => goTo('/products', '#destacados')}>Productos</li>
      <li on:click={() => moveTo('#comoComprar')}>Como Comprar</li>
      <li on:click={() => moveTo('#sobreMi')}>Sobre Mi</li>
    </ul>
  </div>

</nav>

<style>
  
  nav {
    padding: 15px 100px;
    background-color: #F8F9F9;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0px 2px 5px -5px rgba(0,0,0,1);

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

  
  @media (max-width: 960px) {

    nav {
        padding: 15px 50px;
    }

  }

  @media (max-width: 870px) {

    nav {
        padding: 15px 20px;
    }
    
    h1{
        font-size: 40px;
    }

    .menu ul {
        padding: 0 20px;
        font-size: 16px;
    }
  
  }
  
  @media (max-width: 770px) {

    .logo {
        display: none;
    }

    nav {
        padding: 15px 20px;
    }

    .menu ul {
        padding: 0 30px;
        font-size: 18px;
    }

  }


  @media (max-width: 770px) {

    nav {
        padding: 15px 10px;
    }

    .menu ul {
        padding: 0 20px;
        font-size: 16px;
    }
  }

  @media (max-width: 450px) {

    nav {
        padding: 15px 5px;
    }

    .menu ul {
        padding: 0 10px;
        font-size: 16px;
    }
  }  

  @media (max-width: 380px) {

    nav {
        padding: 15px 2px;
    }

    .menu ul {
        padding: 0 5px;
        font-size: 14px;
    }
  }   
  
</style>