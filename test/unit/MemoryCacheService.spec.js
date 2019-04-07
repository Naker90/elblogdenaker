import MemoryCacheService from "../../src/App/Services/MemoryCacheService";

describe("not found controller tests", () => {

    let cacheService;

    beforeEach(() => {
        cacheService = MemoryCacheService();
    });

    it("gets cached element", () => {
        let data = {
            cache: true
        };

        cacheService.add({key: "element", data: data});

        expect(cacheService.get({key: "element"})).toBe(data);
    });
});