// Free SplitText replacement — drop this in src/utils/SplitTextFree.ts
// Mimics the gsap-trial/SplitText API so no other files need to change much

export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private originalHTML: Map<HTMLElement, string> = new Map();
  private elements: HTMLElement[] = [];

  constructor(
    target: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
    options: { type?: string; linesClass?: string } = {}
  ) {
    const type = options.type || "chars,words,lines";

    // Resolve targets
    if (typeof target === "string") {
      this.elements = Array.from(
        document.querySelectorAll<HTMLElement>(target)
      );
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else if (NodeList && target instanceof NodeList) {
      this.elements = Array.from(target as NodeListOf<HTMLElement>);
    } else if (Array.isArray(target)) {
      this.elements = target as HTMLElement[];
    }

    this.elements.forEach((el) => {
      this.originalHTML.set(el, el.innerHTML);
      this._split(el, type, options.linesClass);
    });
  }

  private _split(el: HTMLElement, type: string, linesClass?: string) {
    const text = el.innerText || el.textContent || "";
    el.innerHTML = "";
    el.style.overflow = "hidden";

    if (type.includes("chars") || type.includes("words")) {
      const wordsArr = text.split(" ");
      wordsArr.forEach((word, wi) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.cssText =
          "display:inline-block; overflow:hidden; vertical-align:bottom;";

        if (type.includes("chars")) {
          word.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.style.cssText = "display:inline-block;";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }

        this.words.push(wordSpan);
        el.appendChild(wordSpan);

        if (wi < wordsArr.length - 1) {
          const space = document.createElement("span");
          space.innerHTML = "&nbsp;";
          space.style.display = "inline-block";
          el.appendChild(space);
        }
      });
    } else if (type.includes("lines")) {
      const lineClass = linesClass || "split-line";
      const lineSpan = document.createElement("span");
      lineSpan.className = lineClass;
      lineSpan.style.cssText = "display:block; overflow:hidden;";
      lineSpan.textContent = text;
      this.lines.push(lineSpan);
      el.appendChild(lineSpan);
    }
  }

  revert() {
    this.elements.forEach((el) => {
      const original = this.originalHTML.get(el);
      if (original !== undefined) {
        el.innerHTML = original;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
