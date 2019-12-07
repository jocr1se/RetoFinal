<template>
    <div id="container">
     <header>
        <div class="portada"> 
        <ul>
            <li><img src="@/assets/promo3.jpg" alt=""></li>
            <li><img src="@/assets/promo4.png" alt=""></li>
            <li><img src="@/assets/promo5.jpg" alt=""></li>
            <li><img src="@/assets/promo6.png" alt=""></li>
            <li><img src="@/assets/promo5.jpg" alt=""></li>
            <li><img src="@/assets/promo6.png" alt=""></li>
            <li><img src="@/assets/promo3.jpg" alt=""></li>
            <li><img src="@/assets/promo4.png" alt=""></li>
         
        </ul>
        </div>
    </header>
    <main>
        <div class="listadoComida">
                
                <div id="espera" class="comidas"> 
                        <h1>En Espera</h1>
                </div>
                <div class="accion">
                
                    <button class="button">Cocinar Orden</Button>
                    <button class="button">Devolver Orden</button>
                </div>
               
                <div id="procesado" class="comidas">
                        <h1>Cocinados</h1>
                </div>
        </div>
    </main>
    <footer>
        
    </footer>
    </div>
</template>

<script>

export default {

}
</script>

<style>
header{
    width: 100%;
    height: 20%;
}
main{
    width: 100%;
    height: 60%;
}

.portada img{
    background: #26419a;
    width: 100%;
    height: 100%;
}
.portada ul{
    display: flex;
    padding: 0;
    width: 400%;
    height: 100%;
    animation: cambio 15s infinite;
}

.portada li{
   margin-left: 5px;
   margin-right: 5px;
    list-style: none;
}

@keyframes cambio{
    0% {margin-left: 0;}
    20% {margin-left: 0;}

    25% {margin-left: -100%;}
   45% {margin-left: -100%;}

    50% {margin-left: -200%;}
    70% {margin-left: -200%;}

    75% {margin-left: -300%;}
    100% {margin-left: -300%;}
}
.listadoComida{
    
    padding-top: 20px
}

.listadoComida{
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
}
.comidas{
    width: 30%;
    height: 100%;
    padding:5px;
   

    text-align:center;
}

#espera{
    background-color: #ffb500;
    border:1px solid #26419a;
    color: #26419a;
}
#procesado{
    background-color: #26419a;
    border:1px solid #ffb500;
    color: #ffb500;
}
footer{
    width: 100%;
    height: 20%;
   position: sticky;
   background-color: blue;
}

.accion{
    margin: 2em;
    text-align:center;
}
.button{
    border: none;
    width: 100%;
    color: #ffb500;
    font-size: 20px;
    background:  #26419a;
    padding: 15px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px
  }
  .button:hover{
    background-color:#ffb500 ;
    color: #26419a;
  }
  @media screen and (max-width: 1024px) {
    .comidas{
        width: 80%;
    }
  } 
</style>
