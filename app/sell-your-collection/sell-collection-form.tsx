"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

const formSubmitUrl = "https://formsubmit.co/ajax/ShopLetsGoCards@gmail.com";
const successMessage = "Thank you! We received your request and will get back to you within one business day.";
const minimumSubmitTimeMs = 1200;
const rateLimitMs = 20000;
const rateLimitKey = "lets-go-cards-sell-form-submitted-at";

export function SellCollectionForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formStartedAt = useRef(0);

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("website") ?? "");
    const submittedTooFast = Date.now() - formStartedAt.current < minimumSubmitTimeMs;

    if (honeypot || submittedTooFast) {
      setSubmitState("success");
      setStatusMessage(successMessage);
      form.reset();
      formStartedAt.current = Date.now();
      return;
    }

    const lastSubmittedAt = Number(window.localStorage.getItem(rateLimitKey) ?? 0);

    if (lastSubmittedAt && Date.now() - lastSubmittedAt < rateLimitMs) {
      setSubmitState("error");
      setStatusMessage("Please wait a moment before sending another request.");
      return;
    }

    window.localStorage.setItem(rateLimitKey, String(Date.now()));

    const name = String(formData.get("name") ?? "");
    const comments = String(formData.get("comments") ?? "").trim();
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const collectionType = String(formData.get("collectionType") ?? "");
    const estimatedValue = String(formData.get("estimatedValue") ?? "");
    const message = [
      phone && `Phone: ${phone}`,
      collectionType && `Collection type: ${collectionType}`,
      estimatedValue && `Estimated value: ${estimatedValue}`,
      comments || "I would like Let's Go Cards to review my Pokemon card collection."
    ]
      .filter(Boolean)
      .join("\n");
    const submitData = new FormData();

    submitData.append("Name", name);
    submitData.append("Email", email);
    submitData.append("Phone", phone);
    submitData.append("Collection Type", collectionType);
    submitData.append("Estimated Value", estimatedValue || "Not provided");
    submitData.append("Message", message);
    submitData.append("_replyto", email);
    submitData.append("_subject", "New collection request from ShopLetsGoCards.com");
    submitData.append("_template", "table");
    submitData.append("_captcha", "false");

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: submitData
      });
      const data = (await response.json()) as { message?: string; success?: boolean | string };

      if (!response.ok || !(data.success === true || data.success === "true")) {
        throw new Error(data.message || "The collection request could not be sent.");
      }

      setSubmitState("success");
      setStatusMessage(successMessage);
      form.reset();
      formStartedAt.current = Date.now();
    } catch (error) {
      window.localStorage.removeItem(rateLimitKey);
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
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="sell-website">Website</label>
        <input id="sell-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
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
"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

const formSubmitUrl = "https://formsubmit.co/ajax/ShopLetsGoCards@gmail.com";

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
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const collectionType = String(formData.get("collectionType") ?? "");
    const estimatedValue = String(formData.get("estimatedValue") ?? "");
    const message = [
      phone && `Phone: ${phone}`,
      collectionType && `Collection type: ${collectionType}`,
      estimatedValue && `Estimated value: ${estimatedValue}`,
      comments || "I would like Let's Go Cards to review my Pokemon card collection."
    ]
      .filter(Boolean)
      .join("\n");

    formData.set("message", message);
    formData.append("_replyto", email);
    formData.append("_subject", "New collection request from ShopLetsGoCards.com");
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
