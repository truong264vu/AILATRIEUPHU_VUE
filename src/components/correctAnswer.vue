<template>
  <div class="correctAsw">
       <div id="nextTrue" >
            
              
              <div class="tich"></div>
              <p>CORRECT !</p>
              
              <p> Bạn thật thông minh <br> ${{questions[count].point}} đã là của bạn</p>
              <input type="submit" readonly value="OK" @mousedown="COUNT_UP()" @click="START_TIME()" >

           
        </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'correctAnswer',
    computed: {...mapState(['questions','count','totalPoint'])},   
    methods: mapMutations(['START_TIME','STOP_TIME','COUNT_UP']),
}
</script>

<style scoped>

.correctAsw #nextTrue {
    height: 400px;
    width: 700px;
    background: #362da8;
    border-radius: 30px;
    border: 5px solid #3b129e;

}
.correctAsw .tich {

    height: 100px;
    width: 100px;
    background: url(../../images/true.gif) no-repeat;
    background-size: 100px 100px;
    padding: 10px;
    display: block;
    line-height: 100px;
    margin: 0px 0px 0px 300px;
    border: 5px solid transparent;
}
.correctAsw #nextTrue p {
    height: 25px;
    font-size: 25px;
    color: white;
    font-weight: 500;
}
.correctAsw #nextTrue input {
    margin-top: 20px;
    width: 200px;
    height: 60px;
    font-size: 30px;
    background:rgb(3, 3, 134);
    color: white;
    font-weight: 700px;
    text-align: center;
    border-radius: 20px;
    border: 5px solid blue;
}
.correctAsw #nextTrue input:hover {
    cursor: pointer;
    background: rgb(17, 17, 122);
}


/* RPS dien thoai */
@media (min-width: 700px) and (max-width: 1100px) {
    
.correctAsw #nextTrue {
    height: 200px;
    width: 400px;
    border-radius: 20px;

}
.correctAsw .tich {

    height: 50px;
    width: 50px;
    background-size: 50px 50px;
    padding: 10px;
    margin: 0px 0px 0px 170px;
}
.correctAsw #nextTrue p {
    margin-top: 0px;
    height: 10px;
    font-size: 20px;
    color: white;
    font-weight: 100;
}
.correctAsw #nextTrue input {
    margin-top: 0px;
    width: 160px;
    height: 50px;
    font-size: 20px;
    font-weight: 300px;
    border-radius: 20px;
}

}
@media (max-width: 700px) {
        
.correctAsw #nextTrue {
    height: 200px;
    width: 400px;
    border-radius: 20px;

}
.correctAsw .tich {

    height: 50px;
    width: 50px;
    background-size: 50px 50px;
    padding: 0px;
    margin: 0px 0px 0px 170px;
}
.correctAsw #nextTrue p {
    font-size: 15px;
    color: white;
    font-weight: 200;
}
.correctAsw #nextTrue input {
    margin-top: 0px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    font-weight: 300px;
    border-radius: 20px;
 
}

}
</style>