import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import ButtonComponent from "../components/ButtonComponent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageComponent />
         <Text style={styles.heading}>Anas Riki</Text>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.buttonText}>About Me</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Contact')}>
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
        </View>
         
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
        flexDirectionz: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#f0f',
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
});



// import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import ImageComponent from '../components/ImageComponent';
// import ButtonComponent from "../components/ButtonComponent";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handlePress = () => {
//     this.props.navigation.navigate('About');
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageComponent />
//         <Text style={styles.heading}>Anas Riki</Text>
//         <ButtonComponent name="About Me" onPress={() => this.handlePress("About Me")} />
//         <ButtonComponent name="Contact" onPress={() => this.handlePress("Contact")} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 30,
//     color: 'black',
//     fontFamily: 'monospace',
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });
