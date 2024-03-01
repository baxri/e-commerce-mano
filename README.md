### Time spent:

- Task 1: Build ecommerce platform took around 10h
- Task 2: Review the code and refactor took around 1h

### Task 2 solutions

1. Refactor the following Mobx store, keeping in mind code structure, separation of concerns,
   functionality and code cleanliness.

```javascript
import axios from "axios";
import { makeObservable } from "mobx";

const API_URL = "https://jsonplaceholder.typicode.com";

// Create a new Axios instance with a custom base URL
const request = axios.create({
  baseURL: API_URL,
});

class ProductsStore {
  products = [];
  cartItems = [];
  addresses = [];
  constructor() {
    makeObservable(this, {
      addresses: true,
      products: true,
      cartItems: true,
    });
  }

  async loadData(url) {
    try {
      const response = await request.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  async fetchProducts() {
    this.products = await this.loadData("/posts");
  }

  async fetchAddresses() {
    this.addresses = await this.loadData("/todos");
  }

  getIndexById(id) {
    return this.cartItems.findIndex((item) => item.id === id);
  }

  addToCart(product) {
    if (this.getIndexById(product.id) < 0) {
      this.cartItems.push(product);
    }
  }

  removeFromCart(productId) {
    this.cartItems.splice(this.getIndexById(productId.id), 1);
  }
}
const store = new ProductsStore();
export default store;
```

2. Review the existing components and identify any reusable components. Refactor the code to
   ensure optimization.

```javascript
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

```
