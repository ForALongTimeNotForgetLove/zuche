<template>
  <div id="allmap"></div>
</template>

<script>
export default {
  name: "MapVGL",
  mounted() {
    this.getAdress();
  },
  methods: {
    getAdress() {
      // 百度地图API功能
      // 百度地图API功能
      var map = new BMap.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.enableContinuousZoom(true);
      //添加地图类型控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true,
      });
      map.addControl(navigationControl);
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        var address = "";
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        // alert("当前定位地址为：" + address);
      });
      geolocationControl.addEventListener("locationError", function (e) {
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            // alert("您的位置：" + r.point.lng + "," + r.point.lat);
          } else {
            alert("failed" + this.getStatus());
          }
        },
        {
          enableHighAccuracy: true,
        }
      );
    },
  },
};
</script>

<style scoped>
#allmap {
  width: 100%;
  height: 4.8rem;
}
</style>
