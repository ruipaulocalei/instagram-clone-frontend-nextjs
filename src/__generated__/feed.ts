/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: feed
// ====================================================

export interface feed_feed_user {
  __typename: "UserModel";
  username: string;
  isMe: boolean;
}

export interface feed_feed {
  __typename: "PhotoModel";
  id: string;
  caption: string | null;
  file: string;
  numberLikes: number;
  isMine: boolean;
  isLiked: boolean;
  user: feed_feed_user;
}

export interface feed {
  feed: feed_feed[];
}
