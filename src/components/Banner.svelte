<script>
  let giraMandala = false;
</script>

<div class="banner">
  <div class="banner-left">
    <p>Nuestros productos son de primera calidad, tratados y protegidos para una larga vida útil lleno de color.</p>
  </div>
  <div class="banner-center">
    <div class="mandala  animate__animated animate__rotateIn" ></div>
    <h2>Candu Mandalas {giraMandala}</h2>
  </div>

  <div class="banner-right">
    <p>Productos de algarrobo y calden, resistentes al calor y preparados con amor para acompañarlos en su vida cotidiana.</p>
  </div>
</div>

<style>

  .banner {
    width: 100%;
    height: 350px;

    background: -webkit-linear-gradient(50deg, #F06292 5%, #fccb6e 90%);
    background:    -moz-linear-gradient(50deg, #F06292 5%, #fccb6e 90%);
    background:     -ms-linear-gradient(50deg, #F06292 5%, #fccb6e 90%);
    background:      -o-linear-gradient(50deg, #F06292 5%, #fccb6e 90%);
    background:         linear-gradient(50deg, #F06292 5%, #fccb6e 90%);
    
    border-top: 1px solid #F06292;
    border-bottom: 1px solid #fccb6e;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner>div {
    flex-basis: 33%;
  }

  .banner-left {
    padding: 40px;
    line-height: 2;
    color: white;
  }

  .banner-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner-right {
    padding: 40px;
    line-height: 2;
  }

  .mandala {
    width: 220px;
    height: 200px;
    background: url('./../assets/mandala.png') no-repeat center center/cover;
  }

  .banner h2 {
    font-family: 'Sacramento', cursive;
    color: #424949;
    font-size: 35px;
    letter-spacing: 2px;
    cursor: pointer;
    
    text-shadow: -1px -1px 0px #B3B6B7,
                  1px 1px 0px transparent,
                  5px 5px 10px #607D8B;
  }

</style>