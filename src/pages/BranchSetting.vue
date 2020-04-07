<template>
	<div class="row">
		<div class="col-md-12">	
			<card style="height: 450px;">

				<div class="row">
				<div class="col-3">
				<div class="slider" id="demo-slider">
					<div class="thumb" id="demo-thumb"></div>
				</div>
 				<div class="value" id="demo-value">Lotus</div>
				</div>

				<div class="col-3">
				<div class="slider" id="demo-slider">
					<div class="thumb" id="demo-thumb"></div>
				</div>
 				<div class="value" id="demo-value">Sansiri</div>
				</div>

				<div class="col-3">
				<div class="slider" id="demo-slider">
					<div class="thumb" id="demo-thumb"></div>
				</div>
 				<div class="value" id="demo-value">Major</div>
				</div>

				<div class="col-3">
				<div class="slider" id="demo-slider">
					<div class="thumb" id="demo-thumb"></div>
				</div>
 				<div class="value" id="demo-value">MTL</div>
				</div>
				</div>
 
				
			</card>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        value: '2'
      }
    }
  }
</script>
<style>

.slider {
    border-left: thick solid #000000;
    height: 332px;
    position: absolute;
    left: 120px;
    top: 20px;    
}
 
.thumb {
    cursor: pointer; 
    position: absolute; 
    left: -18px; 
    top: 317px; 
    width: 39px; 
	height: 31px; 
}
 
.value {
    position: absolute;
    left: 83px;
	top: 365px; 
    width: 80px;
    text-align: center;
    font-family: "Lucida Console", Monaco, monospace;
}
</style>
