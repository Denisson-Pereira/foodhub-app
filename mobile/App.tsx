import { FoodhubProvider } from './src/context';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <FoodhubProvider>
      <Routes />
    </FoodhubProvider>
  );
}
