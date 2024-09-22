import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import FormField from '../../components/FormField';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/PrimaryButton';
import { useRouter } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../(services)/api';

const SignIn = () => {

  const router  = useRouter()
  // State for sign-in form
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });

  // State for sign-up form
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isSignIn, setIsSignIn] = useState(true);  // Toggle between sign-in and sign-up

  // Toggle between forms
  const toggleForm = (formType) => {
    setIsSignIn(formType === 'signIn');
  };

  // Handle input changes for sign-in form
  const handleSignInChange = (field, value) => {
    setSignInForm({
      ...signInForm,
      [field]: value
    });
  };

  // Handle input changes for sign-up form
  const handleSignUpChange = (field, value) => {
    setSignUpForm({
      ...signUpForm,
      [field]: value
    });
  };

  // Submit the form based on sign-in or sign-up
  const handleSubmit = () => {
    if (isSignIn) {
      // Handle sign-in form submission
      const mutation = useMutation({
        mutationFn: loginUser,
        mutationKey: ["login"]
      })
      console.warn("Sign In Form Data mutation:", mutation);
      router.push("/(tabs)")
      // Add logic to submit the sign-in form data to the backend
    } else {
      // Handle sign-up form submission
      console.warn("Sign Up Form Data:", signUpForm);
      // Add logic to submit the sign-up form data to the backend
    }
  };

  return (
    <SafeAreaView className="h-screen">
      <ScrollView className="w-full">
        <View className="px-2">
          <View className="flex items-center justify-center flex-row mb-10  p-2 bg-green-100 border border-green-200 rounded-md ">
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => toggleForm('signIn')}
            >
              <Text className={`${isSignIn ? "bg-green-500 text-white" : ""} px-4 py-1 rounded-md font-medium text-lg border border-transparent duration-500`}>
                Sign in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => toggleForm('signUp')}
            >
              <Text className={`${!isSignIn ? "bg-green-500 text-white" : ""} px-4 py-1 rounded-md font-medium text-lg border border-transparent duration-500`}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Display Sign-In Form */}
          {isSignIn ? (
            <View className="bg-green-100 p-2 rounded-md border border-green-200">
              <FormField
                placeholder={"Email"}
                value={signInForm.email}
                handleChangeText={(e) => handleSignInChange('email', e)}
                otherStyle="mt-4"
                keyboardType="email-address"
              />
              <FormField
                placeholder={"Password"}
                value={signInForm.password}
                handleChangeText={(e) => handleSignInChange('password', e)}
                otherStyle="my-4"
                secureTextEntry
              />
              <PrimaryButton title={"Login"} onClickFunc={handleSubmit} />
            </View>
          ) : (
            // Display Sign-Up Form
            <View className="bg-green-100 p-2 rounded-md border border-green-200">
              <FormField
                placeholder={"Name"}
                value={signUpForm.name}
                handleChangeText={(e) => handleSignUpChange('name', e)}
                otherStyle="mt-4"
              />
              <FormField
                placeholder={"Email"}
                value={signUpForm.email}
                handleChangeText={(e) => handleSignUpChange('email', e)}
                otherStyle="mt-4"
                keyboardType="email-address"
              />
              <FormField
                placeholder={"Password"}
                value={signUpForm.password}
                handleChangeText={(e) => handleSignUpChange('password', e)}
                otherStyle="my-4"
                secureTextEntry
              />
              <PrimaryButton title={"Register"} onClickFunc={handleSubmit} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;