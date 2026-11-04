export function formatDate(timestamp: any): string {
  if (!timestamp) return "—";

  let date: Date;
  if (timestamp.toDate && typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  } else if ((timestamp.seconds ?? timestamp._seconds) !== undefined) {
    // Serialized Timestamps use `seconds` from the client SDK and `_seconds` from the admin SDK.
    date = new Date((timestamp.seconds ?? timestamp._seconds) * 1000);
  } else {
    date = new Date(timestamp);
  }

  if (isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateTime(timestamp: any): string {
  if (!timestamp) return "—";

  let date: Date;
  if (timestamp.toDate && typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  } else if ((timestamp.seconds ?? timestamp._seconds) !== undefined) {
    // Serialized Timestamps use `seconds` from the client SDK and `_seconds` from the admin SDK.
    date = new Date((timestamp.seconds ?? timestamp._seconds) * 1000);
  } else {
    date = new Date(timestamp);
  }

  if (isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
