import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="template-footer">
        <div className="template-footer-content">
          <span>
            {' '}
            Built using:{' '}
            <a href="https://pokemontcg.io" target="_blank" rel="noopener noreferrer">
              Pokemon TCG API
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
