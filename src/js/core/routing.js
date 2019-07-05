export class Routing {
    navigate(route, data = null) {
        location.addData = data;
        location.hash = route;
    };
}