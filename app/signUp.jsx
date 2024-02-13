import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Animated, { FadeInDown } from 'react-native-reanimated';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Signup() {
  const router = useRouter();

  const handleSignup = (values) => {
    router.push('/home');
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-64">
        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={'black'}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                  {touched.username && errors.username && <Text>{errors.username}</Text>}
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text>{errors.email}</Text>}
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-white p-5 rounded-2xl w-full mb-3">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && <Text>{errors.password}</Text>}
                </Animated.View>

                <Animated.View className="w-full" entering={FadeInDown.delay(600).duration(1000).springify()}>
                  <TouchableOpacity onPress={handleSubmit} className="w-full bg-red-500 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
                  <Text className="text-white">Already have an account? </Text>
                  <TouchableOpacity onPress={goToLogin}>
                    <Text className="text-red-500 font-bold">Login</Text>
                  </TouchableOpacity>
                </Animated.View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}