// Get your API key from: https://console.cloud.google.com/apis/credentials
const GOOGLE_API_KEY = 'AIzaSyAhcVnGYySYkajD0I7cxifAIdU1l-81uZk';

// Your folder IDs (Get from folder URL: https://drive.google.com/drive/folders/FOLDER_ID)
export const FOLDER_IDS = {
  'Final Reports': '1OOVbepjO9E26-vecA_hzyudpZEAi5Oxu',
  'Drafts Under Review/Finalisation': '11bFitIadfDk_eiwvJjjLvnDEzUjkp8cG',
  'Preliminary Drafts': '1BPCU1N2EyGO-0vj0Jlu91lJVZH3pwwvg'
};

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

export async function fetchAllReports() {
  const allReports = [];

  for (const [status, folderId] of Object.entries(FOLDER_IDS)) {
    const files = await fetchFilesFromFolder(folderId);

    // ADD THIS LINE TO DEBUG
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