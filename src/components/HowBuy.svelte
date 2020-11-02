<script>
        import Title from './../components/Title.svelte';
        
</script>



<Title id='comoComprar'>Como Comprar</Title>

<div class="howBuy">
    <ul>
        <li>
            <i class="far fa-calendar-alt"></i>Todos nuestros productos son pintados a mano, uno por uno, tené en cuenta que la demora en la entrega es de 10 a 15 días aproximadamente.
        </li>
        <li>
            <i class="fas fa-hand-holding-usd"></i>Los trabajos personalizados serán agendados con una seña del 50%.
        </li>
        <li>
           <i class="fas fa-cash-register"></i> Trabajamos con todos los medios de pago
            <ul class="payment">
                <li>Efectivo</li>
                <li>Transferencias o depositos bancarios</li>
                <li>Mercado Pago</li>
            </ul>
        </li>
        <li>
            <i class="fab fa-whatsapp-square"></i>Para una mejor organización, los pedidos serán tomados a través de Whatsapp o Email.
            Se deberá enviar la foto del producto, con tu nombre, apellido y tu lugar de entrega.
        </li>
        <li>
            <i class="fas fa-shipping-fast"></i>Los envíos dentro de Buenos Aires se realizan a través de las aplicaciones Uber, Beat o Cabify. Se realizan envíos a todo el país a través de Correo Argentino.
     
        <li>
            <i class="far fa-money-bill-alt"></i>Se debe de abonar la totalidad de la compra antes de ser despachada.
        </li>
        <li>
            <i class="fas fa-cart-arrow-down"></i>Para venta mayorista pedir catálogo con precios.
        </li>
        <li>
            <i class="fas fa-cart-plus"></i> Proximamente podrás comprar a través de nuestra página.
        </li>
    </ul>
</div>

<style>
    
    .howBuy {
        padding: 0 30px;
        padding-bottom: 20px;
    }

    ul{list-style:none;}

    li {
        margin-bottom: 25px;
        line-height: 1.8;
    }

    li i{
        margin-right: 10px;
        color: #F06292;
        font-size: 1.5em;
    }

    li li {
        list-style: circle;
        margin: 10px 0 0 50px;
        text-decoration: #F06292;        
    }


</style>