import React from 'react';
import MUIDataTable from 'mui-datatables';

const getRowOptions = (minCount, optionSize = 2) => {
  let i;
  const arr = [minCount];
  let lastMin = minCount;
  for (i = 0; i < optionSize; i++) {
    const nextVal = Math.ceil(lastMin * 1.6);
    arr.push(nextVal);
    lastMin = nextVal;
  }
  return arr;
}

const ReportDatatable = ({reportName, report, dataCount, pageNumber, pageSize}) => {
  const {reportMetaData, data} = report;
  const rowsPerPageOptions = getRowOptions(dataCount);
  const dataColumns = reportMetaData.map(m => m.columnName);
  const arrayOfData = data.map(d => Object.values(d));
  const options = {
    filterType: 'dropdown',
    responsive: 'scroll',
    responsive: 'stacked',
    page: pageNumber,
    count: dataCount,
    rowsPerPage: pageSize,
    rowsPerPageOptions
  };
  return (
    <MUIDataTable
      title={reportName}
      columns={dataColumns}
      data={arrayOfData}
      options={options}
    />
  )
}

export default ReportDatatable;