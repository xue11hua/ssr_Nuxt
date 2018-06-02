<template>
  <div>
      <h2>About Index page</h2>
      <ul>
        <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
      </ul>
  </div>
</template>
<script>
	export default {
		//局部设置页面进入效果
		  transition:'test'
		}
</script>