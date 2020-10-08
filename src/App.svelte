<script>
	import CardContainer from './components/CardContainer.svelte';
	import Banner from './components/Banner.svelte';
	import NavBar from './components/NavBar.svelte';
	import Social from './components/Social.svelte';
	import Title from './components/Title.svelte';

</script>

<svelte:head>
	  <!-- font awesome -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

</svelte:head>

<NavBar></NavBar>
<Banner/>

<main>

	<Social/>
	
	<Title>Destacados</Title>
	
	<!-- Contenedor de productos destacados -->
	<CardContainer/>

</main>


<style>

	main {
		margin: 0 auto;
		max-width: 1250px;
		width: 90%;
	}

</style>