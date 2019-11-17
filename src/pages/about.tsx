import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import Chart from '../content/img/chart.png';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <img src={Chart} alt="chart" />
              <p>
                My name is Abraham and I am a professional web developer. I have a passion for
                creating web applications. I love to code and have fun doing it. I have been
                coding web applications for 3 years. I also dabble in mobile applications mostly
                with react native.
              </p>
              <p>
                I have experience developing drupal and wordpress applications with having a specialization
                in drupal 8. I also have experience with symfony and laravel. My frontend skills involve
                html 5, css 3, sass, javascript and jquery. I also have experience working with databases such as firebase,
                mysql and postgresql.
              </p>
              <p>
                I am a passionate indvivdual and I believe I can bring value tp your company. Please be sure to check
                out my portfolio.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
