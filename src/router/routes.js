import Home from './../pages/Home.svelte';
import Products from './../pages/Products.svelte';
import NotFound from './../pages/NotFound/NotFound.svelte';

const routes = {
    '/': Home,
    '/products/': Products,
    '*': NotFound
};

export default routes;