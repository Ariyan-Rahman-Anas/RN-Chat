import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './(services)/queryClient';
export default function App() {

  const router = useRouter()

  const handleRoutingToSignIn = () => {
    router.navigate("/sign-in")
  }
  return (
    <QueryClientProvider client={queryClient} >
      <SafeAreaView className="flex-1 items-center justify-center" >
      <Text className="text-5xl font-semibold tracking-widest " >Blogify</Text>
      <PrimaryButton
        onClickFunc={handleRoutingToSignIn}
        title={"Let's Start"} />
      <StatusBar style="auto" /> 
    </SafeAreaView>
      </QueryClientProvider>
  );
}