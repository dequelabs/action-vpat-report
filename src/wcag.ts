interface SuccessCriterion {
  id: string;
  name: string;
  level: "A" | "AA"; // For now, AAA is not supported.
  url: string;
}

export const LEVEL_A: SuccessCriterion[] = [
  {
    id: "1.1.1",
    name: "Non-text Content",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#text-equiv-all",
  },
  {
    id: "1.2.1",
    name: "Audio-only and Video-only (Prerecorded)",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt",
  },
  {
    id: "1.2.2",
    name: "Captions (Prerecorded)",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#media-equiv-captions",
  },
  {
    id: "1.2.3",
    name: "Audio Description or Media Alternative (Prerecorded)",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc",
  },
  {
    id: "1.3.1",
    name: "Info and Relationships",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic",
  },
  {
    id: "1.3.2",
    name: "Meaningful Sequence",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence",
  },
  {
    id: "1.3.3",
    name: "Sensory Characteristics",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding",
  },
  {
    id: "1.4.1",
    name: "Use of Color",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color",
  },
  {
    id: "1.4.2",
    name: "Audio Control",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio",
  },
  {
    id: "2.1.1",
    name: "Keyboard",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable",
  },
  {
    id: "2.1.2",
    name: "No Keyboard Trap",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping",
  },
  {
    id: "2.1.4",
    name: "Character Key Shortcuts",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable",
  },
  {
    id: "2.2.1",
    name: "Timing Adjustable",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors",
  },
  {
    id: "2.2.2",
    name: "Pause, Stop, Hide",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#time-limits-pause",
  },
  {
    id: "2.3.1",
    name: "Three Flashes or Below Threshold",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#seizure-does-not-violate",
  },
  {
    id: "2.4.1",
    name: "Bypass Blocks",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip",
  },
  {
    id: "2.4.2",
    name: "Page Titled",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title",
  },
  {
    id: "2.4.3",
    name: "Focus Order",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order",
  },
  {
    id: "2.4.4",
    name: "Link Purpose (In Context)",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs",
  },
  {
    id: "2.5.1",
    name: "Pointer Gestures",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc",
  },
  {
    id: "2.5.2",
    name: "Pointer Cancellation",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc",
  },
  {
    id: "2.5.3",
    name: "Label in Name",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive",
  },
  {
    id: "2.5.4",
    name: "Motion Actuation",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-motion-actuation",
  },
  {
    id: "3.1.1",
    name: "Language of Page",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id",
  },
  {
    id: "3.2.1",
    name: "On Focus",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus",
  },
  {
    id: "3.2.2",
    name: "On Input",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change",
  },
  {
    id: "3.3.1",
    name: "Error Identification",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#minimize-error-identified",
  },
  {
    id: "3.3.2",
    name: "Labels or Instructions",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#minimize-error-cues",
  },
  {
    id: "4.1.1",
    name: "Parsing",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#ensure-compat-parses",
  },
  {
    id: "4.1.2",
    name: "Name, Role, Value",
    level: "A",
    url: "http://www.w3.org/TR/WCAG20/#ensure-compat-rsv",
  },
];

export const LEVEL_AA: SuccessCriterion[] = [
  {
    id: "1.2.4",
    name: "Captions (Prerecorded)",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#media-equiv-captions",
  },
  {
    id: "1.2.5",
    name: "Audio Description or Media Alternative (Prerecorded)",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc",
  },
  {
    id: "1.3.4",
    name: "Orientation",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-orientation",
  },
  {
    id: "1.3.5",
    name: "Identify Input Purpose",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#input-purposes",
  },
  {
    id: "1.4.3",
    name: "Contrast (Minimum)",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",
  },
  {
    id: "1.4.4",
    name: "Resize text",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale",
  },
  {
    id: "1.4.5",
    name: "Images of Text",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation",
  },
  {
    id: "1.4.10",
    name: "Reflow",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale",
  },
  {
    id: "1.4.11",
    name: "Non-text Contrast",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",
  },
  {
    id: "1.4.12",
    name: "Text Spacing",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-spacing",
  },
  {
    id: "1.4.13",
    name: "Content on Hover or Focus",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio",
  },
  {
    id: "2.4.5",
    name: "Multiple Ways",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc",
  },
  {
    id: "2.4.6",
    name: "Headings and Labels",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive",
  },
  {
    id: "2.4.7",
    name: "Focus Visible",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible",
  },
  {
    id: "3.1.2",
    name: "Language of Parts",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id",
  },
  {
    id: "3.2.3",
    name: "Consistent Navigation",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations",
  },
  {
    id: "3.2.4",
    name: "Consistent Identification",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality",
  },
  {
    id: "3.3.3",
    name: "Error Suggestion",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#minimize-error-suggestions",
  },
  {
    id: "3.3.4",
    name: "Error Prevention (Legal, Financial, Data)",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#minimize-error-reversible",
  },
  {
    id: "4.1.3",
    name: "Status Messages",
    level: "AA",
    url: "http://www.w3.org/TR/WCAG20/#ensure-compat-rsv",
  },
];
