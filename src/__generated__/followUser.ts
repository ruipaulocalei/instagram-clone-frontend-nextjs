/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FollowUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: followUser
// ====================================================

export interface followUser_followUser {
  __typename: "OutputDto";
  ok: boolean;
  error: string | null;
}

export interface followUser {
  followUser: followUser_followUser;
}

export interface followUserVariables {
  input: FollowUserInput;
}
