<template>
    <div>
        <form class="formulario" id="app" @submit="checkForm" action="/something" method="post">
    
  
     <img src="@/assets/bembos.png" class="Logo" alt="">
     <div class="contenedor">
     
      <div class="input-contenedor">
       <select id="TipoUsuario" class="datos">
        <option value="1" selected>Pedidos</option> 
        <option value="2">Cocina</option>
      </select>
        
     </div>
         

         <div class="input-contenedor">
         <input  class="datos" type="text" placeholder="Usuario" v-model="usuario" id="usuario">
         
         </div>
         
         <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
         <input class="datos" type="password" placeholder="Clave" v-model="clave" id="clave">
         
         </div>
         <div v-if="errors.length">   
            <div class="alert alert-danger" v-for="error in errors" :key="error.id">{{ error }}</div>
          </div>
         <input type="submit" value="Ingresar" class="button">
         
       </div>
    </form>
    </div>
</template>

<script>
export default {
    name : 'login',
    data(){
        return{
            info: null,
            errors: [],
            usuario: null,
            clave: null,
            tipousuario: "Selecccione"
        }
    },
    methods : {
        checkForm:function(e) {
      var tipousuario= document.getElementById("TipoUsuario");
      
     
      this.errors = [];
      if (this.usuario!="admin") this.errors.push("Usuario Incorrecto.");
      if (this.clave!="admin") this.errors.push("Clave Incorrecta.");

      if (this.errors.length===0)  {
        if(tipousuario.value==="1") {
        window.location.href="http://localhost:8081/pedidos";
        }
         if(tipousuario.value==="2"){
        window.location.href="http://localhost:8081/cocina";
        } 
      }
      e.preventDefault();
    },
        redireccionar(){
            let valor = document.querySelector('.datos').value;
            console.log(valor)
             if(valor==="Pedidos") {
            window.location.href="http://localhost:8081/pedidos";
        } else{
            window.location.href="http://localhost:8081/cocina";
        }
        }
        
    }
}
</script>

<style>
.contenedor{
  width: 100%;
  padding: 15px;
}
.formulario{
  background: #fff;
  margin-top: 150px;
  padding: 3px;  
}
.datos{
  font-size: 20px;
  width: 100%;
  padding: 10px;
  border: none;
}
.Logo{
  margin:2px auto;
  display:block;
  height: 100px;
  width: 100px;
}
.nosel{
  color: #aaa;
}


.input-contenedor{
  margin-bottom: 15px;
  border: 1px solid #aaa;
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
}
.button:hover{
  background-color:#ffb500 ;
  color:#26419a ;
}
p{
  text-align: center;
}


@media(min-width:768px)
{
  .formulario{
      margin: auto;
      width: 500px;
      margin-top: 150px;
      border-radius: 2%;
  }
}
</style>
