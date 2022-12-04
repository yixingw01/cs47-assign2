import AppLoading from 'expo-app-loading';
import { ImageBackground, Platform, StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { Profiles, Icons, Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image 
            style={styles.navBarButton}
            source={Icons.menu.light}
            resizeMode='cover'
          />
        </TouchableOpacity>
        <Text style={styles.navBarText}>
            ensom
        </Text>
        <TouchableOpacity>
          <Image 
            style={styles.navBarButton}
            source={Icons.sun}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.profile, Themes.light.shadows]}>
        <View style={styles.profilePicture}>
            <Image
              style={styles.profilePicture}
              source={Profiles.mtl.image}
            />
            <Text style={styles.profilePictureName}>
              {Profiles.mtl.name}
            </Text>
            <Text style={styles.profilePictureCap}>
            {Profiles.mtl.caption}
            </Text>
        </View>

        <View style={styles.profileAudio}>
          <Text style={styles.profileAudioText}>
            My hottest take
          </Text>
          <View style={styles.profileBar}>
            <Image
              style={styles.prfileAudioPlay}
              source={Icons.player.light}
            />
            <Image
              style={styles.profileAudioWave}
              source={Icons.audioWave.light}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
          <View style={styles.bottomBarButton}>
            <Image 
              style={styles.bottomBarImage}
              source={Icons.discover.light}
            />
            <Text style={styles.bottomBarText}>
              Discover
            </Text>
          </View>
          <View style={styles.bottomBarButton}>
            <Image 
              style={styles.bottomBarImage}  
              source={Icons.heart.light}
            />
            <Text style={styles.bottomBarText}>
              Matches
            </Text>
          </View>
          <View style={styles.bottomBarButton}>
            <Image 
              style={styles.bottomBarImage}  
              source={Icons.messages.light}
            />
            <Text style={styles.bottomBarText}>
              DMs
            </Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    height: Platform.OS === 'ios' ? 41 : 54,
    flexDirection: "row",
    flex: 1,
    marginTop: 85,
  },
  navBarText: {
    fontFamily: 'Sydney',
    fontSize: 32,
    textAlign: 'center',
    flexGrow: 1,
  },
  navBarButton: {
    width: 50,
    height: 50,
    marginHorizontal: 35
  },
  profile: {
    flex: 6,
    width: 360,
    position: 'relative',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  profilePicture: {
    width: '100%',
    height: undefined,
    aspectRatio: 1/1.1,
    marginLeft: 15,
    borderRadius: 10,
  },
  profilePictureName: {
    textAlignVertical: 'top',
    marginLeft: 30,
    marginTop: '3%',
    position: 'absolute',
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    fontSize: 32
  },
  profilePictureCap: {
    marginLeft: 30,
    marginTop: '99%',
    textAlignVertical: 'bottom',
    position: 'absolute',
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    fontSize: 18
  },
  profileAudio: {
    width: '100%',
    height: 150,
    marginTop: 30,
    marginLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: Themes.light.bgSecondary,
  },
  profileAudioText: {
    fontFamily: 'Sydney',
    fontSize: 32,
    marginLeft: 10,
    marginVertical: 10
  },
  profileBar: {
    flexDirection: 'row',
    flexGrow: 1
  },
  prfileAudioPlay: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  profileAudioWave: {
    width: 280,
    height: 50,
    marginVertical: 10,
  },
  bottomBar: {
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: Themes.light.navigation,
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBarButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBarText: {
    fontFamily: 'Sydney',
    fontSize: 20,
    color: Themes.light.textSecondary,
    alignItems: 'center',
  },
  bottomBarImage: {
    width: 45,
    height: 45,
    marginHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E1FFEE',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
