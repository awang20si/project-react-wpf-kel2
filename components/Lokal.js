import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Lokalview() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://c967-116-206-36-34.ngrok.io/api/lokal',
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
            <DataTable.Title>Nama Kelas</DataTable.Title>
            <DataTable.Title>Jurusan</DataTable.Title>
            <DataTable.Title>Keterangan</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.nama_kelas}</Text>
            )}
          />
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.jurusan}</Text>
            )}
          />
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.keterangan}</Text>
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
