/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FollowUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: unfollowUser
// ====================================================

export interface unfollowUser_unfollowUser {
  __typename: "OutputDto";
  ok: boolean;
  error: string | null;
}

export interface unfollowUser {
  unfollowUser: unfollowUser_unfollowUser;
}

export interface unfollowUserVariables {
  input: FollowUserInput;
}
