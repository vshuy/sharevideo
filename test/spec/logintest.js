
describe("LOGIN TEST", function() {
    it("Succeed with EMAIL admin PASSWORD admin", async function() {
        var datatest = {
            name: "",
            email: "admin",
            password: "admin"
        };
        var answer = {
            name: "adming2",
            status: "true"
        }
        expect(answer).toEqual(JSON.parse(await loginrequest(datatest))) ;
    });
     it("Failed with EMAIL admin wrong PASSWORD Yasuo", async function() {
        var datatest = {
            name: "",
            email: "admin1",
            password: "Yasuo"
        };
        var answer = {
            name: "",
            status: "false"
        }
        expect(answer).toEqual(JSON.parse(await loginrequest(datatest))) ;
    });
    it("Failed with EMAIL NULL PASSWORD admin", async function() {
        var datatest = {
            name: "",
            email: "",
            password: "admin"
        };
        var answer = {
            name: "",
            status: "false"
        }
        expect(answer).toEqual(JSON.parse(await loginrequest(datatest))) ;
    });
    it("Failed with leng EMAIL > 15 lysine.yasuo.nasus  PASSWORD m416", async function() {
        var datatest = {
            name: "",
            email: "lysine.yasuo.nasus",
            password: "m416"
        };
        var answer = {
            name: "",
            status: "false"
        }
        expect(answer).toEqual(JSON.parse(await loginrequest(datatest))) ;
    });
});
