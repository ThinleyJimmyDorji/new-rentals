export enum AuthEnum {
  LOGIN = 'login',
  SIGN_UP = 'signUp'
}

export type AuthType =
  | 'login'
  | 'signup'
  | 'resetPassword'
  | 'forgotPassword';
