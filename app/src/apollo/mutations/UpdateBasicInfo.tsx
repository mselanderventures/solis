import { gql } from '@apollo/client';

export const ONBOARD_BASIC_INFO = gql`
    mutation OnboardBasicInfo($input: OnboardBasicInfoInput!) {
        onboardBasicInfo(input: $input) {
            company {
                name
            }
        }
    }
`;
