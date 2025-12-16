const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const REPORT_FOLDER_IDS = {
  'Final Reports': import.meta.env.VITE_GOOGLE_DRIVE_FINAL_REPORTS,
  'Drafts Under Review/Finalisation': import.meta.env.VITE_GOOGLE_DRIVE_DRAFTS,
  'Preliminary Drafts': import.meta.env.VITE_GOOGLE_DRIVE_PRELIMINARY
};

const HOME_FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_HOME;

export async function fetchFilesFromFolder(folderId) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType,size,createdTime,modifiedTime,webViewLink,webContentLink,thumbnailLink)`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Google Drive API Error:', data.error);
      return [];
    }

    return data.files || [];
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
}

export async function fetchAllHomeImages() {
  if (!HOME_FOLDER_ID) return [];

  const files = await fetchFilesFromFolder(HOME_FOLDER_ID);

  return files.map(file => ({
    id: file.id,
    name: file.name,
    url: file.webContentLink,
    viewUrl: file.webViewLink,
    thumbnail: file.thumbnailLink,
    mimeType: file.mimeType
  }));
}

export async function fetchAllReports() {
  const allReports = [];

  for (const [status, folderId] of Object.entries(REPORT_FOLDER_IDS)) {
    const files = await fetchFilesFromFolder(folderId);
    console.log('Files from', status, ':', files);

    const formattedFiles = files.map(file => ({
      title: file.name,
      status: status,
      date: new Date(file.modifiedTime).toLocaleDateString(),
      size: formatFileSize(file.size),
      url: file.webContentLink,
      viewUrl: file.webViewLink,
      id: file.id,
      mimeType: file.mimeType,
      thumbnailLink: file.thumbnailLink
    }));

    allReports.push(...formattedFiles);
  }

  return allReports;
}

function formatFileSize(bytes) {
  if (!bytes) return 'N/A';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}