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
    title: "Fusionner des PDF",
    seoTitle: "Fusionner des PDF - Combinez des fichiers en un seul",
    description: "Combinez plusieurs fichiers PDF en un seul document",
    color: "var(--red)",
    type: ".pdf",
    to: "/merge-pdf",
    features: [
      {
        title: "Complètement gratuit et sans inscription",
        description:
          "PDFEquips offre un service de fusion de PDF en ligne gratuit. Il n'est pas nécessaire de créer un compte, et nous ne demandons jamais votre adresse e-mail ou vos informations de carte de crédit.",
      },
      {
        title: "Outil robuste pour fusionner des PDF",
        description:
          "PDFEquips combine facilement deux ou plusieurs documents PDF en un seul fichier, que ce soit une seule page ou plusieurs pages, des fichiers PDF grands ou petits, tous les formats sont compatibles.",
      },
      {
        title: "Fusionnez des fichiers PDF en ligne en toute sécurité",
        description:
          "Tous les fichiers que vous téléchargez et créez sur nos serveurs sont cryptés pour des raisons de sécurité en utilisant TLS. Ils seront immédiatement et définitivement supprimés après le traitement. Pour plus d'informations, veuillez consulter notre politique de confidentialité.",
      },
    ],
    keywords:
      "fusionner PDF, outils de fusion PDF, fusionner des fichiers PDF, fusionner des documents PDF, fusionner PDF en ligne, fusionner PDF sans inscription, fusionner PDF gratuitement, fusionner plusieurs fichiers PDF, fusionner PDF rapidement, fusionner PDF en toute sécurité, fusionner des documents PDF facilement, fusionner PDF en ligne gratuitement, fusionner PDF sans installation, fusionner des fichiers PDF chiffrés, outils gratuits pour fusionner PDF, fusionner PDF en ligne sans inscription",
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Options de fusion de PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    merge_pdf: "Fusionner PDF",
  },
  pages: "pages",
  page: "page",
  options: {
    label: "Nom du fichier de sortie (facultatif)",
    placeholder: "Entrez le nom du fichier",
    helperText: "Ce sera le nom du PDF fusionné lors du téléchargement.",
    cta: "Voir les forfaits",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "Les fichiers PDF ont été fusionnés !",
      "Le fichier PDF a été fusionné !",
    ],
  },

  btnText: {
    "merge-pdf": [
      "Télécharger les fichiers PDF fusionnés",
      "Télécharger le fichier PDF fusionné",
    ],
  },

  backto: {
    "merge-pdf": "Retour à Fusionner PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
  alerts: {
    maxFiles: "Maximum 50 fichiers. Abonnez-vous pour plus!",
    totalPages: "Maximum 1 500 pages. Mettez à niveau maintenant!",
    perFilePages: "500 pages par fichier. Débloquez-en plus maintenant!",
    fileSize: "50 Mo par fichier. Passez à la version supérieure!",
  },
  PASSWORD_REQUIRED: {
    message: "Le PDF nécessite un mot de passe.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "Le mot de passe que vous avez saisi est incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Vous avez atteint votre limite d’utilisation quotidienne. Veuillez mettre à niveau votre forfait pour continuer à utiliser cette fonctionnalité sans interruption.",
    code: "MAX_DAILY_USAGE",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueur de publicités détecté",
  description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Merci d'envisager de le désactiver pour nous soutenir !",
  reloadPage: "Recharger la page"
}