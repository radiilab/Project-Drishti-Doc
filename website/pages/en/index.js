/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Drishti Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://firebasestorage.googleapis.com/v0/b/radii-productweb.appspot.com/o/drishti%2FDrishti_Lab-01.149.23-Linux.tar.gz?alt=media&token=a7cdeb05-505a-4930-afe9-16b6659719a7">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Quick Start Guide</Button>
            <Button href={docUrl('doc2.html')}>Know More</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>The Radii Image Library (RIL) is a C++ library that
           abstracts image representations from algorithms and 
           allows writing code that can work on a variety of images with performance 
           similar to hand-writing for a specific image type.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make way for  **Open Research**, we at [**Radii School of Thoughts**](https://edu.radii.in) have collaborative sessions and ' +
              '[**internships**](https://edu.radii.in/CommingSoon.html) which helps us with maintaining RIL free for scientific research. ' +
              'Any alterations to the library must forgo Product Licensing.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Using Radii Imaging Library (RIL) Commercially',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Vision has an important sensory part of '+
              'decision making and businesses do need to be alert. ',
            image: `${baseUrl}img/undraw_surveillance.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'With RIL abstrations, **image-frame processing** is fairly intuitive and easy.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'RIL makes it Easy!',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            title: 'Minimal Back Dependecies',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            content: 'Small Memory Footprint in applications',
          },
          {
            title: 'Simple and Reproducible',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            content: 'RIL is easy to interface with other librarues',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={baseUrl+user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
