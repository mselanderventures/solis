/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnboardBasicInfoInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: OnboardBasicInfo
// ====================================================

export interface OnboardBasicInfo_onboardBasicInfo_company {
  __typename: "CompanyType";
  name: string;
}

export interface OnboardBasicInfo_onboardBasicInfo {
  __typename: "OnboardBasicInfo";
  company: OnboardBasicInfo_onboardBasicInfo_company | null;
}

export interface OnboardBasicInfo {
  onboardBasicInfo: OnboardBasicInfo_onboardBasicInfo | null;
}

export interface OnboardBasicInfoVariables {
  input: OnboardBasicInfoInput;
}
