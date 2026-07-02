"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

const formSubmitUrl = "https://formsubmit.co/ajax/ShopLetsGoCards@gmail.com";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");

    formData.append("_replyto", email);
    formData.append("_subject", "New message from ShopLetsGoCards.com");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      const data = (await response.json()) as { message?: string; success?: boolean | string };

      if (!response.ok || !(data.success === true || data.success === "true")) {
        throw new Error(data.message || "The message could not be sent.");
      }

      setSubmitState("success");
      setStatusMessage("Thanks! Your message has been sent to Let's Go Cards.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send the message right now. Please email us directly."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field-group">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field-group full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={7} required />
      </div>
      <button className="button primary" type="submit" disabled={submitState === "sending"}>
        {submitState === "sending" ? "Sending..." : "Send Message"}
      </button>
      {statusMessage ? (
        <p className={`form-status ${submitState === "success" ? "success" : "error"}`} role="status">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
