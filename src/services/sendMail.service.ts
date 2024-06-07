import { matchKey } from "@Constants/regex";
import { sendMail } from "@Helpers/mail";
import { mail } from "config";
import { join } from "path";
import { readFile } from "fs/promises";

function changeKey(html: string, data: Data): string {
  Object.keys(data).forEach((key) => {
    html = html.replace(matchKey(key), data[key]);
  });

  return html;
}

function resolvePath(filename: string): string {
  return join(__dirname, `../../assets/${filename}`);
}

export async function sendMailService(
  email: string,
  data: Data
): Promise<string> {
  if (mail.address === "" && mail.password === "") {
    return await sendMail(
      email,
      data.plate,
      `${data.parkingName} ${data.message}`
    );
  }

  const path = resolvePath("mail.html");
  const htmlContent = await readFile(path, "utf8");

  const htmlResult = changeKey(htmlContent, data);

  return await sendMail(email, data.plate, htmlResult);
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface Data {
  [key: string]: string;
}
