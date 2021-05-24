import ECharts from 'vue-echarts'

var colorArr = [
  {
    top: '#2B3067', // 紫色
    bottom: '#2B3067'
  },
  {
    top: '#2B3067', // 红色
    bottom: '#2B3067'
  }
]
export const barOption = {
  backgroundColor: '#fff',
  grid: {
    top: '15%',
    right: 0,
    left: '60px',
    bottom: '12%'
  },
  tooltip: {
    trigger: 'axis',
    padding: 10
  },
  dataZoom: [
    {
      show: true,
      height: 30,
      xAxisIndex: [0],
      bottom: 30,
      start: 10,
      end: 80,
      handleStyle: {
        color: '#3693ff'
      }
    },
    {
      type: 'inside',
      show: true,
      height: 15,
      start: 10,
      end: 80
    }
  ],
  xAxis: [
    {
      type: 'category',
      color: '#59588D',
      data: [],
      axisLabel: {
        margin: 20,
        color: '#999',
        textStyle: {
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(107,107,107,0.37)'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      min: 0,
      axisLabel: {
        formatter: '${value}',
        color: '#999',
        textStyle: {
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(107,107,107,0.37)'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(131,101,101,0.2)',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [],
      barWidth: '20px',
      itemStyle: {
        normal: {
          color: function(params) {
            const num = colorArr.length
            return new ECharts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: colorArr[params.dataIndex % num].top // 0% 处的颜色
                },
                {
                  // 可根据具体情况决定哪根柱子显示哪种颜色
                  offset: 1,
                  color: colorArr[params.dataIndex % num].bottom // 100% 处的颜色
                }
              ],
              false
            )
          },
          barBorderRadius: [30, 30, 0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold',
          formatter: '${c}',
          color: '#333',
          position: 'top'
        }
      }
    }
  ]
}
