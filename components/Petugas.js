import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Petugasview() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://c967-116-206-36-34.ngrok.io/api/employee',
        {
          headers: new Headers({
            'ngrok-skip-browser-warning': '69420',
          }),
        }
      );
      const json = await response.json();
      setData(json.data.data);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Nama Petugas</DataTable.Title>
            <DataTable.Title>Email Petugas</DataTable.Title>
            <DataTable.Title>No Telephone Petugas</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.nama_petugas}</Text>
              )}
            />
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => <Text>{item.email_petugas}</Text>}
            />
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.no_telephone_petugas}</Text>
              )}
            />
          </DataTable.Row>
        </DataTable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
