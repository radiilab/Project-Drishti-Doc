/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project [on our open slack channel here.](https://join.slack.com/t/radiilab/shared_invite/zt-5l6ebtud-OVSCgtd_STb4rcCFhO3mIw)',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project [on our Youtube channel.](https://www.youtube.com/channel/UC0s0Vj17c05gPdSk_c406mg)",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h2>Need help with Image Processing?</h2>
          </header>
          <p>Look for the <a href='https://www.youtube.com/playlist?list=PLd3hlSJsX_ImKP68wfKZJVIPTd8Ie5u-9'>UCF CRCV course</a> to find some insights.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
