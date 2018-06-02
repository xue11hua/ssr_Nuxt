//动态路由，名字必须是_开头
<template>
	<div>
		<h2>新闻详情页</h2>
		<h2>新闻id [{{$route.params.id}}]</h2>
      <ul>
        <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
      </ul>
	</div>
</template>
<script>
export default {
 //动态参数校验 返回true正常进入页面
 //返回false进入404
  validate ({params}) {
  	//检测params.id是否为数字
    return /^\d+$/.test(params.id)
  },
  data(){
    return{
      title:this.$route.params.title,
    }
  },
  //独立设置head信息
  //hid 键为meta标签配一个唯一的标识编号
  head(){
    return{
      title:this.title,
      meta:[
        {hid:'description',name:'news',content:'This is news page'}
      ]
    }
  }
 
}
</script>