import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
  Merge_PDF: {
    title: "دمج PDF",
    seoTitle: "دمج ملفات PDF عبر الإنترنت - أداة دمج مجانية",
    description: "دمج ملفات PDF متعددة في مستند واحد",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "مجاني تمامًا وبدون تسجيل",
        description:
          "PDFEquips يقدم خدمة دمج ملفات PDF عبر الإنترنت مجانًا. ليس من الضروري إنشاء حساب، ونحن لا نطلب أبدًا عنوان بريدك الإلكتروني أو معلومات بطاقة الائتمان الخاصة بك",
      },
      {
        title: "أداة قوية لدمج ملفات PDF",
        description:
          "PDFEquips يجمع بسهولة بين مستندات PDF اثنين أو أكثر في ملف واحد، سواء كانت صفحة واحدة أو صفحات متعددة، ملفات PDF كبيرة أو صغيرة، جميع الصيغ متوافقة",
      },
      {
        title: "دمج ملفات PDF عبر الإنترنت بشكل آمن",
        description:
          "جميع الملفات التي تقوم بتحميلها وإنشائها على خوادمنا مشفرة لأسباب أمنية باستخدام TLS. سيتم حذفها فورًا وبشكل دائم بعد الاكتمال. لمزيد من المعلومات، يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا",
      },
    ],
    keywords:
      "دمج PDF, أدوات دمج PDF, دمج ملفات PDF, دمج مستندات PDF, دمج PDF عبر الإنترنت, دمج PDF بدون تسجيل, دمج PDF مجانًا, دمج ملفات PDF متعددة, دمج PDF بسرعة, دمج PDF بأمان, دمج مستندات PDF بسهولة, دمج PDF عبر الإنترنت مجانًا, دمج PDF بدون تثبيت, دمج ملفات PDF مشفرة, أدوات دمج PDF مجانًا, دمج PDF عبر الإنترنت بدون تسجيل",
  },
};
export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "خيارات دمج ملف PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    merge_pdf: "دمج PDF",
  },
  pages: "صفحات",
  page: "صفحة واحدة",
  options: {
    label: "اسم الملف الناتج (اختياري)",
    placeholder: "أدخل اسم الملف",
    helperText: "سيكون هذا اسم ملف PDF المدمج عند تنزيله.",
    cta: "عرض الخطط",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": ["تم دمج ملفات PDF!", "تم دمج ملف PDF!"],
  },

  btnText: {
    "merge-pdf": ["تحميل ملفات PDF المدمجة", "تحميل ملف PDF المدمج"],
  },

  backto: {
    "merge-pdf": "العودة إلى دمج PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
  alerts: {
    maxFiles: "الحد الأقصى 50 ملفًا. اشترك للمزيد!",
    totalPages: "الحد الأقصى 1,500 صفحة. قم بالترقية الآن!",
    perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
    fileSize: "50 ميجابايت لكل ملف. قم بالترقية للمزيد!",
  },
  PASSWORD_REQUIRED: {
    message: "ملف PDF يتطلب كلمة مرور.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "كلمة المرور التي أدخلتها غير صحيحة.",
    code: "INCORRECT_PASSWORD",
  },

  MAX_DAILY_USAGE: {
    message:
      "لقد وصلت إلى الحد الأقصى للاستخدام اليومي. يُرجى ترقية خطتك لمواصلة استخدام هذه الميزة دون انقطاع.",
    code: "MAX_DAILY_USAGE",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "تم الكشف عن مانع الإعلانات",
  description: "لاحظنا أنك تستخدم مانع إعلانات. نرجو تعطيله لدعمنا!",
  reloadPage: "إعادة تحميل الصفحة"
}
