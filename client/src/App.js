import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import Users from './components/Users';
const client = new ApolloClient({
  uri: "http://localhost:5000/",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <div className="container">
      <Users />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
