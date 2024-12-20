import {gql} from 'apollo-boost';

// exercise query
export const GET_EXERCISES = gql`
    query {
        getExercises{
            title
            muscleGroup
            description
            value
            imageUrl
            cardioLevel
            flexibilityLevel
            strengthLevel
        }
    }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
