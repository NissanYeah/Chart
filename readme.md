

### 說明


- 由於ChartJS本身沒有自己的可拖拉橫折，所以目前只能用div，因此往右滑時，Y軸會看不到
- 由於canvas不能直接調整長寬，所以必須調整外層的div大小，讓canvas來自適應

### 使用的插件

- [ChartJS](https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js) 用以產生圖表
- [Chartjs-plugin-labels.js](https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js) 
  - 用來顯示圖示上方的數字，但不能調整位置，之後可能換掉
