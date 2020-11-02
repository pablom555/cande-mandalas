<script>

  import { createEventDispatcher } from 'svelte'; 

  // export let isShow = false;
  export let data = {};
  
  const dispatch = createEventDispatcher();

  const clickHandler = () => {
    dispatch('clickShow', data.isShow)
  }

  const moreHandler = (e) => {
    dispatch('moreShow', data)
  }

</script>  

<!-- Html -->  
  <div class="card" class:show={data.isShow} on:click={clickHandler} >
    <div class="card__image-holder">
      <img class="card__image" src={data.img} alt="wave" />
    </div>
    <div class="card-title">
      <a href={void(0)} class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          {data.title}
          <small>{data.subtitle}</small>
          <small>${data.price}</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        {data.description}
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href={void(0)} class="btn" on:click={moreHandler}>Leer Mas</a>
        </div>
      </div>
    </div>
  </div>
  
<style>
  
div.card {
  margin: 10px 8px 50px;
  max-width: 280px;
  box-shadow: 0px 2px 5px -5px rgba(0,0,0,1);
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  width: 300px;
  z-index: 1;
}

div.card:hover {
  transform: scale(1.05);
}

div.card .card__image-holder {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

div.card img {
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

div.card-title {
  background: #ffffff;
  padding: 6px 15px 10px;
  position: relative;
  z-index: 0;
}

div.card-title  a.toggle-info {
  border-radius: 32px;
  height: 32px;
  width: 32px;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 10px;  
}

div.card-title span {
  background: white;
  display: block;
  height: 2px;
  position: absolute;
  top: 16px;
  transition: all 0.15s 0s ease-out;
  width: 12px;
}
      
div.card-title span.left {
  right: 14px;
  transform: rotate(45deg);
}

div.card-title span.right {
  left: 14px;
  transform: rotate(-45deg);
}
    
div.card-title h2 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin-top: 5px;
  padding: 0;
}

div.card-title h2 small {
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin-top: 5px
}
  
a.btn {
  background: #F06292;
  border-radius: 4px;
	box-shadow: 0 1px 0px 0 rgba(0,0,0,0.25);
  color: white;
  display: inline-block;
  padding: 6px 8px;
  position: relative;
  text-decoration: none;
	transition: all 0.1s 0s ease-out;
}

a.btn:hover {
  filter: brightness(95%);
  box-shadow: 0px 4px 1px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-1px);
  transition: all 0.25s 0s ease-out;
}


div.card-description {
  padding: 0 15px 10px;
  position: relative;
  font-size: 14px;
}

div.card-actions {
	box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
  padding: 10px 15px 20px;
  text-align: center;
}
  
div.card-flap {
  background: #ffffff;
  position: absolute;
  width: 100%;
  transform-origin: top;
  transform: rotateX(-90deg);
}

div.flap1 {
  transition: all 0.3s 0.3s ease-out;
  z-index: -1;
}

div.flap2 {
  transition: all 0.3s 0s ease-out;
  z-index: -2;
}  

div.card.show {
  opacity: 1 !important;
  transform: scale(1) !important;
  z-index: 10;
}

div.card.show div.card-title a.toggle-info{
  background: #fccb6e
}

div.card.show div.card-title a.toggle-info span {
  top: 15px;
  background: white;
}

div.card.show  div.card-title span.left {
  right: 10px;
}

div.card.show  div.card-title span.right {
 left: 10px;
}

div.card.show div.card-flap {
  background: #ffffff;
  transform: rotateX(0deg);
}

div.card.show div.flap1 {
  transition: all 0.3s 0s ease-out;
}
  
div.card.show div.flap2 {
  transition: all 0.3s 0.2s ease-out;
}

</style>