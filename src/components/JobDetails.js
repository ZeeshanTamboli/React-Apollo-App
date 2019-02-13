import React, { Component } from "react";
import { Query } from "react-apollo";

import { JOB_DETAILS } from "../query/jobDetails";

class JobDetails extends Component {
  render() {
    return (
      <Query
        query={JOB_DETAILS}
        variables={{
          role: "CLEANER",
          languageCode: "en",
          id: "5c6354876dfc54fe477b8904",
          isHost: false
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          return <h1>{data.Job.job.id}</h1>;
        }}
      </Query>
    );
  }
}

export default JobDetails;
