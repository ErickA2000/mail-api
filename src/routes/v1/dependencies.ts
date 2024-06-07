import { HealthController } from "@Controllers/health.controller";
import { SendMailController } from "@Controllers/sendMail.controller";

export const healthController = new HealthController();
export const sendMailController = new SendMailController();
