import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

function useStyles() {
  return StyleSheet.create({
    root: {
      backgroundColor: '#000000',
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    form: {
      alignItems: 'center',
      backgroundColor: 'rgb(58, 58, 60)',
      borderRadius: 8,
      flexDirection: 'column',
      height: 200,
      justifyContent: 'space-evenly',
      paddingHorizontal: 16,
      width: '100%',
    },
    label: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: '100%',
    },
    textInput: {
      backgroundColor: 'rgba(235, 235, 245, 0.6)',
      borderRadius: 8,
      color: '#000000',
      fontSize: 15,
      fontWeight: '400',
      height: 48,
      paddingHorizontal: 16,
      width: '100%',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'rgb(93, 95, 222)',
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
      width: '100%',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
  });
}

const App = () => {
  const styles = useStyles();
  const {control, handleSubmit, formState} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                />
              </>
            )}
            name="email"
            rules={{required: true}}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  textContentType="password"
                />
              </>
            )}
            name="password"
            rules={{required: true}}
            defaultValue=""
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
            disabled={!formState.isValid}>
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;