<template>
  <div id="app">
    
    <!-- 底图 -->
    <div class="main">
      <mapView ref="mapView" style="background-color: #061922"
        @drawFinish='drawing = false'
      />
    </div>

    <!-- 悬浮控件 -->
    <a-row type="flex" justify="space-between" style="padding-top:15px; padding-left:20px; ">
      <a-popover trigger="click" title="设置" placement="bottomRight" style="max-width:240px">
        
        <div class="myBtn" style="width:40px; height:40px;">
          <div style="font-size:20px; margin:auto; display:flex"> 
            <a-icon type="setting"/>
          </div>
        </div>
        
        <template slot="content">
          <div class="subTitle" style="margin-top: -13px;">
            <p>底图选择</p>
          </div>
          <a-radio-group @change="mapChange" v-model="selectedMap">
            <a-radio :value="1">暗色底图</a-radio>
            <a-radio :value="2">Google地图</a-radio>
          </a-radio-group>
        </template>
      </a-popover>
    </a-row>
    
  </div>
</template>

<script>
import mapView from './components/mapView.vue'

export default {
  name: 'app',
  components: {
    mapView
  },
  data () {
    return {
      selectedMap: 1,
      show: {
        mode: 1,
        hisLength: 180,
        freq: 200,
        planeNumber: 20
      },
      loading: false,
      drawing: false,
    }
  },
  methods: {
    // 切换底图
    mapChange(event) {
      let str = (event.target.value === 1 ? 'darkMap' : 'googleMap');
      this.$refs.mapView.switchMap(str);
    },
  }
}
</script>

<style>
#app {
  font-family: Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  position: absolute; 
  width: 100%; 
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
.myBtn {
  display: flex;
  background-color: white;
  text-align: center;
  vertical-align: middle;
  border-radius: 2px;
  min-width: 0;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  -webkit-box-shadow: 0px 3px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 4px 0px rgba(0,0,0,0.12);
          box-shadow: 0px 3px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 4px 0px rgba(0,0,0,0.12);
}
.myBtn:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-transition-property: -webkit-box-shadow;
  transition-property: -webkit-box-shadow;
  transition-property: box-shadow;
  transition-property: box-shadow, -webkit-box-shadow;
  -webkit-box-shadow: 0px 4px 2px -2px rgba(0,0,0,0.2), 0px 2px 2px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
          box-shadow: 0px 4px 2px -2px rgba(0,0,0,0.2), 0px 2px 2px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
}
.subTitle {
  margin-left: -8px;
  padding-top: 7px;
  font-size: 12px;
  margin-bottom: -10px;
  color: #000000;
  font-weight: lighter
}
.ant-radio-wrapper{
  color: rgba(0,0,0,1);
}
</style>
