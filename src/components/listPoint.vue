<template>
  <div class="listPoint">
      <meta name="viewport" content="user-scalable=no,width=device-width" />
      <div  class="reverse-list"  >
          <ul >
            <li id="answer"
                v-for="(list , index ) in questions" :key="index"
                :class="{
             true: questions[index].point == totalPoint
            }"   > 
               {{list.point}}
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    name: 'listPoint',
    computed: mapState(['questions','count','totalPoint']),
                // ...mapGetters(['Total2'])},
}
</script>

<style scoped>
 .listPoint .reverse-list ul li {
     list-style: none;
     text-decoration: none;
      font-size: 25px;
     color: white;
     height: 30px;
     width: 60%;
     margin: 10px 0 0 15%;
     border: 3px solid white;
     border-bottom: 3px solid rgb(126, 156, 156);
     border-radius:20px ; 
     
     
 }
 /* dao nguoc li  */
.reverse-list ul  {
        display: flex; 
        flex-direction: column-reverse;
}
.listPoint .true {
    background: yellow;
    color: black;
    font-size: 25px;
}
/* RPS */

@media (max-width: 1600px) {
 .listPoint .reverse-list ul li {
     list-style: none;
     text-decoration: none;
    font-size: 20px;
     color: white;
     height: 20px;
     width: 80%;
     margin: 10px 0 0 2%;
     border: 3px solid white;
     border-bottom: 3px solid rgb(126, 156, 156);
     border-radius:20px ; 
     
 }

 }


@media (max-width: 900px) { 
.listPoint .reverse-list {
    display: block;
}
.listPoint .reverse-list ul li {
    font-size: 10px;
    line-height: 14px;
     color: white;
     height: 14px;
     width: 70%;
     margin: 2px 0 0 10px;
     border: 1px solid white;
     border-bottom: 1px solid rgb(126, 156, 156);
     border-radius:20px ; 
     
 }


}
</style>