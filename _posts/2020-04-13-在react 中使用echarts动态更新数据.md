``` js

import ReactEcharts from 'echarts-for-react';

class EchartsProjects extends Component {
    getOption = () => ({option}})

    updateOption = () => (
        const option = this.getOption()

        // do Update
        option.series[0].data = this.pieData
        option.legend.data = this.legendData

        this.echartsElement.getEchartsInstance().setOption(option)
    )

    render() {
        return <ReactEcharts
            lazyUpdate
            ref={(e) => {this.echartsElement = e;}}
            option={this.getOption()}
            style={{height: '212px', width: '100%'}}
            className={'react_for_echarts'}
               />
    }
  }

```