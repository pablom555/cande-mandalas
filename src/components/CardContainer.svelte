<script>
	
  import Card from './Card.svelte';
  import ProductDetail from './ProductDetail.svelte';
  import * as animateScroll from "svelte-scrollto";
  
  let products = [
    {
      id: 1, 
      title: 'Titulo', 
      subtitle: 'Subtitulo producto', 
      description: "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.", 
      img: "https://source.unsplash.com/300x225/?wave",
      price: 450,
      isShow: false
    },
    {
      id: 2, 
      title: 'Titulo', 
      subtitle: 'Subtitulo producto', 
      description: "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.", 
      img: "https://source.unsplash.com/300x225/?wave",
      price: 250,
      isShow: false
    },
    {
      id: 3, 
      title: 'Titulo', 
      subtitle: 'Subtitulo producto', 
      description: "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.", 
      img: "https://source.unsplash.com/300x225/?wave",
      price: 500,
      isShow: false
    },
    {
      id: 4, 
      title: 'Titulo', 
      subtitle: 'Subtitulo producto', 
      description: "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.", 
      img: "https://source.unsplash.com/300x225/?wave",
      price: 465,
      isShow: false
    },
  ]

  let isShowing = false;
  let isMore = false;
  let selectedData;

  const clickShowHandler = (id) => {

    products = products.map((product) => {

      if (product.id != id) {
        product.isShow = false
      } else {
        product.isShow = !product.isShow
        isShowing = product.isShow
      }

      return product

    })

  }

  const moreShowHandler = (id, data) => {

    selectedData = data;
    isMore = true
    animateScroll.scrollTo({element: '#destacados'})

  }

</script>

<div class="cards" class:showing={isShowing} >
  
  {#if isMore}
    <ProductDetail
      data={selectedData} 
      on:click={() => isMore = false} />
  {/if}

  {#each products as product (product.id)}
    <Card data={product}
          on:clickShow={() => clickShowHandler(product.id)} 
          on:moreShow={(data) => moreShowHandler(product.id, data.detail)}
          
    />
  {/each}

</div>

<style>
  
div.cards {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

div.cards.showing :global(div.card) {
    cursor: pointer;
    opacity: 0.6;
    transform: scale(0.88);  
}

div.cards.showing :global(div.card:hover) {
    opacity: 0.94;
    transform: scale(0.92);
}

</style>


<!-- $(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
}); -->