import {ApolloClient, InMemoryCache, HttpLink, ApolloLink} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context'
import { getAuth } from 'firebase/auth'

const uri = 'http://localhost:8000/graphql/'



const authLink = setContext(async (req, { headers }) => {
    const auth = getAuth()
    const token = await auth.currentUser?.getIdToken()
  
    return {
      ...headers,
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

const httpLink = new HttpLink({
    uri,
    credentials: 'same-origin',
    fetchOptions: {
        mode: 'no-cors',
      },
})
  

export const client = new ApolloClient({
    link: ApolloLink.from([
        httpLink,
        createUploadLink({ 
            uri
        }),
        authLink,
      ]),
    cache: new InMemoryCache()
    
  });

  