import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend("re_FVCKCbSX_863M2iMJENqKu4BN7c2tm7vM");

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 200 });

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: body.email,
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email, 
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 200 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 200 });
  }
}
