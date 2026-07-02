import { NextResponse } from "next/server";

const destinationEmail = "ShopLetsGoCards@gmail.com";
const formHandlerUrl = `https://formsubmit.co/ajax/${destinationEmail}`;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  collectionType?: string;
  estimatedValue?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Please complete the form before sending." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please add your name, email, and message before sending." },
      { status: 400 }
    );
  }

  const details = [
    payload.phone && `Phone: ${payload.phone.trim()}`,
    payload.collectionType && `Collection type: ${payload.collectionType.trim()}`,
    payload.estimatedValue && `Estimated value: ${payload.estimatedValue.trim()}`
  ].filter(Boolean);

  const fullMessage = details.length ? `${details.join("\n")}\n\n${message}` : message;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", fullMessage);
  formData.append("_subject", "New message from ShopLetsGoCards.com");
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  try {
    const response = await fetch(formHandlerUrl, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "We could not send the message right now. Please email ShopLetsGoCards@gmail.com directly."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Thanks! Your message has been sent to Let's Go Cards."
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not send the message right now. Please email ShopLetsGoCards@gmail.com directly."
      },
      { status: 502 }
    );
  }
}
