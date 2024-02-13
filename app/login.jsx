import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';

const LoginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function Login() {
  const router = useRouter();

  const handleLogin = (values) => {
    router.push('/home');
  };

  const goToSignup = () => {
    router.push('/signUp');
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-80">

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {(formikProps) => (
              <>
                <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                  />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    secureTextEntry
                    onChangeText={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
                  />
                </Animated.View>

                <Animated.View className="w-full" entering={FadeInDown.delay(400).duration(1000).springify()}>
                  <TouchableOpacity onPress={formikProps.handleSubmit} className="w-full bg-red-500 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Login</Text>
                  </TouchableOpacity>
                </Animated.View>
              </>
            )}
          </Formik>

          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
            <Text className="text-white">Don't have an account? </Text>
            <TouchableOpacity onPress={goToSignup}>
              <Text className="text-red-500 font-bold">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
