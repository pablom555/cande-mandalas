<script>

	import NavBar from './components/NavBar.svelte';
	import Banner from './components/Banner.svelte';
	import Social from './components/Social.svelte';	
	import HowBuy from './components/HowBuy.svelte';
	import AboutMe from './components/AboutMe.svelte';
	import Footer from './components/Footer.svelte';

	import Router from 'svelte-spa-router';
	import routes from './router/routes';


</script>

<svelte:head>
	<!-- font awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" >		
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

</svelte:head>



<!-- Html -->
<NavBar></NavBar>
<Banner/>

<main>

	<Social/>

	<Router {routes} />

	<HowBuy/>
	<AboutMe/>

</main> 

<Footer/>


<style>

	main {
		margin: 0 auto;
		max-width: 1024px;
		width: 90%;
	}

</style>