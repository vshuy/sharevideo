
describe("REGISTER TEST", function() {

    it("cai 1", async function() {
        var datatest = {
            name: "admin",
            email: "admin",
            password: "admin"
        };
        expect(false).toBe(JSON.parse(await registerrequest(datatest))) ;
    });
    it("cai 2", async function() {
        var datatest = {
            name: "admin",
            email: "adminhk416m16a4",
            password: "admin"
        };
        expect(false).toBe(JSON.parse(await registerrequest(datatest))) ;
    });
    it("cai 3", async function() {
        var datatest = {
            name: "admin",
            email: "adanj",
            password: "newpassword"
        };
        expect(false).toBe(JSON.parse(await registerrequest(datatest))) ;
    });
    it("cai 4", async function() {
        var datatest = {
            name: "admin",
            email: "newusername12",
            password: "newpassword"
        };
        expect(true).toBe(JSON.parse(await registerrequest(datatest))) ;
    });
     it("cai 5", async function() {
        var datatest = {
            name: "admin",
            email: "newusername",
            password: "newpassword"
        };
        expect(false).toBe(JSON.parse(await registerrequest(datatest))) ;
    });
    it("cai thu 5", async function() {
        var datatest = {
            name: "admin",
            email: "newusername",
            password: "newpassword"
        };
        expect(false).toBe(JSON.parse(await registerrequest(datatest))) ;
    });


});
