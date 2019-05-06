var studentData ={
  "data": [
    ["xx医院","骨科",2,18.5,39.51,0,0,97.15,249],
    ["xx医院","超声影像科",4,8.75,1.66,0,0,72.54,249],
    ["xx医院","药剂科",7,8.14,2.32,0,0,70.23,249],
    ["xx医院","神经内科",1,11,2.21,0,0,100,249],
    ["xx医院","病理科",2,11.5,3.11,13,0.46,48.77,249],
    ["xx医院","消化内科",1,25,1.67,2,1,0,249],
    ["xx医院","泌尿外科",1,3,8,0,0,100,249],
    ["xx医院","检验科",4,7.5,3.67,0,0,100,249],
    ["xx医院","普外科",7,14.29,4.08,0,0,56.95,249],
    ["xx医院","普内科",1,5,4.86,0,0,0,249],
    ["xx医院","放射科",3,17.67,1.78,0,0,97.15,249],
    ["xx医院","手术麻醉科",3,4,6.3,0,0,97.83,249],
    ["xx医院","感染性疾病科护理单元",3,12.67,71.11,0,0,99.42,249],
    ["xx医院","感染性疾病科",1,14,4.27,0,0,99.94,249],
    ["xx医院","急诊科",4,9.75,1.34,0,0,48.49,249],
    ["xx医院","心血管内科",1,36,0.84,0,0,99.63,249],
    ["xx医院","康复医学科",1,23,1.07,0,0,100,249],
    ["xx医院","妇科",2,14,1.85,0,0,98.24,249],
    ["xx医院","呼吸科",1,1,24.63,0,0,0,249],
    ["xx医院","呼吸内科",1,17,1.49,0,0,99.57,249],
    ["xx医院","口腔科",6,8.67,10.48,0,0,66.24,249],
    ["xx医院","内分泌科",1,19,1.27,0,0,99.83,249],
    ["xx医院","儿科",1,18,1.38,0,0,98.53,249],
    ["xx医院","信息科",2,1.5,4.01,0,0,50,249],
    ["xx医院","体检科",3,8.33,3.77,0,0,88.92,249],
    ["xx医院","住院",1,5,4.82,0,0,100,249],
    ["xx医院","介入肿瘤科",4,32.5,0.62,1.25,0.25,25.85,249],
    ["xx医院","中医肝",3,9,2.01,0,0,66.48,22494],
    ["xx医院","中医内科",1,29,0.85,0,0,99.53,22494],
    ["oo医院","康复医学科",1,0,0,0,0,0,249],
    ["oo医院","体检科",1,0,0,0,0,0,249]],
  "total": 124,
  "aggregates": null
};

// 資料格式：0.机构名称, 1.科室, 2.科室人数,3.登入次数,4.登入平均时长(时/次), 5.总练习次数, 6.练习平均分数, 7.考试平均分数
var IntStudentNumber = studentData.data.length;

var HospitalName=[]
for(let i = 0 ; i< IntStudentNumber ; i++){
  HospitalName.push(studentData.data[i][0])
}

var departmentNameList=[]
for(let i = 0 ; i< IntStudentNumber ; i++){
  departmentNameList.push(studentData.data[i][1])
}

var numberOfdepartments = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  numberOfdepartments.push(studentData.data[i][2])
}

var totalLoginTimes = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  totalLoginTimes.push(studentData.data[i][3])
}

var averageLoginTime = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  averageLoginTime.push(studentData.data[i][4])
}

var totalPracticeTimes = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  totalPracticeTimes.push(studentData.data[i][5])
}

var averagePracticeScore = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  averagePracticeScore.push(studentData.data[i][6])
}

var averageExamScore = [];
for(let i = 0 ; i< IntStudentNumber ; i++){
  averageExamScore.push(studentData.data[i][7])
}

// 建構圖表
var myChart
function render() {
  var canvas = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: departmentNameList,
      datasets: [{
        label: '科室人數',
        data: numberOfdepartments,
      }]
    },
    options: {
      plugins: {
        labels: { //用plugin顯示上方數據
          render:'value',
        },
      },
      layout:{ //設定圖表本身上方的padding
        padding: {           
          top: 30
        }
      },
      legend: { //把catagory註釋位置移到左側
        position: 'left'
      },
      maintainAspectRatio: false,
    },
  });
}
render()

// 圖表更新
function ChartUpdata(newYaxisData,labelName) {
  var Data = [{
    label:labelName,
    data: newYaxisData
  }]
  myChart.config.data.datasets = Data
  myChart.update();
}

var Score= [
  {
    label: "練習平均分數",
    backgroundColor: "pink",
    data: averagePracticeScore
  },
  {
    label: "考試平均分數",
    backgroundColor: "gray",
    data: averageExamScore 
  }
]

function changeChart(id){
    switch(id){
    case 1:
      ChartUpdata(numberOfdepartments,"科室人数")
      break;
    case 2:
      ChartUpdata(totalLoginTimes,"登入次数")
      break;
    case 3:
      ChartUpdata(averageLoginTime,"登入平均时长(时/次)")
      break;
    case 4:
      ChartUpdata(totalPracticeTimes,"总练习次数")
      break;
    case 5:
      myChart.config.data.datasets = Score;
      myChart.update();
      break;
    }
};
