const Navigator = require("../../src/utils/navigator");
const Router = require("../../src/router/router");

describe("router", () => {

    let router, navigator;

    beforeEach(() => {
        const routes = [
            {
                route: "test",
                resolve: function(){},
            },
            {
                route: "default",
                resolve: function(){},
                routeByDefault: true
            }
        ];
        navigator = Navigator();
        router = Router(navigator, routes);
    });

    it("returns route solver when routes match", () => {
        spyOn(navigator, "getLocationHash")
            .and
            .returnValue("test");

        let resolver = router.resolveRoute();

        expect(resolver.route).toBe("test");
    });

    it("returns default route solver when routes not match", () => {
        spyOn(navigator, "getLocationHash")
            .and
            .returnValue("notMatchRoute");

        let resolver = router.resolveRoute();

        expect(resolver.route).toBe("default");
        expect(resolver.routeByDefault).toBe(true);
    });

});