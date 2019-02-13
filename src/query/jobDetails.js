import { gql } from "apollo-boost";

export const JOB_DETAILS = gql`
  query jobDetail(
    $role: RoleType!
    $languageCode: String
    $id: ID!
    $isHost: Boolean!
  ) {
    Job(role: $role, id: $id, languageCode: $languageCode, isHost: $isHost) {
      job {
        ...jobFields
      }
    }
  }

  fragment jobFields on jobFields {
    id
    title
    duration
    scheduledStartTime
    scheduledEndTime
    startTimeType
    totalTaskCount
    totalChecklistCount
    totalVerificationPictureCount
    offeredPrice
    note
    sentOn
  }
`;
