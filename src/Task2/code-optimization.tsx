import { NavigationProp } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";

type InputProps = {} & TextInputProps;
const Input: React.FC<InputProps> = (props) => {
  return <TextInput {...props} />;
};

type ContainerProps = {
  children: React.ReactNode;
};
const Container: React.FC<ContainerProps> = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// We can replace any with more specific types if we have defined them in our navigation stack.
const Screen: React.FC<{
  navigation: NavigationProp<any>;
}> = ({ navigation }) => {
  const [name, setName] = useState("");
  const submitName = useCallback(() => {
    navigation.navigate("AnotherScreen", { name });
  }, [name]);

  return (
    <Container>
      <Input value={name} onChangeText={(text) => setName(text)} />
      <Button title="DONE" onPress={submitName} />
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "red",
  },
  container: {
    flex: 1,
  },
});

export default Screen;
