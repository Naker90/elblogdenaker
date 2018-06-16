describe("router", () => {

    let router, navigator;

    beforeEach(() => {
        const routes = [
            {
                route: "test",
                solve: function(){},
            },
            {
                route: "default",
                solve: function(){},
                routeByDefault: true
            }
        ];
        navigator = NakerNoventa.NavigatorContract();
        router = NakerNoventa.Router(navigator, routes);
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