import NodeClient from "../index";

describe("Node Client tests", function () {
  let nodeClient: NodeClient;

  beforeAll(async () => {
    nodeClient = new NodeClient({ txServiceUrl: "https://sdk-backend.staging.biconomy.io/v1" });
  });

  describe("Gas Estimation Endpoints", () => {
    it("Empty test to remove warning", () => {});
  });
});
