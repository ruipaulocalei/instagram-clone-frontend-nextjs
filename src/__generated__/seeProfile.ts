/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeProfile
// ====================================================

export interface seeProfile_seeProfile_profile_photos {
  __typename: "PhotoModel";
  id: string;
  caption: string | null;
  file: string;
  numberLikes: number;
}

export interface seeProfile_seeProfile_profile {
  __typename: "UserModel";
  id: string;
  name: string;
  username: string;
  bio: string | null;
  isMe: boolean;
  totalFollowing: number;
  totalFollowers: number;
  totalPublish: number;
  isFollowing: boolean;
  photos: seeProfile_seeProfile_profile_photos[] | null;
}

export interface seeProfile_seeProfile {
  __typename: "SeeProfileOutput";
  ok: boolean;
  error: string | null;
  profile: seeProfile_seeProfile_profile | null;
}

export interface seeProfile {
  seeProfile: seeProfile_seeProfile;
}

export interface seeProfileVariables {
  input: string;
}
