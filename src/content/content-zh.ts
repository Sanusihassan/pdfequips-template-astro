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
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
  Merge_PDF: {
    title: "合并PDF",
    seoTitle: "合并PDF - 将多个文件合并成一个文档",
    description: "将多个PDF文件合并成一个文档",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "完全免费，无需注册",
        description:
          "PDFEquips提供免费在线PDF合并服务，无需创建帐户，我们从不要求您的电子邮件地址或信用卡信息",
      },
      {
        title: "强大的PDF合并工具",
        description:
          "PDFEquips轻松将两个或更多PDF文档合并为一个文件，无论是单页还是多页，大或小的PDF文件，所有格式都兼容",
      },
      {
        title: "在线安全合并PDF文件",
        description:
          "您在我们的服务器上上传和创建的所有文件都经过TLS加密，以确保安全性。它们将在处理后立即永久删除。有关更多信息，请参阅我们的隐私政策",
      },
    ],
    keywords:
      "合并PDF, PDF合并工具, 合并PDF文件, 合并PDF文档, 在线合并PDF, 无需注册合并PDF, 免费合并PDF, 合并多个PDF文件, 快速合并PDF, 安全合并PDF, 轻松合并PDF文档, 免费在线合并PDF, 无需安装合并PDF, 合并加密PDF文件, 免费PDF合并工具, 无需注册在线合并PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "合并PDF选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    merge_pdf: "合并PDF",
  },
  pages: "页",
  page: "页",
  options: {
    label: "输出文件名（可选）",
    placeholder: "输入文件名",
    helperText: "这将是下载时合并的 PDF 的名称。",
    cta: "查看方案",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": ["PDF 文件已合并！", "PDF 文件已合并！"],
  },

  btnText: {
    "merge-pdf": ["下载合并的 PDF 文件", "下载合并的 PDF 文件"],
  },

  backto: {
    "merge-pdf": "返回合并 PDF",
  },
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
  alerts: {
    maxFiles: "最多 50 个文件。订阅以获取更多！",
    totalPages: "最多 1,500 页。立即升级！",
    perFilePages: "每个文件 500 页。立即解锁更多！",
    fileSize: "每个文件 50MB。升级以获取更多！",
  },
  PASSWORD_REQUIRED: {
    message: "该 PDF 需要密码。",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "您输入的密码不正确。",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message: "您已达到每日使用上限。请升级您的套餐以继续不间断地使用此功能。",
    code: "MAX_DAILY_USAGE",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "检测到广告拦截器",
  description: "我们检测到您正在使用广告拦截器。请考虑禁用它以支持我们！",
  reloadPage: "重新加载页面"
}
