<template>
  <div class="help">
      <form action="">
                            <input type="submmit" value="50/50"  readonly @click="help50($event)" @mousedown.once="HELP_50()">
                            <input type="submmit" value="100%"   readonly @click="help100($event)" @mousedown.once="HELP_100()">
                            <input type="submmit" value="Stop" readonly @click="STOP_GAME()">
                       
      </form>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {mapMutations} from 'vuex' 
export default {
    name: 'help' ,
    // computed: mapState(['help50']),
    methods:{ ...mapMutations(['HELP_100','HELP_50','STOP_GAME']),
        help50 (evt) {
            var el = evt.target
                el.classList.add('used')
            
        },
        help100 (evt) {
            var el = evt.target
                el.classList.add('used')
            
        }
    }
    
}
</script>

<style scoped>
    .swal-modal {
  background-color: rgba(63,255,106,0.69);
  border: 3px solid white;
}
    .help input {
        width: 20%;
        height:50px;
        border: 5px solid white;
        border-radius: 40px;
        text-decoration: none;
        color: white;
        font-size: 25px;
        background: rgb(27, 103, 175);
        text-align: center;
        margin: 40px 20px ;
        outline: none;
        font-weight: 700;

    }
    .help input:hover {
        background: green;
        cursor: pointer;
        height: 46px;
        font-size:30px;
    }
   .help .used {
        background: black;
        border: rgb(128, 26, 26);
        color: red;
        outline: none;
    }
    .help .used:hover {
        background: black;
        cursor: default;
        
    }
  
    

    
     @media (max-width: 900px) {
         .help {
             margin: 10px 0px;
         }
        .help input {
        width: 20%;
        height:30px;
        border: 2px solid white;
        font-size: 12px;
        margin: 3px 3px ;
        
    }
     .help input:hover {
        background: green;
        cursor: pointer;
        height: 30px;
        font-size:15px;
    }
    
    }
      @media (min-width: 200px) and (max-width: 500px) { 
        .help input {
        width: 16%;
        height:30px;
        border: 1px solid white;
        font-size: 7px;
        margin: 10px 4px ;
    }
         .help input:hover {
        background: green;
        cursor: pointer;
        height: 30px;
        font-size:10px;
    }
      }
     @media (min-width: 900px) and (max-width: 1600px) {
        .help input {
        width: 22%;
        height:40px;
        border: 2px solid white;
        font-size: 16px;
        margin: 20px 10px ;
    }
         .help input:hover {
        background: green;
        cursor: pointer;
        height: 40px;
        font-size:20px;
    }
     }
</style>