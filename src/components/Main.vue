<template>
    <div class="box-all">
        <div class="box-items">
            <div class="container-all">
                <div>
                    <h2>Elige tu tipo de pan</h2>
                </div>
                <div class="container-items">
                    <div v-for="pan in panes" :key="pan.id" class="item">
                        <p class="name-item">{{pan.name}}</p>
                        <img src="https://www.bembos.com.pe/media/wysiwyg/menu/tacuchay-menu.webp" alt="">
                        <p class="price-item">S/. {{pan.price}}</p>
                        <button class="btnAdd" @click=agregar>AGREGAR</button>
                    </div>
                </div>
            </div>
            <div class="container-all">
                <div>
                    <h2>Elige tu tipo de Carne</h2>
                </div>
                <div class="container-items">
                    <div v-for="carne in carnes" :key="carne.id" class="item">
                        <p class="name-item">{{carne.name}}</p>
                        <img src="https://www.bembos.com.pe/media/wysiwyg/menu/tacuchay-menu.webp" alt="">
                        <p class="price-item">S/. {{carne.price}}</p>
                        <button class="btnAdd" @click=agregar>AGREGAR</button>
                    </div>
                </div>
            </div>
            <div class="container-all">
                <div>
                    <h2>Elige tu tipo de queso</h2>
                </div>
                <div class="container-items">
                    <div v-for="queso in quesos" :key="queso.id" class="item">
                        <p class="name-item">{{queso.name}}</p>
                        <img src="https://www.bembos.com.pe/media/wysiwyg/menu/tacuchay-menu.webp" alt="">
                        <p class="price-item">S/. {{queso.price}}</p>
                        <button class="btnAdd" @click=agregar>AGREGAR</button>
                    </div>
                </div>
            </div>
            <div class="container-all">
                <div>
                    <h2>Elige tu tipo de verdura</h2>
                </div>
                <div class="container-items">
                    <div v-for="verdura in verduras" :key="verdura.id" class="item">
                        <p class="name-item">{{verdura.name}}</p>
                        <img src="https://www.bembos.com.pe/media/wysiwyg/menu/tacuchay-menu.webp" alt="">
                        <p class="price-item">S/. {{verdura.price}}</p>
                        <button class="btnAdd" @click=agregar>AGREGAR</button>
                    </div>
                </div>
            </div>
            <div class="container-all">
                <div>
                    <h2>Elige tu tipo de complementos</h2>
                </div>
                <div class="container-items">
                    <div v-for="complemento in complementos" :key="complemento.id" class="item">
                        <p class="name-item">{{complemento.name}}</p>
                        <img src="https://www.bembos.com.pe/media/wysiwyg/menu/tacuchay-menu.webp" alt="">
                        <p class="price-item">S/. {{complemento.price}}</p>
                        <button class="btnAdd" @click=agregar>AGREGAR</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-now">
            <h2>Resumen de Pedido</h2>
            <div class="container-pedidos">
                <div v-for="order in orders" :key="order.id" class="pedido-items">
                    <div>
                        <div>{{order.name}}</div>
                        <div>{{order.precio}}</div>
                        <button @click="killed">Eliminar</button>
                    </div>
                </div>
            </div>
            <button class="btnAdd" @click="tomarPedido" >Enviar Pedido</button>

        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name : 'Main',
    data(){
        return{
            products : [],
            panes : [],
            carnes : [],
            quesos : [],
            verduras : [],
            complementos : [],
            papas : [],
            bebidas : [],
            orders : [],
            

        }
    },
    methods: {
        getApi(){
            axios.get('https://api.myjson.com/bins/1008dw')
                .then(res=>{
                    this.obtenerDatos(res.data)
                    
                })
        },
        obtenerDatos(info){
            this.panes=(info[0].category01);
            this.carnes = info[0].category02;
            this.quesos = info[0].category03;
            this.verduras = info[0].category04;
            this.complementos = info[0].category05

            

        },
        agregar(e){
            e.preventDefault;
            class orderItems{
                constructor(name,precio){
                    this.name = name,
                    this.precio = precio
                }
            }
            
            let item= e.target.parentElement;
            let order = new orderItems(item.querySelector('.name-item').textContent,item.querySelector('.price-item').textContent)

            this.orders.push(order);
            

        },
        killed(e){
            e.target.parentElement.remove();
        },
        tomarPedido(e){
            let ordenCocina = e.target.parentElement.querySelector('.container-pedidos');
            console.log(ordenCocina)
        }

    },
    created(){
        this.getApi()
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
}
.box-all{
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    
}
.box-items{
    max-width: 800px;
    width: 100%;
    margin: 0 0 20px 0px;
    
}
.container-all{
    display: grid;
    flex-direction: column;
    border: 1px solid #26419a;
    max-width: 1100px;
    width: 100%;
    margin: 20px;
    border-radius: 6px; 
}
.container-items{
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 10px auto;
    padding: 10px;
    
}
.item{
    border: 1px solid #ffb500;
    padding: 10px;
    border-radius: 6px; 
}
.btnAdd{
    cursor: pointer;
    border: none;
    width: 100%;
    height: 30px;
    background: #193694;
    color: #ffffff;
    font-size: 14px;

}
.order-now{
    border: 1px solid #ffb500;
    width: 350px;
    height: 400px;
    position: fixed;
    right: 5%;
    top: 25%;
    

}
.pedido-items > div{
    display: flex;
    justify-content: space-around;
    padding: 10px;
}
@media screen and (max-width: 768px){
    .box-all{
        flex-direction: column;
        
    }
    .container-all{
        max-width: 700px;
        width: 80%;
    }
    .container-items{
        grid-template-columns: 1fr 1fr;
        
        
    }
    .order-now{
        position:sticky ;
    }
    }
@media screen and (max-width: 576px){
    .box-all{
        flex-direction: column;
    }
    .container-all{
        max-width: 550px;
        width: 90%;
    }
    .container-items{
        grid-template-columns: 1fr;
        
    }
    }
</style>
