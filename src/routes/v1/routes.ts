import { Router } from "express";
import healthRoutes from "./health.routes";
import mailRoutes from "./mail.routes";

class Routes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.use("/health", healthRoutes);
    this.router.use("/mail", mailRoutes);
  }
}

const routes = new Routes();
export default routes.router;
