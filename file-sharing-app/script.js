document.getElementById('drop-area').addEventListener('drop', handleDrop, false);
document.getElementById('drop-area').addEventListener('dragover', handleDragOver, false);

function handleDrop (e) {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
}

function handleDragOver (e) {
    e.stopPropagation()
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

function handleFiles (files) {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ' ';
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
       const listItem = document.createElement('div');
       listItem.textContent = file.name;
       fileList.appendChild(fileList);
    }
    document.getElementById('file-input').files = files;
}

function uploadFiles () {
    const input = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progess');
    progressBar.style.display = 'block';
    progress.style.width = '0';

    for (let i = 0; i < input.files.length; i++) {
        const files = files[i];
        const listItem = document.createElement('div');
        listItem.textContent = filename + ' - Uploading ....';

        setTimeout (() => {
            listItem.textContent = filename + '- Uploaded';
            progress.style.width = `${((i + 1) / input.files.length) * 100 }%`;
        }, 1000 * (i + 1))
    }
}