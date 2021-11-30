/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LikePhotoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: like
// ====================================================

export interface like_likePhoto {
  __typename: "LikePhotoOutput";
  ok: boolean;
  error: string | null;
}

export interface like {
  likePhoto: like_likePhoto;
}

export interface likeVariables {
  input: LikePhotoInput;
}
