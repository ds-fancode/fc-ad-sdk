import axios from 'axios';

export const fetchQuery = () => {

  return fetch('https://www.fancode.com/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      "operationName": "seoRankingData",
      "operation": "query",
      "variables": {
        "input": {
          "url": "/",
          "context": null,
        },
      },
      "query":
        "query seoRankingData($input: SEORankingInput!) { SEORankingData(input: $input) { metaTitle metaDescription metaKeyWords pageHeading }}",
    }),
  })
    .then(res => res.json())
    .catch(err => {
      console.log('E: ', err);
    });
};
