<template>
	<div class="row">
		<div class="col-md-12">	
			<card style="height: 450px;">

				<div class="row">
				<div class="col-3">
				<!-- <div class="slider-wrapper">
					<input type="range" min="0" max="11" value="7" step="1">
				</div>
 				<div class="" id="demo-value">Lotus</div> -->
				</div>

				<div class="col-3">
				<div class="slider-wrapper">
					<input type="range" min="0" max="11" value="1" step="1" disabled>
				</div>
 				<div class="value" id="demo-value">Sansiri</div>
				</div>

				<div class="col-3">
					<div class="slider-wrapper">
						<input type="range" min="0" max="11" value="5" step="1">
					</div>
 					<div class="value" id="demo-value">Major</div>
				</div>

				<div class="col-3">
					<div class="slider-wrapper">
						<input type="range" min="0" max="11" value="10" step="1">
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
	left: -45px;
	top: 320px; 
    width: 80px;
    text-align: center;
    font-family: "Lucida Console", Monaco, monospace;
}

.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}

.slider-wrapper input {
  width: 250px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
  cursor: pointer; 
    position: absolute;
  left: -18px; 
	top: 150px; 
}
</style>
