export const tool = {
  Merge_PDF: {
    title: "Merge PDF",
    seoTitle: "Merge PDFs Online - Free PDF Combiner",
    description: "Combine multiple PDF files into one document",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "Completely free and without registration",
        description:
          "PDFEquips offers a free online PDF merging service It's not necessary to create an account, and we never ask for your email address or credit card information",
      },
      {
        title: "Robust tool for merging PDFs",
        description:
          "PDFEquips easily combines two or more PDF documents into one file, whether it's a single page or multiple pages, large or small PDF files, all formats are compatible",
      },
      {
        title: "Securely merge PDF files online",
        description:
          "All files you upload and create on our servers are encrypted for security reasons using TLS They will be immediately and permanently deleted after processing For more information, please refer to our privacy policy",
      },
    ],
    keywords:
      "merge PDF, merge PDF online, combine PDF files, free PDF merge, PDF merger, PDF combine tool, online PDF merge, PDF merge free, merge PDF documents, combine PDFs online, secure PDF merge, PDF file merger, PDF merge tool, free online PDF combiner, merge multiple PDFs, combine PDF pages, no registration PDF merge, PDF merger tool, online PDF combiner",
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const edit_page = {
  edit_page_titles: {
    merge_pdf: "Merge PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more pages",
  action_buttons: {
    merge_pdf: "Merge PDF",
  },
  pages: "pages",
  page: "page",
  options: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the merged PDF when downloaded.",
    cta: "View Plans",
  },
};

export const downloadFile = {
  titles: {
    "merge-pdf": ["PDF files have been merged!", "PDF file has been merged!"],
  },

  btnText: {
    "merge-pdf": ["Download Merged PDF files", "Download Merged PDF file"],
  },

  backto: {
    "merge-pdf": "Back To Merge PDF",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "PDF requires a password.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "The password you entered is incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "You’ve reached your daily usage limit. Please upgrade your plan to continue using this feature without interruption.",
    code: "MAX_DAILY_USAGE",
  },

  alerts: {
    maxFiles: "Max 50 files. Subscribe for more!",
    totalPages: "Max 1,500 pages. Upgrade now!",
    perFilePages: "500 pages per file. Unlock more now!",
    fileSize: "50MB per file. Upgrade for more!",
  },
};

export const adBlockerContent = {
  title: "Ad Blocker Detected",
  description: "We noticed you're using an ad blocker. Please consider disabling it or upgrade to premium for an ad-free experience!",
  reloadPage: "Reload Page",
  upgradeToPremium: "Upgrade to Premium"
}

export type adBlockerContentType = typeof adBlockerContent;