const React = require('react');
const ReactDOM = require('react-dom');
const Chart = require('react-d3-core').Chart;
const LineChart = require('react-d3-basic').LineChart;
import chartData from './user_sample.json';
import ec_line from './ec_line.json';
var echarts = require('echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// console.log('myFnc');

// document.attachEvent("onload", 'myFunction');
(function (){
  console.log('myFnc123');
  // load your general data



/*======================
react
=======================*/
  const width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#fa0'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        showXGrid= {false}
        showYGrid= {false}
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
  , document.getElementById('test3')
  )


})();//function end
/*======================
      bar chart
=======================*/
did();
function did(){
  // console.clear();

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    // 4. 將 todos 搬到 state 中：
    //    放在 state 的好處是當使用 this.setState() 更新 todos 後，
    //    React 會幫你重新 render，讓使用者看到最新的畫面。
    //
    //    PS. React 的資料模型分兩種：props、state，
    //    你應該盡可能讓底層元件存取資料的方式是使用 props，
    //    所以我們將 todos 儲存在上層元件 (TodoApp) 的 state 中。
    this.state = {
      // ec_line: []
    };  
  }  
  shouldComponentUpdate() {
    return false
  }
  componentDidMount() {
   
        
    var x = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, 420]);
    
    d3.select(this.refs.chart)
      .selectAll("div")
      .data(this.props.data)
      .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
        console.log('echarts123');
      /*======================
              echarts
      =======================*/
      //先給定div長寬，寫在css裡面沒用，因為它會覆蓋其css設定
      document.getElementById('test1').style.width = '50%';
      document.getElementById('test1').style.height = '700px';
      console.log(document.getElementById('test1').style.width ,'wwwwwidth');
      var myChart = echarts.init(document.getElementById('test1'));
      // 绘制图表
      myChart.setOption(ec_line);        

  }
  render() {
    return <div ref="chart" className="chart"></div>;
  }
}

var data = [15, 22, 32, 41,50,10]

ReactDOM.render(<App data={data} />, document.querySelector('#test2'));
}
/*======================

,
=======================*/
/*did2();
function did2(){
setTimeout(() => {
  ReactDOM.render(
    <Graph
      width={480}
      height={320}
      data={[{time: 100, value: 52}, {time: 120, value: 72}, {time: 200, value: 10}, {time: 240, value: 5}]}
    />
  , document.getElementById('test4'));
}, 1000);

class Graph extends React.Component {


  render () {
    const {width, height, data} = this.props;
    const lineXAcc = ({time}) => time;
    const lineYAcc = ({value}) => value;
    return (
      <div>
        <svg
            {...{height, width}}
            viewBox={`0 0 ${width} ${height}`}
        >
          <LineWithAxes
            {...{width, height, data}}
            xAxisHeight={30}
            yAxisWidth={30}
            xAccessor={({time}) => time}
            yAccessor={({value}) => value}
          />
        </svg>
      </div>
    );
  }
}

const AxesWrapper = () => ComposedComponent => class extends React.Component {


  render () {
    const {width, height, data, xAxisHeight, yAxisWidth, xAccessor, yAccessor} = this.props;
    const xScale = d3.scaleLinear().domain(d3.extent(data, xAccessor)).range([0, width - yAxisWidth]);
    const yScale = d3.scaleLinear().domain(d3.extent(data, yAccessor)).range([height - xAxisHeight, 0]);
    return (
      <g>
        <g transform={'translate(0, 0)'}>
          <VerticalAxis {...{width: yAxisWidth, height: height - xAxisHeight, data, scale: yScale}} />
        </g>
        <g transform={`translate(${yAxisWidth}, 0)`}>
          <ComposedComponent {...{width: width - yAxisWidth, height: height - xAxisHeight, data, xScale, yScale}} />
        </g>
        <g transform={`translate(${yAxisWidth}, ${height - xAxisHeight})`}>
          <HorizontalAxis {...{width: width - yAxisWidth, height: xAxisHeight, data, scale: xScale}} />
        </g>
      </g>
    );
  }
}

class Line extends React.Component {


  render () {
    const {width, height, data, xScale, yScale} = this.props;
    const line = d3.line().x(({time}) => xScale(time)).y(({value}) => yScale(value)); // refactor, this doesn't belong here
    const linePath = line(data);
    return (
      <path d={linePath} style={{fill: 'none', stroke: '#333'}} />
    );
  }
}

const LineWithAxes = AxesWrapper()(Line);

class HorizontalAxis extends React.Component {


  render () {
    const {scale} = this.props;
    const tickValues = scale.ticks();
    const ticks = tickValues.map((tickValue, key) => {
      const xPos = scale(tickValue);
      return (
        <g
            transform={`translate(${xPos}, 0)`}
            key={key}
        >
          <line
              x1={0}
              y1={0}
              x2={0}
              y2={30}
              stroke={'#f00'}
          />
          <text
              x={0}
              y={0}
              dy={'1em'}
              textAnchor={'middle'}
          >{tickValue}</text>
        </g>
      );
    });
    return (
      <g>{ticks}</g>
    );
  }
}

class VerticalAxis extends React.Component {


  render () {
    const {scale} = this.props;
    const tickValues = scale.ticks();
    const ticks = tickValues.map((tickValue, key) => {
      const yPos = scale(tickValue);
      return (
        <g
            transform={`translate(0, ${yPos})`}
            key={key}
        >
          <line
              x1={0}
              y1={0}
              x2={30}
              y2={0}
              stroke={'#f00'}
          />
          <text
              x={0}
              y={0}
              dy={'0.35em'}
          >{tickValue}</text>
        </g>
      );
    });
    return (
      <g>{ticks}</g>
    );
  }
}
}*/
