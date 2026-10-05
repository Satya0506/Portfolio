"""Check local site assets and fragment targets before publishing."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class References(HTMLParser):
    """Collect declared IDs and local resource references."""

    def __init__(self):
        super().__init__()
        self.ids = set()
        self.references = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.add(attributes["id"])
        for key in ("href", "src"):
            if key in attributes:
                self.references.append(attributes[key])


def main():
    parser = References()
    parser.feed((ROOT / "index.html").read_text())
    missing = []
    for reference in parser.references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            continue
        if url.path and not (ROOT / url.path).is_file():
            missing.append(reference)
        if not url.path and url.fragment and url.fragment not in parser.ids:
            missing.append(reference)
    if missing:
        raise SystemExit(f"Missing local references: {missing}")
    print("Static site assets and section links validated.")


if __name__ == "__main__":
    main()
