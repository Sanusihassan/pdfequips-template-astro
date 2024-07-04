export const tool = {
  Merge_Pages: {
    title: "Merge PDF Pages",
    seoTitle: "Merge PDF Pages Online - Combine Multiple Pages Into One",
    description: "Combine multiple PDF pages into a single page efficiently",
    color: "var(--blue)", // You can choose an appropriate color
    type: ".pdf",
    to: "/merge-pages",
    features: [
      {
        title: "Free and anonymous page merging",
        description: "PDFEquips provides a free online PDF page merging service. No account creation or personal information required."
      },
      {
        title: "Powerful PDF page consolidation",
        description: "Easily merge two or more PDF pages into a single page. Compatible with all PDF formats, regardless of content or size."
      },
      {
        title: "Secure online PDF page merging",
        description: "All uploaded and processed files are encrypted using TLS and promptly deleted after processing. Refer to our privacy policy for more details on our security measures."
      }
    ],
    keywords: "merge PDF pages, combine PDF pages, PDF page merger, multiple pages to one PDF, consolidate PDF pages, PDF page combiner, online PDF page merge, free PDF page merger, merge PDF pages online, combine multiple PDF pages, PDF page consolidation tool, secure PDF page merge, no registration PDF page merge, PDF page layout tool, free online PDF page combiner, merge PDF sheets, combine PDF spreads, PDF imposition tool"
  },
};

export const edit_page = {
  edit_page_titles: {
    merge_pdf: "Merge PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  // translate the values of this object to french.
  action_buttons: {
    merge_pdf: "Merge PDF",
  },
  pages: "pages",
  page: "page",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
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
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
