import supertest from "supertest";

const request = supertest(
  "https://api.sa-tech.de/{cacheable}/auth/v1/{tenant}"
);

let jsondata1 = {
  customerNumber: "123456789",
  password: "aA1!bB2@cC3#dD4$",
};
let jsondata2 = {
  customerNumber: "123456789",
  password: "",
};

describe("Testing Login Apis", () => {
  it("Loging in with valid username and password", () => {
    request.post("/login?",{"auth" :jsondata1}).end((res) => {
        expect(res.body).to.not.be.empty;
  });
})
  

  it("Loging in with invalid username and password", () => {
    request.post("/login?",{"auth" :jsondata2}).end((res) => {
        expect(res.body).to.not.be.empty;
        expect(res.statuscode).to.be.eq(400);
    });
  });
})
