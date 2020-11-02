<script>
    let img404 = 'assets/404.png';
</script>

<style>
    .Error_Cont {
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 0;
    }

    .Error_Text {
        font-family: Arial, Helvetica, sans-serif;
    }

    .Error_Image {
        height: 200px;
        margin-top: 40px;
    }

</style>

<div class="Error_Cont">
    <h1 class="Error_Text">Error: 404 Page Not Found</h1>    
    <img src={img404} alt="404 NotFound" class="Error_Image" />
 </div>