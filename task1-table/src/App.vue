<template>
  <section>
    <h2>Task 1: Create table of your daily log in vue
Add background color to the table of selected color option</h2>
  <div class="dropdown">
    <label for="cars">Select BackGround-Color For Table :  </label>
    <select v-model="colorselect">
    <option value="default">Choose a color</option>  
    <option value="yellow">Yellow</option>
    <option value="pink">Pink</option>
    <option value="blue">Blue</option>
    <option value="red">Red</option>
  </select>
  </div>
    
  <div :style="{background: tableColor()}" class="tablediv" >
    <table>
      <tr>
        <th>Date</th>
        <th>Day</th>
        <th>Section</th>
        <th>Git repo</th>
        <th>Progress</th>
        <th :colspan="sizeColspan()">Topic Covered</th>
      </tr>

      <tr v-for="(trainee, index) in trainees" :key="index">
        <td>{{trainee.date}}</td>
        <td>{{trainee.day}}</td>
        <td>{{trainee.section}}</td>
        <td><a href="#">{{trainee.gitrepo}}</a></td>
        <td>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{width: trainee.progress}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </td>
        <td v-for="(topic, index) in trainee.topics" :key="index" >{{topic}}</td>
      </tr>
    </table>
  </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
        colorselect : 'default',
       trainees : [{
           date: '14-02-2022',
           day : 'Monday',
           section : 7,
           gitrepo : 'https://github.com/chetan-punani/vue-js/tree/master/section_7',
          progress : '20%',
          topics : ['overview','lifecycle','directives'],  
        },
        {
           date: '15-02-2022',
           day : 'Tuesday',
           section : 8,
           gitrepo : 'https://github.com/chetan-punani/vue-js/tree/master/section_8',
          progress : '90%',
          topics : ['methods','computed','watch','events','props'],  
        }],
       
    };
  },
  methods : {
    sizeColspan(){
      let sizeTopics = 0;
      this.trainees.forEach(element => {
        if(element.topics.length > 0){
          sizeTopics = element.topics.length;
        } 
      });
      return sizeTopics;
    },
    tableColor(){
      if(this.colorselect === 'yellow') {
        return '#FFFF00';
      } else if(this.colorselect === 'pink') {
        return '#CC33FF';
      } else if(this.colorselect === 'blue') {
        return '#0066FF';
      } else if(this.colorselect === 'red') {
        return '#FF0000';
      }
    }
  },
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';

table{
  width: 100%;
  border-collapse: collapse;
}

table, th, td{
  border: 1px solid;
}

.dropdown{
  margin: auto;
  width: 50%;
}

.tablediv{
  margin: 2%;
  padding: 5%;
}
</style>
