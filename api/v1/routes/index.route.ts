import { Express } from "express";
import { taskRouters } from "./task.route";

const mainV1Routes = (app: Express): void => {
    const version = "/api/v1";

    app.use(version + "/tasks", taskRouters);

};

export default mainV1Routes;