export enum AuthEnum {
  LANDING = 'landing',
  LOGIN = 'login',
  SIGN_UP = 'signup'
}

export type AuthType =
  | 'login'
  | 'signup'
  | 'resetPassword'
  | 'forgotPassword';
