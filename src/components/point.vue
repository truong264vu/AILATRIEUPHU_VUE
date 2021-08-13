<template>
  <div class="point">
      <div  >
            <p v-bind="TOTAL" >  
                Tiền :  
               $ {{                        
                 totalPoint 
                }} 
          
                
                
            </p>
            
            
         
           
        </div>
        
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex' 
export default {
    name: 'point',
    // components: {result},
    computed:{ ...mapState(['totalPoint']),
              ...mapGetters(['TOTAL']) },
}
</script>

<style scoped>

.point p {
  color:white;
  font-size: 25px;
}
@media (min-width: 100px) and (max-width: 900px) {
  .point p {
  color:white;
  font-size: 20px;
}
}
</style>