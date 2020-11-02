<script>
  
  import { scale, fade } from 'svelte/transition';
  import Button from './Button.svelte';
  import Carousel from './Carousel.svelte';
  import * as animateScroll from "svelte-scrollto";

  export let data = {};
  
</script>

<div class="detail" in:scale out:fade> 

    <a href={void(0)} class="close" on:click>
        <span class="left"></span>
        <span class="right"></span>
    </a>

    <div class="imgs">
        <Carousel/>
    </div>
  
    <div class="description">
        <h2>
            {data.title}
            <small>{data.subtitle}</small>
        </h2>
        <p>{data.description}</p>

        <h2 class="precio"><span>$</span>{data.price}</h2>

        <Button on:click={() => animateScroll.scrollTo({element: '#comoComprar'})}>Como Comprar</Button>
    </div>
  
</div>

<style>

  .detail{
    width: 100%;
    height: 400px;
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0px 2px 5px -5px rgba(0,0,0,1);

    display: flex;
  }

  .detail .close {
    background-color: #fccb6e;
    border-radius: 32px;
    height: 32px;
    width: 32px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 10px;  
  }

  .detail .close:hover {
  filter: brightness(95%);
  box-shadow: 0px 4px 1px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-1px);
  transition: all 0.25s 0s ease-out;
  }

  .close span {
    background: white;
    display: block;
    height: 2px;
    position: absolute;
    top: 15px;
    transition: all 0.15s 0s ease-out;
    width: 12px;
  }
      
  .close span.left {
    right: 10px;
    transform: rotate(45deg);
  }

  .close span.right {
    left: 10px;
    transform: rotate(-45deg);
  }

  .imgs {
    /* background: #EEE;  */
    width: 50%;
    /* border-right: 1px solid rgba(0,0,0,0.1); */
  }

  .description {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  }

  .description h2 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-align: left;
  }

  .description h2 small {
    display: block;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: -0.025em;
    margin-top: 5px
  }

  .description p {
    margin-top: 20px;
    text-align: left;
  }

  h2.precio {
    font-size: 50px;
    font-weight: 400;
    margin: 20px 0;
    text-align: left;
  }

  h2.precio span {
    font-weight: 100;
    font-size: 20px;
    vertical-align: middle;
  }

</style>