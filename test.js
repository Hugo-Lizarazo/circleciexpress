const assert = require("assert").strict;
const httpMocks = require("node-mocks-http");
const exampleRouteHandler = require("./example-router");
describe("Example Test 1", () => {
  it("should return 'Goodbye Earthling!!' for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling!!";
    assertsame(actualResponseBody, expectedResponseBody)
  });
});