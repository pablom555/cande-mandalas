<script>

    import { slide } from "svelte/transition";

    let imgs = ["https://source.unsplash.com/300x225/?mountain",
    "https://source.unsplash.com/300x225/?wave",
    "https://source.unsplash.com/300x225/?field"]

    let slideShow = 0;

    const clickHandler = (slide) => {
        slideShow = slide;
    }

</script>

<!-- Html -->
<div class="container">

    <div class="slider">
        <ul>            
            {#each imgs as img, i (i)}
                <li class={slideShow===i? 'visible': 'not-visible' }>
                    <img src={img} alt={`Image ${i}`}/>
                </li>
            {/each}
        </ul>        
    </div>

    <ul class="mini">
        {#each imgs as img, i (i)}
             <li>
                <a href={void(0)} on:click={() => clickHandler(i)} >
                     <img src={img} alt={`Image ${i}`}/>
                </a>                
             </li>
        {/each}
    </ul>
</div>

<style>
    .container {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
    }

    .slider {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slider ul {
        position: relative;
        width: 95%;
        height: 90%;
    }

    .slider ul li {
        position: absolute;
        left: 0;
        top: 0;
        /* opacity: 0; */
        width: 100%;
        height: 100%;
        transition: opacity 0.5s;
    }

    .slider ul li img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .visible {
        opacity: 1;
        z-index: 999;
    }

    .not-visible {
        opacity: 0;
        z-index: 0;
    }

    ul.mini {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .mini li {
        width: 150px;
        height: 100px;
    }

    a.mini li a {
        width: 100%;
        height: 100%; 
    }

    .mini li img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
        transition: all 0.3s 0s ease-in;
        border-radius: 4px;
    }

    .mini li img:hover {        
        opacity: .9;
        transform: scale(1.05);
    }

</style>

