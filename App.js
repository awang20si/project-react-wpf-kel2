import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Adminview from './components/Admin';
import Pembayaranview  from './components/Pembayaran';
import Sppview  from './components/Spp';
import Siswaview  from './components/Siswa';
import Lokalview  from './components/Lokal';
import Petugasview  from './components/Petugas';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30 }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Home</Text>
      </View>
    </View>
  );
}

function Admin({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Admin</Text>
      </View>
      <Adminview />
    </View>
  );
}

function Pembayaran({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Pembayaran</Text>
      </View>
         <Pembayaranview />
    </View>
  );
}


function Spp({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Spp</Text>
      </View>
         <Sppview />
    </View>
  );
}

function Siswa({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Siswa</Text>
      </View>
         <Siswaview />
    </View>
  );
}

function Lokal({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Lokal</Text>
      </View>
         <Lokalview />
    </View>
  );
}

function Petugas({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginTop: 30  }}>
          <Image style={{width:30, height:30}} source={require('/assets/Icon.png')} />
      </Pressable>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Petugas</Text>
      </View>
         <Petugasview />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Admin" component={Admin} />
        <Drawer.Screen name="Pembayaran" component={Pembayaran} />
        <Drawer.Screen name="Spp" component={Spp} />
        <Drawer.Screen name="Siswa" component={Siswa} />
        <Drawer.Screen name="Lokal" component={Lokal} />
        <Drawer.Screen name="Petugas" component={Petugas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
