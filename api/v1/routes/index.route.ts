import { Express } from "express";
import { taskRouters } from "./task.route";
import { userRouters } from "./user.route";

const mainV1Routes = (app: Express): void => {
    const version = "/api/v1";

    app.use(version + "/tasks", taskRouters);

    app.use(version + "/users", userRouters);
    
};

export default mainV1Routes;