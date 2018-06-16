describe("router", () => {

    let router, navigator, routeSolver;

    beforeEach(() => {
        navigator = NakerNoventa.NavigatorContract();
        routeSolver = NakerNoventa.RoutesResolverContract();
        router = NakerNoventa.Router(navigator, routeSolver);
    });

    it("returns route solver", () => {
        const route = {
            route: "test",
            solve: function(){},
        };
        spyOn(navigator, "getLocationHash").and.returnValue("test");
        spyOn(routeSolver, "getRouteSolver").and.returnValue(route);

        let routeResolver = router.resolveRoute();

        expect(routeResolver.route).toBe("test");
    });

});