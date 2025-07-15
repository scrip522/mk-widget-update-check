import React from 'react';
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="footer">
            <span>©2025 すくりぷ！</span>
            <span>Misskeyウィジェットアップデートチェック</span>
            <a href="https://github.com/scrip522/mk-widget-update-check" target="_blank">
                <span className="icon">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
                GitHub
            </a>
        </div>
    )
}

export default Footer;