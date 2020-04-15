import React from 'react';
import { View } from 'react-native';
import { DataTable, FAB, Portal} from 'react-native-paper';

const ReportDatatable = ({reportName, report}) => {
  const [open, setOpen] = React.useState(false);
  const {reportMetaData, data} = report;
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          {reportMetaData.map(metadata => {
            return (<DataTable.Title>{metadata.columnName}</DataTable.Title>)
          })}
        </DataTable.Header>
        {data.map(d => {
          return (
            <DataTable.Row>
              {reportMetaData.map(metadata => {
                return (<DataTable.Cell>{d[metadata.columnName]}</DataTable.Cell>)
              })}
            </DataTable.Row>
          )
        })}
      </DataTable>
      <Portal>
        <FAB.Group
             open={open}
             icon={open ? 'close' : 'unfold-more-horizontal'}
             actions={[
               { icon: 'cloud-download', label: 'Download', onPress: () => console.log('Pressed download') },
             ]}
             onStateChange={({ open }) => setOpen(open)}
             onPress={() => {
               if (open) {
                 // do something if the speed dial is open
               }
             }}
           />
      </Portal>
    </View>
  )
}

export default ReportDatatable;