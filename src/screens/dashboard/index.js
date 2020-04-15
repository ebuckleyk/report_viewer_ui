import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ActivityIndicator, Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as services from '../../services';

const Dashboard = () => {
  const navigation = useNavigation();
  const [reportList, setReportList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const list = await services.getReportList();
        setReportList(list);
      }
      catch (error) {
        console.error({error})
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])

  if (isLoading) return <ActivityIndicator style={styles.loader} animating={true} color={Colors.blue400} />
  return (
    <View style={styles.container}>
      {reportList.map(report => {
        return (
          <List.Item
            key={report.name}
            title={report.name}
            description={report.description}
            onPress={() => navigation.navigate('Report', {reportId: report.key})} />
        )
      })}
    </View>
  )
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})