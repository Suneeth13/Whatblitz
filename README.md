# WhatsApp CSV Sender (One Tab, Background)

## Description
WhatsApp CSV Sender is a Chrome extension that allows you to send WhatsApp messages from a CSV file using a single browser tab and a background script. This extension automates the process of sending messages to multiple contacts by reading phone numbers and messages from a CSV file and sending them sequentially via WhatsApp Web.

## Features
- Send WhatsApp messages to multiple contacts from a CSV file.
- Uses a single browser tab to send messages sequentially.
- Background script handles message sending with a delay between messages.
- Simple and minimal user interface for uploading CSV files.

## Installation
1. Download or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click on "Load unpacked" and select the folder containing this extension.
5. The extension will be added to your browser and its icon will appear in the toolbar.

## Usage
1. Click on the extension icon to open the popup.
2. Upload a CSV file containing the phone numbers and messages.
   - The CSV file should have two columns: `no` (phone number) and `msg` (message).
   - The first row can be a header and will be ignored if it contains "no".
   - Example CSV content:
     ```
     no,msg
     1234567890,Hello from CSV sender!
     0987654321,This is a test message.
     ```
3. Once uploaded, the extension will open a WhatsApp Web tab and start sending messages one by one.
4. There is a 20-second delay between sending each message to ensure proper delivery.

## Permissions
- `tabs`: To create and update browser tabs for sending messages.
- `scripting`: To execute scripts if needed.
- Host permission for `https://wa.me/*`: To access WhatsApp Web URLs for sending messages.

## Notes
- The extension uses a single tab to send all messages sequentially.
- There is a fixed 20-second delay between messages to avoid being flagged as spam or blocked by WhatsApp.
- Make sure you are logged into WhatsApp Web in the browser before using the extension.

## License
This project is provided as-is without any warranty. Use it responsibly and at your own risk.
