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
    title: "Combinar PDF",
    seoTitle: "Combinar PDF - Herramienta para unir archivos PDF",
    description: "Combina varios archivos PDF en un solo documento",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "Completamente gratis y sin registro",
        description:
          "PDFEquips ofrece un servicio gratuito en línea para combinar archivos PDF. No es necesario crear una cuenta, y nunca solicitamos su dirección de correo electrónico ni información de tarjeta de crédito.",
      },
      {
        title: "Herramienta sólida para fusionar PDFs",
        description:
          "PDFEquips combina fácilmente dos o más documentos PDF en un archivo, ya sea una sola página o varias páginas, archivos PDF grandes o pequeños, todos los formatos son compatibles.",
      },
      {
        title: "Fusionar archivos PDF en línea de forma segura",
        description:
          "Todos los archivos que cargue y cree en nuestros servidores están cifrados por razones de seguridad utilizando TLS. Se eliminarán inmediata y permanentemente después del procesamiento. Para obtener más información, consulte nuestra política de privacidad.",
      },
    ],
    keywords:
      "combinar PDF, herramientas para combinar PDF, fusionar archivos PDF, combinar documentos PDF, combinar PDF en línea, combinar PDF sin registro, combinar PDF gratis, combinar múltiples archivos PDF, combinar PDF rápidamente, combinar PDF de manera segura, combinar documentos PDF fácilmente, combinar PDF en línea gratis, combinar PDF sin instalación, combinar archivos PDF cifrados, herramientas gratuitas para combinar PDF, combinar PDF en línea sin registro",
  },
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Opciones para fusionar PDF",
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    merge_pdf: "Combinar PDF",
  },
  pages: "paginas",
  page: "página",
  options: {
    label: "Nombre del archivo de salida (opcional)",
    placeholder: "Ingrese el nombre del archivo",
    helperText: "Este será el nombre del PDF combinado al descargarlo.",
    cta: "Ver planes",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "¡Los archivos PDF se han combinado!",
      "¡El archivo PDF se ha combinado!",
    ],
  },

  btnText: {
    "merge-pdf": [
      "Descargar archivos PDF combinados",
      "Descargar archivo PDF combinado",
    ],
  },

  backto: {
    "merge-pdf": "Volver a Combinar PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
  alerts: {
    maxFiles: "Máximo 50 archivos. ¡Suscríbete para más!",
    totalPages: "Máximo 1,500 páginas. ¡Actualiza ahora!",
    perFilePages: "500 páginas por archivo. ¡Desbloquea más ahora!",
    fileSize: "50 MB por archivo. ¡Mejora para obtener más!",
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere una contraseña.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "La contraseña que ingresaste es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite de uso diario. Por favor, actualiza tu plan para seguir usando esta función sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que estás usando un bloqueador de anuncios. ¡Por favor considera desactivarlo o actualizar a premium para una experiencia sin anuncios!",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
}