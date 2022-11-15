export enum AuthEnum {
  LOGIN = 'login',
  SIGN_UP = 'signup'
}

export type AuthType =
  | 'login'
  | 'signup'
  | 'resetPassword'
  | 'forgotPassword';
