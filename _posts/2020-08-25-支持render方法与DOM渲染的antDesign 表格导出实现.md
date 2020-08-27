表格导出功能 支持render方法 支持DOM渲染 （初级）


```js
import ExportJsonExcel from "js-export-excel";
import {message} from "antd";
/**
 * @param {Array} dataSource
 * @param {Array} columns
 * @param {String} title
 * */
export const excelExporter = ({dataSource, columns, title = '记录导出文件'}) => {
    return new Promise((resolve, reject) => {
        const hide = message.loading('导出中')
        const option = {};
        const getReactElementLoop = (element) => {
            const propChilds = element.props.children
            let result = ''
            switch (typeof propChilds) {
                case "object":
                    if (isArr(propChilds)) {
                        for (const child of propChilds) {
                            result += getReactElementLoop(child) + ' '
                        }
                    } else {
                        result = getReactElementLoop(propChilds)
                    }
                    break;
                default:
                    result = propChilds;
                    break;
            }
            return result
        }
        option.fileName = title;
        option.datas = [
            {
                sheetData: dataSource.map(item => {
                    const result = {};
                    columns.forEach(c => {
                        result[c.dataIndex] = c.render ? c.render(item[c.dataIndex], item) : item[c.dataIndex];
                        if (typeof result[c.dataIndex] === 'object') {
                            result[c.dataIndex] = getReactElementLoop(result[c.dataIndex])
                        }
                    });
                    return result;
                }),
                sheetName: title,     // Excel文件名称
                sheetFilter: columns.map(item => item.dataIndex),
                sheetHeader: columns.map(item => item.title),
                columnWidths: columns.map(() => 10),
            },
        ];
        const toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel();
        setTimeout(hide, 500)
        resolve(1)
    })
}





```