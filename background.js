chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "start_sending" && message.data) {
    let tab = await chrome.tabs.create({ url: "https://wa.me", active: true });

    for (const { no, msg } of message.data) {
      const phone = no.replace(/[^0-9]/g, '');
      const encodedMsg = encodeURIComponent(msg);
      const url = `https://wa.me/${phone}?text=${encodedMsg}`;
      await chrome.tabs.update(tab.id, { url });

      // Wait 20 seconds before the next message
      await new Promise(resolve => setTimeout(resolve, 20000));
    }
  }
});