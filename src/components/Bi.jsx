/**
 * Bilingual inline text. Renders both the Nepali and English strings; the
 * active one is toggled purely via CSS (`data-lang` on <html>), matching the
 * original site's approach so switching language is instant with no re-render.
 */
export default function Bi({ ne, en, as: Tag = "span", className = "" }) {
  return (
    <Tag className={className}>
      <span className="lang-ne">{ne}</span>
      <span className="lang-en">{en}</span>
    </Tag>
  );
}
