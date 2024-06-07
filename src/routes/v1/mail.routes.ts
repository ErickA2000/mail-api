/* eslint-disable @typescript-eslint/no-misused-promises */
import { SendMailDTO } from "DTO/mail.dto";
import { Router } from "express";
import { validateDTO } from "middlewares/validateDTO";
import { sendMailController } from "./dependencies";

class MailRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.post(
      "/",
      [validateDTO(SendMailDTO)],
      sendMailController.run.bind(sendMailController)
    );
  }
}

const mailRouter = new MailRouter();
export default mailRouter.router;
