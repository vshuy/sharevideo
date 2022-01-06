describe("UPLOAD COMMENT TEST", function() {

    it("Success EMAIL xuananh PASSWORD anhxuan CONTENT clip ko hay ", async function() {
        var datatest = {
            email: "xuananh",
            password: "anhxuan",
            content: "clip khong hay xuan anh test update comment",
            timeup: "Oct 18 2020 23:03:53",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(true).toBe(JSON.parse(await insertcommentreques(datatest)));
    });
    it("False  EMAIL hacker PASSWORD hacker CONTENT null", async function() {
        var datatest = {
            email: "hacker",
            password: "hacker",
            content: "",
            timeup: "Oct 18 2020 23:03:53",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await insertcommentreques(datatest)));
    });
    it("False EMAIL xuananh PASSWORD null CONTENT clip ko hay", async function() {
        var datatest = {
            email: "xuananh",
            password: "",
            content: "clip khong hay",
            timeup: "Oct 18 2020 23:03:53",
            linkimg: "5fe1052548a58.jpg"
        };
        expect(false).toBe(JSON.parse(await insertcommentreques(datatest)));
    });

});
