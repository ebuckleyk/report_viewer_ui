import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import DataTable from './components/datatable';
import * as services from '../../services';
import {reportList} from './testdata';

const Report = ({ route }) => {
  const [report, setReport] = React.useState(null);
  const [reportName, setReportName] = React.useState('');
  const [reportDescription, setReportDescription] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(0);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await services.getReportData(route.params.reportId);
        const {total, pageSize, pageNumber, report} = result;
        const {name, description} = report;
        setReportName(name);
        setReportDescription(description);
        setReport(report);
        setTotal(total);
        setPageSize(pageSize);
        setPageNumber(pageNumber);
      } catch (error) {
        console.error({error})
      }
    }

    fetchData();
  }, [route.params.reportId])

  if (!report && !pageSize && !pageNumber) return <ActivityIndicator style={styles.container} animating={true} color={Colors.blue400} />

  return (
    <DataTable
      dataCount={total}
      pageSize={pageSize}
      pageNumber={pageNumber}
      reportName={reportName}
      report={report} />
  )
}

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});