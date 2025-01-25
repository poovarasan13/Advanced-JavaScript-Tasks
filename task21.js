
function getProcessedData(url) {
    return downloadData(url)
      .catch((e) => downloadFallbackData(url))
      .then((v) => processDataInWorker(v));
  }
  

  async function getProcessedData(url) {
    let v;
    try {
      v = await downloadData(url);
    } catch (e) {
      v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
  }
  