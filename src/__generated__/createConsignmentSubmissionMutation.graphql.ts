/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ConsignmentSubmissionCategoryAggregation = "ARCHITECTURE" | "DESIGN_DECORATIVE_ART" | "DRAWING_COLLAGE_OR_OTHER_WORK_ON_PAPER" | "FASHION_DESIGN_AND_WEARABLE_ART" | "INSTALLATION" | "JEWELRY" | "MIXED_MEDIA" | "OTHER" | "PAINTING" | "PERFORMANCE_ART" | "PHOTOGRAPHY" | "PRINT" | "SCULPTURE" | "TEXTILE_ARTS" | "VIDEO_FILM_ANIMATION" | "%future added value";
export type ConsignmentSubmissionStateAggregation = "APPROVED" | "DRAFT" | "REJECTED" | "SUBMITTED" | "%future added value";
export type CreateSubmissionMutationInput = {
    readonly clientMutationId?: string | null;
    readonly additionalInfo?: string | null;
    readonly artistID: string;
    readonly authenticityCertificate?: boolean | null;
    readonly category?: ConsignmentSubmissionCategoryAggregation | null;
    readonly currency?: string | null;
    readonly depth?: string | null;
    readonly dimensionsMetric?: string | null;
    readonly edition?: boolean | null;
    readonly editionNumber?: string | null;
    readonly editionSize?: number | null;
    readonly height?: string | null;
    readonly locationCity?: string | null;
    readonly locationCountry?: string | null;
    readonly locationState?: string | null;
    readonly medium?: string | null;
    readonly minimumPriceDollars?: number | null;
    readonly provenance?: string | null;
    readonly signature?: boolean | null;
    readonly state?: ConsignmentSubmissionStateAggregation | null;
    readonly title?: string | null;
    readonly width?: string | null;
    readonly year?: string | null;
};
export type createConsignmentSubmissionMutationVariables = {
    input: CreateSubmissionMutationInput;
};
export type createConsignmentSubmissionMutationResponse = {
    readonly createConsignmentSubmission: {
        readonly consignmentSubmission: {
            readonly internalID: string | null;
        } | null;
    } | null;
};
export type createConsignmentSubmissionMutation = {
    readonly response: createConsignmentSubmissionMutationResponse;
    readonly variables: createConsignmentSubmissionMutationVariables;
};



/*
mutation createConsignmentSubmissionMutation(
  $input: CreateSubmissionMutationInput!
) {
  createConsignmentSubmission(input: $input) {
    consignmentSubmission {
      internalID
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSubmissionMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createConsignmentSubmissionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createConsignmentSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "consignmentSubmission",
            "storageKey": null,
            "args": null,
            "concreteType": "ConsignmentSubmission",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "createConsignmentSubmissionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createConsignmentSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "consignmentSubmission",
            "storageKey": null,
            "args": null,
            "concreteType": "ConsignmentSubmission",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "createConsignmentSubmissionMutation",
    "id": "fd4f1ff25cf937f269558e95330ce314",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '960c9b16eb4c0b3f443f638be859c670';
export default node;
