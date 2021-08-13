<template>
  <div class="timeAnswer" >
       <div class="timeOut" >
       
           <label id="seconds">{{questions[count].timeAnswer}}</label>
       </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'timeAnswer' ,
    computed:mapState(['questions','count'])
}
</script>

<style>
    .timeAnswer {
        color: white;
        
    }
    .timeAnswer .timeOut {
        width: 50px;
        height: 50px;
        border: 5px solid white;
        border-radius: 25px;
    }
    .timeAnswer .timeOut label {
        text-align: center;
        line-height: 50px;
        font-size: 25px;
        
    }
    .timeAnswer .timeOf {
        color: white;
    }

@media (min-width: 100px) and (max-width: 900px) {
    .timeAnswer {
        margin-top: 20px;
    }
    .timeAnswer .timeOut {
        width: 30px;
        height: 30px;
        border: 2px solid white;
        border-radius: 20px;
    }
    .timeAnswer .timeOut label {
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        
    }
}
    
</style>