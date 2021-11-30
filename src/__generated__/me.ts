/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_me {
  __typename: "UserModel";
  id: string;
  name: string;
  email: string;
  username: string;
  isMe: boolean;
}

export interface me {
  me: me_me;
}
