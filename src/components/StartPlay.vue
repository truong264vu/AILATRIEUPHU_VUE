
<template>
  <div id="start">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- <div class="tutorial">
          <p>Chúng tôi có tất cả 15 câu hỏi .<br>
          Bạn có : <br>
          - 30 giây để trả lời mỗi câu hỏi <br>
                    - 2 quyền trợ giúp <br>
                   - 1 quyền dừng chơi</p>
      </div> -->
     
      <div class="startGame">
            <div class="logoALTP"></div>
            <input type="submit" id="OnStart" value="Bắt đầu" @click="START_TIME()" @mousedown.once="hideScreenStart()">         
      </div>
       
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import { mapGetters } from 'vuex'

export default {
    name: 'StartPlay',
    methods: {...mapMutations(['START_TIME']),
        hideScreenStart() {
            let Onstart =  document.getElementById("OnStart")
            Onstart.onclick = function () {
                document.getElementById("start").style.display = 'none';
            };      
                       
            if (Onstart.requestFullscreen) {
                Onstart.requestFullscreen();
            } else if (Onstart.webkitRequestFullscreen) { /* Safari */
                Onstart.webkitRequestFullscreen();
            } else if (Onstart.msRequestFullscreen) { /* IE11 */
                Onstart.msRequestFullscreen();
            }
            
          
        },
           
    }
        
    
}
</script>

<style scoped>
        .hide{
            display: none;
        }
    #start .startGame {
         width: 1890px;
          height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
    #start .startGame .logoALTP {
        left: 36%;
        top: 10%;
        /* top: 20%; */
        width: 500px;
        height: 500px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 500px 500px;
    }
    #start .startGame input {
        position: absolute;
        font-size: 40px;
        background: rgb(90 218 69);
        color: rgb(231, 245, 244);
        left: 42%;
        top: 70%;
        height: 100px;
        width: 15%;
        border: 5px solid rgb(22 136 57);
        border-radius: 40px;
        font-weight: 700;
    }
    #start .startGame input:hover {

        background: rgb(203, 236, 53);
        cursor: pointer;
    }

    @media (max-width: 1600px) {


    #start .startGame {
        width: 1600px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% auto;
    }
        #start .startGame .logoALTP {
        left: 32%;
        top: 10%;
        /* top: 20%; */
        width: 500px;
        height: 500px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 500px 500px;
    }
        #start .startGame input {
          left: 42%;
          top: 70%;
          height: 90px;
          width: 15%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (max-width: 1400px) {


    #start .startGame {
        width: 1400px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
            #start .startGame .logoALTP {
        left: 33%;
        top: 10%;
        /* top: 20%; */
        width: 400px;
        height: 400px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 400px 400px;
    }
        #start .startGame input {
          left: 40%;
          top: 60%;
          height: 90px;
          width: 20%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (min-width: 900px) and (max-width: 1100px) {

    #start .startGame {
        width: 1100px;
        height: 880px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 100% 100%;
    }
    #start .startGame .logoALTP {
        left: 30%;
        top: 5%;
        /* top: 20%; */
        width: 350px;
        height: 350px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 350px 350px;
    }
        #start .startGame input {
          left: 38%;
          top: 50%;
          height: 90px;
          width: 22%;
          border: 3px solid blueviolet;
          border-radius:40px ;
    }
    }

    @media (max-width: 900px) {
        #start {
            width: 900px;
            height: auto;
        }
    #start .startGame { 
        width: 900px;
        height: 354px;
        background: url(../../images/dolar.jpg) no-repeat ;
        background-size: 900px 400px;
        border: 5px solid black;

    }
    #start .startGame .logoALTP {
        left: 38%;
        top: 10%;
        /* top: 20%; */
        width: 200px;
        height: 200px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 200px 200px;
    }
        #start .startGame input {
        position: absolute;
        font-size: 40px;
        background: rgb(157, 255, 0);
        color: rgb(231, 245, 244);
        left: 38%;
        top: 70%;
        height: 80px;
        width: 25%;
        border: 5px solid rgb(22 136 57);
        border-radius: 40px;
        font-weight: 700;
    }
    }
       @media (max-width: 800px) {
           #start .startGame input {
        position: absolute;
        font-size: 40px;
        background: rgb(157, 255, 0);
        color: rgb(231, 245, 244);
        left: 36%;
        top: 60%;
        height: 80px;
        width: 30%;
        border: 5px solid rgb(22 136 57);
        border-radius: 40px;
        font-weight: 700;
    }

        #start .startGame .logoALTP {
        left: 38%;
        top: 10%;
        /* top: 20%; */
        width: 150px;
        height: 150px;
        position: absolute;
        background: url(../../images/logoALTP.png) no-repeat;
        background-size: 150px 150px;
    }
       }

</style>
