import React, { useState } from 'react';
import styles from './styles.module.css';

const SupportAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.supportAgent}>
      <button
        className={styles.chatButton}
        onClick={toggleChat}
        aria-label="Support Agent"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.88.52 3.65 1.43 5.16l-1.35 3.83 3.99-1.32C8.36 20.48 10.13 21 12 21c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18c-1.49 0-2.89-.36-4.12-1.01l-2.92.97.97-2.68C5.43 15.72 5 14.38 5 13 5 9.13 8.13 6 12 6s7 3.13 7 7-3.13 7-7 7z"/>
          <circle cx="8.5" cy="12.5" r="1"/>
          <circle cx="12" cy="12.5" r="1"/>
          <circle cx="15.5" cy="12.5" r="1"/>
        </svg>
        {isOpen && <span className={styles.chatButtonText}>Support</span>}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <h3>AI Support Agent</h3>
              <p>Powered by HuggingFace</p>
            </div>
            <button
              className={styles.closeButton}
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className={styles.iframeContainer}>
            <iframe
              src="https://daniyalxdev-rag-bot.hf.space"
              width="100%"
              height="100%"
              className={styles.huggingFaceIframe} />
          </div>

          <div className={styles.chatFooter}>
            <a
              href="https://daniyalxdev-rag-bot.hf.space"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              View on HuggingFace Spaces
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportAgent;