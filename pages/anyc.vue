<template>
	<div>
		<h1>姓名：{{info.name}}</h1>
	     <h2>年龄：{{info.age}}</h2>
	     <h2>兴趣：{{info.interest}}</h2>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
  		data(){
		     return {
		         name:'hello World',
		     }
		  },
		  //promise方法
		  // asyncData(){
		  //     return axios.get('https://api.myjson.com/bins/t4bia')
		  //     .then((res)=>{
		  //         console.log(res)
		  //         //在页面渲染之前给data里赋值,赋值后data里多个info
		  //         return {info:res.data}
		  //     })
		      
		  // }
		  //await方法
		  async asyncData(){
	      let {data}=await axios.get('https://api.myjson.com/bins/t4bia')
	      return {info: data}
	      
	  }
    }
</script>