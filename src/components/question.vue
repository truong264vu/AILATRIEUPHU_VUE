<template>
  <div class="question">  
        <div id="TrueAsw">
            <correctAnswer />
        </div>
          <h1>Câu {{count + 1}} : {{questions[count].question}} </h1>
        <ul           
            v-for="(nameAnswer,index) in questions[count].answer" 
            :key="index" 
        >       
          <li @click="checkAnswer($event)" 
                :class="{
                choosed: questions[count].choose == index,
            }"
             @mousedown="questions[count].choose = index"
             @mouseup="STOP_TIME()"
            > {{nameAnswer}}</li>  
        </ul>  
          
        
    </div>
</template>

<script>
import swal from 'sweetalert';
import correctAnswer from   './correctAnswer'
import {mapMutations, mapState} from 'vuex' 
export default {
    name: 'question',
    components: {correctAnswer},
    computed:mapState(['questions','count','totalPoint']),
    methods:{
        ...mapMutations(['TOTAL_POINT','STOP_GAME','START_TIME','STOP_TIME']),  
        checkAnswer (evt) {
        let el = evt.target
        let nextCount = document.getElementById('TrueAsw')

        if(this.$store.state.questions[this.$store.state.count].choose
         == this.$store.state.questions[this.$store.state.count].correct){
             // hiện đáp án đúng
                {
                    setTimeout(() => {
                    el.classList.add('true') ;

                }, 2000)
                    setTimeout(() => {
                          nextCount.style.display = 'block' ;
                    },3000)
                }}
        
        //hiện đáp án sai
                else {
                    setTimeout(() => {
                    el.classList.add('false')
                    swal('Sai rồi !', 'đán án : '
                     + this.$store.state.questions[this.$store.state.count].answer[this.$store.state.questions[this.$store.state.count].correct])
                   
                }, 2000)
                setTimeout(() => {
                     location.reload()
                },5000)
                }
      },
    } 
 }   
</script>

<style scoped>
.question #TrueAsw {
    position: absolute;
    bottom: 33%;
    left: 20%;
    display: none;
}
.question h1 {

    border-radius:50px;
    background: darkblue;
    color: white;
    line-height: 100px;
    width: 80%;
    height: 160px;
    padding: 30px;
    margin: 80px auto  ; 
}

@media (hover: hover) {
 
    .question li:hover {
    background: green;
    cursor: pointer;
} 
}
.isCorrect {
    background: rgb(190, 190, 30);

}
.question .choosed {
    background: rgb(118, 150, 56);
}
.question .true {
    background: rgb(125, 226, 43);
}
.question .false {
    background: red;
}
.question  ul {
        vertical-align:top;
        display: inline-block;
}
.question ul li {
    margin: 0px 20px;
    text-align: left;
     padding-left: 20px;
    list-style: none;
    height: 60px;
    width: 500px;
    border-radius: 15px;
    border:  2px solid white; 
    background: rgb(131, 36, 199);
    color: white;
    line-height: 60px;
    font-size: 30px;
    height: 60px;
    text-decoration: none;
       
}

.correct {
    background: rgb(51, 25, 6);
}
.swal-modal {
  background-color: rgba(63,255,106,0.69);
  border: 3px solid white;
}

 @media (min-width: 200px) and (max-width: 650px) { 
          .question ul {
         margin-left: 0px;
     }
     .question ul li  {
    display: inline-block;
    padding-left: 2px ;
    text-align: left;
    height:10px;
    width: 30px;
    border-radius: 8px;
    font-size: 8px;
    line-height: 10px;
    text-decoration: none;
    list-style: none;

}
 }
@media (min-width: 200px) and (max-width: 900px) {

    .question h1 {

    border-radius: 20px;
    background: rgb(29, 29, 165);
    color: white;
    line-height: 20px;
    font-size: 15px;
    width:80%;
    height: 60px;
    padding: 10px;
    margin: 2px auto;

}
     .question #TrueAsw {
    position: absolute;
    bottom: 10%;
    left: 20%;
    display: none;
  
}
.question  ul {
        vertical-align:top;
        display: inline-block;
        
           
}
.question ul li {
    margin-left: -12px;
    text-align: left;
    padding: 4px;
    list-style: none;
    width: 150px;
    border-radius: 5px;
    border:  2px solid white; 
    line-height: 20px;
    font-size: 12px;
    height: 20px;
    text-decoration: none;
       
}
@media (min-width: 300px) and (max-width: 800px) {
    .question #TrueAsw {
    position: absolute;
    bottom: 10%;
    left: 15%;
    display: none;
  
}
}


}


 @media (min-width: 900px) and (max-width: 1100px) { 
     .question h1 {

    border-radius:50px;
    line-height: 40px;
    width: 80%;
    height: 140px;
    padding: 20px;
    margin: 80px auto  ;
    font-size: 22px;
    
    
}
     .question ul {
         margin-left: -30px;
     }
     .question ul li  {
    display: inline-block;
    padding-left: 5px ;
    text-align: left;
    height:50px;
    width: 250px;
    border-radius: 10px;
    border:  2px solid white; 
    font-size: 20px;
    line-height: 50px;
    text-decoration: none;
    list-style: none;

}

 }
  @media (min-width: 1100px) and (max-width: 1400px) { 
     .question ul li  {
    display: inline-block;
    text-align: left;
    height:50px;
    width: 250px;
    border-radius: 10px;
    border:  2px solid white; 
    font-size: 22px;
    line-height: 50px;
    text-decoration: none;
    list-style: none;
    margin: 10px 20px;

}
  }
  @media (min-width: 1400px) and (max-width: 1700px) {

.question h1 {

    border-radius:40px;
    line-height: 80px;
    font-size: 25px;
    width:70%;
    height: 160px;
    padding: 30px;
    margin: 20px auto;
    
  
}
.question ul li  {
    line-height: 50px;
    text-align: left;
    font-size: 25px;
    height:50px;
    width: 350px;
}
}
</style>