/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CODES_HTTP } from "@Constants/global";
import { sendMailService } from "@Services/sendMail.service";
import type { SendMailDTO } from "DTO/mail.dto";
import type { Request, Response } from "express";

export class SendMailController {
  async run(req: Request, res: Response) {
    const data: SendMailDTO = req.body;

    try {
      const sentMail = await sendMailService(data.email, {
        plate: data.plate,
        message: data.message,
        parkingName: data.parkingName
      });

      res.status(CODES_HTTP.OK).json({
        message: sentMail
      });
    } catch (error) {
      return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
        message: error.message
      });
    }
  }
}
