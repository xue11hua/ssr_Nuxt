<template>
  <div>
  	<div>
  		<img src="~static/logo.jpg" width="300px" alt="">
  	</div>
  	<div class="diss">
  		
  	</div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{name:'anyc'}">anyc</nuxt-link></li>
      <li><nuxt-link :to="{name:'user'}">user</nuxt-link></li>
    </ul>
    <el-button type="primary">主要按钮</el-button>
    
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>
	.diss{
    width: 300px;
    height: 300px;
    background-image: url('~static/logo.jpg')
  }
</style>
