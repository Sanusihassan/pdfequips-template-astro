import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";

export const tool: _tool = {
  Merge_PDF: {
    title: "पीडीएफ विलय",
    seoTitle: "पीडीएफ विलय - कई फाइलों को एक में जोड़ें",
    description: "एक दस्तावेज में कई पीडीएफ फ़ाइलों को जोड़ें",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "पूरी तरह से मुफ्त और पंजीकरण के बिना",
        description:
          "PDFEquips एक मुफ्त ऑनलाइन PDF मर्जिंग सेवा प्रदान करता है खाता बनाना आवश्यक नहीं है, और हम कभी आपसे आपके ईमेल पते या क्रेडिट कार्ड जानकारी के लिए नहीं पूछते",
      },
      {
        title: "PDF फ़ाइलों को मर्ज करने के लिए मजबूत टूल",
        description:
          "PDFEquips आसानी से एक फ़ाइल में दो या दो से अधिक PDF दस्तावेज़ों को मिला सकता है, चाहे वह एक ही पृष्ठ हो या कई पृष्ठ, बड़ी या छोटी PDF फ़ाइलें हों, सभी प्रारूप संगत हैं",
      },
      {
        title: "ऑनलाइन पीडीएफ फ़ाइलों को सुरक्षित रूप से मर्ज करें",
        description:
          "हमारे सर्वर पर आपके अपलोड और बनाए गए सभी फ़ाइलें सुरक्षा कारणों के लिए TLS का उपयोग करके एन्क्रिप्ट की जाती हैं वे प्रसंस्करण के बाद तुरंत और स्थायी रूप से हटा दी जाएंगी अधिक जानकारी के लिए, कृपया हमारी गोपनीयता नीति को देखें",
      },
    ],
    keywords:
      "PDF मर्ज करें, PDF मर्ज उपकरण, PDF फाइलें मर्ज करें, PDF दस्तावेज़ मर्ज करें, ऑनलाइन PDF मर्ज करें, बिना रजिस्ट्रेशन के PDF मर्ज करें, मुफ्त में PDF मर्ज करें, कई PDF फाइलें मर्ज करें, जल्दी से PDF मर्ज करें, सुरक्षित रूप से PDF मर्ज करें, आसानी से PDF दस्तावेज़ मर्ज करें, मुफ्त में ऑनलाइन PDF मर्ज करें, बिना इंस्टॉलेशन के PDF मर्ज करें, एन्क्रिप्टेड PDF फाइलें मर्ज करें, मुफ्त PDF मर्ज उपकरण, बिना रजिस्ट्रेशन के ऑनलाइन PDF मर्ज करें",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "PDF फ्यूज़न विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    merge_pdf: "पीडीएफ विलय करें",
  },
  pages: "पृष्ठों",
  page: "पृष्ठ",
  options: {
    label: "आउटपुट फ़ाइल नाम (वैकल्पिक)",
    placeholder: "फ़ाइल का नाम दर्ज करें",
    helperText: "डाउनलोड करते समय यह मर्ज किए गए PDF का नाम होगा।",
    cta: "प्लान देखें",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "PDF फ़ाइलें मर्ज कर दी गई हैं!",
      "PDF फ़ाइल मर्ज कर दी गई है!",
    ],
  },

  btnText: {
    "merge-pdf": [
      "मर्ज की गई PDF फ़ाइलें डाउनलोड करें",
      "मर्ज की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },

  backto: {
    "merge-pdf": "PDF मर्ज पर वापस जाएँ",
  },
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
  alerts: {
    maxFiles: "अधिकतम 50 फ़ाइलें। अधिक के लिए सदस्यता लें!",
    totalPages: "अधिकतम 1,500 पेज। अभी अपग्रेड करें!",
    perFilePages: "प्रति फ़ाइल 500 पेज। अभी और अनलॉक करें!",
    fileSize: "प्रति फ़ाइल 50MB। अधिक के लिए अपग्रेड करें!",
  },
  PASSWORD_REQUIRED: {
    message: "PDF को पासवर्ड की आवश्यकता है।",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "आपने जो पासवर्ड दर्ज किया है वह गलत है।",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। कृपया इस सुविधा का निर्बाध उपयोग जारी रखने के लिए अपनी योजना अपग्रेड करें।",
    code: "MAX_DAILY_USAGE",
  },
};
