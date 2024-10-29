import { StyleSheet, Text, View } from 'react-native';
import { FoodhubProovider } from './src/context';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <FoodhubProovider>
      <Routes />
    </FoodhubProovider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
