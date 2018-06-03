<template>
	<div>
		<h1>姓名：{{info.name}}</h1>
	     <h2>年龄：{{info.age}}</h2>
	     <h2>兴趣：{{info.interest}}</h2>
	</div>
</template>
<script>

import axios from 'axios';

//axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

//设置Content-Type为application/x-www-form-urlencoded
var instance = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

	export default {
  		data(){
		     return {
		         name:'hello World',
		     }
		  },
		  //promise方法
		  // asyncData(){
		  //     return instance.post('/t4bia',{})
		  //     .then((res)=>{
		  //         console.log(res)
		  //         //在页面渲染之前给data里赋值,赋值后data里多个info
		  //         return {info:res.data}
		  //     })
		      
		  // },
		   asyncData(){
		      return instance.get('https://api.myjson.com/bins/8gdmr')
		      .then((res)=>{
		          console.log(res)
		          //在页面渲染之前给data里赋值,赋值后data里多个info
		          return {info:res.data}
		      })
		      
		  }

		  //await方法
		 //  async asyncData(){
	  //     let {data}=await instance.get('/api/v2/movie/subject/1764796')
	  //     console.log(data)
	  //     return {info: data}
	      
	  // }
	
	 
    }
</script>