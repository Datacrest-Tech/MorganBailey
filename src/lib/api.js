// Contact, Quote and Careers all hit relative /api/... paths, which are
// served by the Vercel Serverless Functions in /api — same domain as the
// frontend, so no base URL, CORS, or "backend URL" env var is needed.
// (VITE_API_URL is kept only as an optional override, e.g. if you ever
// point the frontend at an API deployed somewhere else.)
const API_URL = import.meta.env.VITE_API_URL || "";

export async function submitForm(path, payload) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
}

// For submissions that include a file (e.g. the Careers CV upload).
// Don't set a Content-Type header here — the browser sets the correct
// multipart/form-data boundary automatically.
export async function submitFormData(path, formData) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    body: formData,
  });

  return handleResponse(res);
}

async function handleResponse(res) {
  let data = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response, fall through to generic error below
  }

  if (!res.ok || !data.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data;
}
