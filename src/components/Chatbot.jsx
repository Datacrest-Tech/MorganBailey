import { useState, useRef, useEffect } from "react";
import { company, services, careers } from "../data/siteContent";

const quickPrompts = [
  "What services do you offer?",
  "How do I request a quote?",
  "Where are you located?",
  "How do I apply for a job?",
];

function answerFor(raw) {
  const q = raw.toLowerCase();

  if (/(hi|hello|hey)\b/.test(q) && q.length < 20) {
    return "Hello! I'm the Morgan Bailey assistant. Ask me about our services, contact details, or careers - or use one of the prompts below.";
  }

  if (/(service|offer|logistics|procurement|fleet|hr|human resource|storage|distribution|destination|ground support|project management)/.test(q)) {
    const match = services.find((s) =>
      q.includes(s.name.toLowerCase().split(" ")[0]),
    );
    if (match) {
      return `${match.name}: ${match.description}`;
    }
    const list = services.map((s) => s.name).join(", ");
    return `We offer nine core services: ${list}. Ask me about any one of them, or visit the Services page for full detail.`;
  }

  if (/(quote|pricing|price|cost|proposal)/.test(q)) {
    return "You can submit a request through our Request a Quote page - tell us about your project and our business development team will respond directly.";
  }

  if (/(contact|phone|call|email|address|located|location|office)/.test(q)) {
    return `You can reach us at ${company.address}. Phone: ${company.phones.join(" or ")}. Email: ${company.email}.`;
  }

  if (/(career|job|vacan|apply|hiring|cv|resume)/.test(q)) {
    return `${careers.note} Send your CV and application letter to ${careers.applyEmail}, or check the Careers page for current openings.`;
  }

  if (/(hour|open|close|time)/.test(q)) {
    return "We're open Monday to Friday, 08:00-18:00. Closed Saturdays and Sundays.";
  }

  if (/(about|who are you|company|history|iso)/.test(q)) {
    return "Morgan Bailey is an ISO 9001:2000 certified outsourcing company providing logistics support and project management services, locally and internationally, built on a one-stop-shop philosophy.";
  }

  return 'I can help with services, quotes, careers, or contact details. Try asking, for example, "What services do you offer?" or "How do I apply for a job?"';
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm the Morgan Bailey assistant. Ask about our services, request a quote, or careers.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answerFor(trimmed) }]);
    }, 350);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="focus-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-md bg-ink text-white shadow-[0_22px_42px_-22px_rgba(16,21,28,0.75)] transition-all hover:-translate-y-0.5 hover:bg-brand"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M1 1L19 19M19 1L1 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16v12H7l-3 3V4Z"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="animate-rise fixed bottom-24 right-6 z-50 flex h-[28rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-md border border-line bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-ink px-5 py-4 text-white">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white">
              <img src="/logo.png" alt="" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">
                Morgan Bailey Assistant
              </p>
              <p className="text-xs leading-tight text-white/50">
                Usually replies instantly
              </p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "bot"
                    ? "border border-line bg-white text-ink"
                    : "ml-auto bg-brand text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 bg-paper px-4 pt-2">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                className="focus-ring rounded-md border border-line bg-white px-2.5 py-1.5 text-xs text-ink/70 transition-colors hover:border-brand hover:text-brand"
              >
                {p}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-line bg-white p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="input-field flex-1 py-2"
            />
            <button
              type="submit"
              className="focus-ring rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
