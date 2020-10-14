<script>
  import { scale, fade } from 'svelte/transition';
</script>

<div class="detail" in:scale out:fade> 
  <a href="#0" class="close" on:click>
    <span class="left"></span>
    <span class="right"></span>
  </a>
</div>

<style>

  .detail{
    width: 100%;
    height: 400px;
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0px 2px 5px -5px rgba(0,0,0,1);;
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

</style>