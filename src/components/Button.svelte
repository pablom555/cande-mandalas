<script>
    // your script goes here
</script>

<!-- Html --> 
<a href={void(0)} class="btn" on:click><slot></slot></a>

<style>

    a.btn {
        background: #F06292;
        border-radius: 4px;
	    box-shadow: 0 1px 0px 0 rgba(0,0,0,0.25);
        color: white;
        display: inline-block;
        font-weight: 600;
        padding: 8px 10px;
        position: relative;
        text-decoration: none;
        transition: all 0.1s 0s ease-out;
    }

    a.btn:hover {
        filter: brightness(95%);
        box-shadow: 0px 4px 1px 0 rgba(0, 0, 0, 0.075);
        transform: translateY(-1px);
        transition: all 0.25s 0s ease-out;
        cursor: pointer;
    }

</style>


