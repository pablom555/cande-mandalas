<script>
  export let id;
</script>

<h2 {id}><slot></slot></h2>

<style>
  h2 {
    letter-spacing: 2px;
    font-size: 30px;
    margin: 50px 0 30px 0;
    text-align: center;
    display: flex;    
    justify-content: center;
  }

  h2::before, h2:after {
    flex-grow: 1;
    height: 1px;
    content: '\a0';
    background-color: #7D7D7D;
    position: relative;
    top: 0.7em;
  }

  h2::before {
    margin-right: 15px;
  }

  h2::after {
    margin-left: 15px;
  }

</style>