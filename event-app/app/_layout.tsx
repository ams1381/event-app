// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {SplashScreen, Stack, useRouter} from "expo-router";
import { useEffect } from "react";
import {getData} from "../Utills/StorageUtils";
import {useRoute} from "@react-navigation/native";
import {axiosInstance} from "../Utills/axios";
// import { useEffect } from "react";
// import { useColorScheme } from "react-native";

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    regular: require("./../assets/fonts/IRANSansXFaNum-Regular.ttf"),
    medium: require("./../assets/fonts/IRANSansXFaNum-Medium.ttf"),
    bold: require("./../assets/fonts/IRANSansXFaNum-Bold.ttf"),
    Black: require("./../assets/fonts/IRANSansXFaNum-Black.ttf"),
  });
  getData<string>('access').then((userToken) => {
    if(userToken) {
      router.push('/expert-panel/');
      axiosInstance.defaults.headers['Authorization'] = 'JWT ' + userToken;
    }

  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;

}

function RootLayoutNav() {

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
    </Stack>
  );
}
