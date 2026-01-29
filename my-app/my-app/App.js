import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, Link} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
 const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <StatusBar style="auto" />
    <Button onPress={() => navigation.navigate('Profile')}>  Go to Profile  </Button>
    <Button onPress={() => navigation.navigate('Messages')}> Go to Messages </Button>
	  <Button onPress={() => navigation.navigate('About')}> Go to About </Button>
   </View>
 );
}


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://rammwiki.net/www/w/images/1/12/Liebe_ist_f%C3%BCr_alle_da_Special_Edition_cover.png' }}
        style={{ width: 150, height: 150 }}
      />

      <View style={styles.textBox}>
        <Text style={[styles.upperMargin, styles.left]}>Username</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
        />
      </View>

      <View style={styles.textBox}>
        <Text style={[styles.upperMargin, styles.left]}>Password</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
        />
      </View>

      <View style={[styles.buttonHolder, styles.upperMargin]}>
        <View style={styles.button}>
          <Button
            title="Create Account"
            color="#000000"
            onPress={() => console.log('Account Created')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Log In"
            color="#000000"
            onPress={() => console.log('Log In')}
          />
        </View>
      </View>

      <View style={styles.upperMargin}>
        <View style={styles.centered}>
          <TouchableOpacity onPress={() => console.log('Help')}>
            <Text style={styles.buttonText}>
              Help
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centered}>
          <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
            <Text style={styles.buttonText}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centered}>
          <TouchableOpacity onPress={() => console.log('Terms and Conditions')}>
            <Text style={styles.buttonText}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen() {
 return (
   <View style={styles.container}>
     <Text>Profile Screen</Text>
   </View>
 );
}

function MessagesScreen() {
 return (
   <View style={styles.container}>
     <Text>Messages Screen</Text>
   </View>
 );
}

function AboutScreen() {
 return (
   <View style={styles.container}>
     <Text>About Screen</Text>
   </View>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    marginTop: 20
  },

  upperMargin: {
    marginTop: 50
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: '#c2c2c288',
    borderWidth: 2,
    borderRadius: 5
  },

  textBox: {
    width: '70%',
    alignItems: 'flex-start'
  },

  button: {
    borderColor: '#9c9c9cc9',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#d4d4d421',
    width: '48%',
    height: 40
  },

  buttonHolder: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonText: {
    textDecorationLine: 'underline',
    color: '#1576e6ff',
    fontSize: 18
  },

  centered: {
    alignSelf: 'center',
    marginBottom: 10
  }
});