<template>
  <div class="body">
         <meta name="viewport" content="width=device-width, initial-scale=1">
      <div class="left">
          <div class="pointtime">
              <div class="point"><point /></div>
              <div class="timeOut"><timeAnswer /> </div>
            </div>
          <div class="question"><question /></div>
      </div>
      <div class="right">
          <div class="help"><help /></div>
          <div class="listPoint"><listPoint /></div>
      </div>
  </div>
</template>

<script>
import question from './question.vue'
import help from './help.vue'
import listPoint from './listPoint.vue'
import point from './point.vue'
import timeAnswer from './timeAnswer.vue'
export default {
    name: 'bodyApp',
    components: {
        question,
        help,
        listPoint,
        point,
        timeAnswer,
    }
}
</script>

<style scoped>
.body {
    display: flex;
    max-width: 1880px;
    width: 100%;
    height: 100%;     
}
    .body .left{
        width: 74%;
        height: 880px;
        border-right: 5px solid wheat;
        margin: 0px auto;
        background: url(../../images/ALTF.jpg) no-repeat  ;
        background-size: 100% 100% ;
  
    }
    .body .right {
        width: 26%;
        border-right: 10px solid wheat;
        height: 880px;
        background: url(../../images/bgListPoint.jpg) no-repeat  ;
        background-size: 100% 100% ;
    }
    .body .listPoint {
        margin-top: 10px ;
    }
    .body .question {
        margin-top: 100px ;
    }
    .body .pointtime {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }

@media (max-width: 1600px) {
    .body {
    width: auto;
    height: auto;     
}
    .body .left{
        width: 70%;
        height: 880px;
        border-right: 5px solid wheat;
        margin: 0px auto;
        background: url(../../images/ALTF.jpg) no-repeat  ;
        background-size: 1100px 880px ;
  
    }
    .body .right {
        width: 30%;
        border-right: 10px solid wheat;
        height: 880px;
        background: url(../../images/bgListPoint.jpg) no-repeat  ;
        background-size: 100% 880px ;
    } 

}
@media (min-width: 900px) and (max-width: 1300px) { 
       .body .left{
        width: 70%;
        height: 880px;
        border-right: 5px solid wheat;
        margin: 0px auto;
        background: url(../../images/ALTF.jpg) no-repeat  ;
        background-size: 900px 880px ;
  
    }
}
@media (max-width: 900px){
  .body {
    width: auto;
    height: auto;
  }   

    .body .left{
        width: 70%;
        height: 350px ;
        border-right: 5px solid wheat;
        background: url(../../images/left.png) no-repeat  ;
        background-size:  750px 500px ;
        
  
    }
    .body .left .point {
        margin-left: -150px ;
    } 

    .body .right {
        width: 30%;
        border-right: 10px solid wheat;
        height: 350px ;
        background: url(../../images/bgListPoint.jpg) no-repeat  ;
        background-size: 400px 350px ;

    } 
    .body .question {
        margin: 60px 0px 0px 0px;
        
    }
    .body .pointtime {
        display: flex;
        justify-content: space-around;
        margin-top: 0px;
        margin-left: 50%;
    }
    

}

</style>