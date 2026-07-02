"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function SellCollectionForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const comments = String(formData.get("comments") ?? "").trim();

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      collectionType: String(formData.get("collectionType") ?? ""),
      estimatedValue: String(formData.get("estimatedValue") ?? ""),
      message: comments || "I would like Let's Go Cards to review my Pokemon card collection."
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "The collection request could not be sent.");
      }

      setSubmitState("success");
      setStatusMessage("Thanks! Your collection request has been sent to Let's Go Cards.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send the request right now. Please email us directly."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field-group">
        <label htmlFor="type">Collection type</label>
        <select id="type" name="collectionType" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Binder collection</option>
          <option>Graded cards</option>
          <option>Sealed product</option>
          <option>Vintage cards</option>
          <option>Mixed collection</option>
        </select>
      </div>
      <div className="field-group">
        <label htmlFor="value">Estimated value</label>
        <input id="value" name="estimatedValue" type="text" placeholder="$500, $2,000, unsure" />
      </div>
      <div className="field-group full">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          rows={6}
          placeholder="Tell us what you have, how long you've owned it, and whether you prefer cash, trade, or store credit."
        />
        <small>
          After submitting, email any collection photos directly to ShopLetsGoCards@gmail.com.
        </small>
      </div>
      <button className="button primary sell-cta" type="submit" disabled={submitState === "sending"}>
        {submitState === "sending" ? "Submitting..." : "Submit Collection"}
      </button>
      {statusMessage ? (
        <p className={`form-status ${submitState === "success" ? "success" : "error"}`} role="status">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
