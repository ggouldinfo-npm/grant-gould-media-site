"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageStagger, riseIn, cardLift } from "@/lib/motion";

type PlatformKey = "instagram" | "youtube" | "tiktok" | "facebook" | null;

const socialPlatforms = [
  {
    key: "instagram" as const,
    label: "Instagram",
    icon: <InstagramIcon />,
    accounts: [
      { name: "Grant Gould Media", handle: "@grantgouldmedia" },
      { name: "Granville Stories", handle: "@granvillestories" },
      { name: "Grant You a Story", handle: "@grantyouastory" },
    ],
  },
  {
    key: "youtube" as const,
    label: "YouTube",
    icon: <YouTubeIcon />,
    accounts: [
      { name: "Grant Gould Media", handle: "@grantgouldmedia" },
      { name: "Granville Stories", handle: "@granvillestories" },
      { name: "Grant You a Story", handle: "@grantyouastory" },
    ],
  },
  {
    key: "tiktok" as const,
    label: "TikTok",
    icon: <TikTokIcon />,
    accounts: [
      { name: "Grant Gould Media", handle: "@grantgouldmedia" },
      { name: "Granville Stories", handle: "@granvillestories" },
      { name: "Grant You a Story", handle: "@grantyouastory" },
    ],
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    icon: <FacebookIcon />,
    accounts: [
      { name: "Grant Gould Media", handle: "@grantgouldmedia" },
      { name: "Granville Stories", handle: "@granvillestories" },
      { name: "Grant You a Story", handle: "@grantyouastory" },
    ],
  },
];

export default function ContactPage() {
  const [openPlatform, setOpenPlatform] = useState<PlatformKey>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          company,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFeedback("Your message was sent successfully.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCompany("");
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  return (
    <motion.section
      variants={pageStagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <motion.p variants={riseIn} className="page-kicker">
        Contact
      </motion.p>

      <motion.h1 variants={riseIn} className="page-heading max-w-3xl">
        Let’s connect
      </motion.h1>

      <motion.p variants={riseIn} className="page-copy">
        Business inquiries, collaborations, and community connections.
      </motion.p>

      <div className="mt-14 space-y-8">
        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow p-8 sm:p-10"
        >
          <p className="page-kicker">Message</p>

          <h2 className="font-display mt-4 text-[1.9rem] font-medium tracking-[-0.02em] text-cream-25">
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="hidden">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream-25">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream-25">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-cream-25">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream-25">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-cream-25 px-6 py-3 text-sm font-medium text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-cream-25 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {feedback ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </motion.div>

        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow p-8 sm:p-10"
        >
          <p className="page-kicker">Socials</p>

          <h2 className="font-display mt-4 text-[1.9rem] font-medium tracking-[-0.02em] text-cream-25">
            Find the platforms
          </h2>

          <div className="mt-4 space-y-3 text-cream-25/78">
            <p>Email: contact@grantgouldmedia.com</p>
            <p>Choose a platform below to view each account.</p>
          </div>

          <div className="mt-8 space-y-3">
            {socialPlatforms.map((platform) => {
              const isOpen = openPlatform === platform.key;

              return (
                <div key={platform.key}>
                  <button
                    type="button"
                    className="icon-button"
                    onClick={() =>
                      setOpenPlatform((prev) =>
                        prev === platform.key ? null : platform.key
                      )
                    }
                  >
                    <span className="text-cream-25">{platform.icon}</span>
                    <span className="text-sm font-medium text-cream-25">
                      {platform.label}
                    </span>
                    <span className="ml-auto text-cream-25/70">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 rounded-[20px] border border-charcoal-800 bg-charcoal-900 p-4">
                          <div className="space-y-3 text-sm text-cream-25/78">
                            {platform.accounts.map((account) => (
                              <div
                                key={`${platform.key}-${account.name}`}
                                className="flex items-start justify-between gap-3 border-b border-charcoal-800 pb-3 last:border-b-0 last:pb-0"
                              >
                                <span className="font-medium text-cream-25">
                                  {account.name}
                                </span>
                                <span className="text-burgundy-700">
                                  {account.handle}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.2C21 14.6 20.7 16.2 20.4 17.1C20.1 17.9 19.5 18.5 18.7 18.8C17.8 19.1 16.2 19.4 12 19.4C7.8 19.4 6.2 19.1 5.3 18.8C4.5 18.5 3.9 17.9 3.6 17.1C3.3 16.2 3 14.6 3 12.2C3 9.8 3.3 8.2 3.6 7.3C3.9 6.5 4.5 5.9 5.3 5.6C6.2 5.3 7.8 5 12 5C16.2 5 17.8 5.3 18.7 5.6C19.5 5.9 20.1 6.5 20.4 7.3C20.7 8.2 21 9.8 21 12.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10 9.2L15.4 12L10 14.8V9.2Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 4C14.7 5.9 15.8 7.3 17.6 8V10.5C16.2 10.5 15 10.1 14 9.3V15.1C14 18.1 11.8 20 9 20C6.4 20 4.3 18 4.3 15.4C4.3 12.7 6.5 10.7 9.1 10.7C9.6 10.7 10 10.8 10.4 10.9V13.5C10 13.3 9.6 13.2 9.2 13.2C8 13.2 7 14.2 7 15.4C7 16.7 8 17.6 9.2 17.6C10.6 17.6 11.4 16.6 11.4 15.1V4H14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.2 21V13.3H15.8L16.2 10.3H13.2V8.4C13.2 7.5 13.5 6.9 14.7 6.9H16.3V4.2C16 4.2 15.1 4.1 14 4.1C11.7 4.1 10.1 5.5 10.1 8V10.3H7.5V13.3H10.1V21H13.2Z"
        fill="currentColor"
      />
    </svg>
  );
}