export const contact = {
  phoneDisplay: "+91 70186 29215",
  phoneHref: "tel:+917018629215",
  talkHref: "https://wa.me/917018629215",
  email: "mohitwalii67@gmail.com",
  emailHref: "mailto:mohitwalii67@gmail.com",
};

export function openWhatsApp(message: string) {
  window.open(
    `${contact.talkHref}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}
