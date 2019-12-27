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

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
  body {
  color: #999999;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
  .btn {
    background-color: white;
    border: 1px solid #cccccc;
    color: #696969;
    padding: 0.5rem;
    text-transform: lowercase;
  }
  .btn--block {
    display: block;
    width: 100%;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .cards__item {
    display: flex;
    padding: 1rem;
  }
  @media (min-width: 40rem) {
    .cards__item {
      width: 50%;
    }
  }
  @media (min-width: 56rem) {
    .cards__item {
      width: 33.3333%;
    }
  }
  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .card:hover .card__image {
    -webkit-filter: contrast(100%);
            filter: contrast(100%);
  }
  .card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }
  .card__image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    -webkit-filter: contrast(70%);
            filter: contrast(70%);
    overflow: hidden;
    position: relative;
    transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  }
  .card__image::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  @media (min-width: 40rem) {
    .card__image::before {
      padding-top: 66.6%;
    }
  }
  .card__image--drupal {
    background-image: url(https://i.udemycdn.com/course/240x135/1554318_2ec4_2.jpg);
  }
  .card__image--drupal1 {
    background-image: url(https://www.bounteous.com/sites/default/files/styles/default/public/insights/2018-11/previews/understanding_the_limitations_of_gatsby-source_drupal.png?itok=pEgpvxu3);
  }
  .card__image--wordpress {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVjl0FkIDMdXWrvGJ49Y34M5zW6xSDRH-3Ft8b-JHuO3Dj5JhGQ&s);
  }
  .card__image--react {
    background-image: url(https://drupalchamp.org/sites/default/files/styles/blog_detail/public/2019-02/react_drupal.png?itok=JIYSqtUV);
  }
  .card__image--symfony {
    background-image: url(https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032013/symfony_black_01.png?itok=mh6RAYNa);
  }
  .card__image--react--native {
    background-image: url(https://blog.launchdarkly.com/wp-content/uploads/2019/05/react-native-workshop-1024x538.jpg);
  }
  .card__title {
    color: #696969;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .card__text {
    flex: 1 1 auto;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }

  .button, button a, .button{
  position:relative;
  /* style|variant|weight|size/line-height|family */
  font: 500 14px Arial;
  letter-spacing: 0.5px;
  color:#fff !important;
  border: 0;
  border-radius: 5px;
  cursor:pointer;
  text-decoration:none;
}

.button, .button{
  min-width: 100px;
  margin: 2px;
  padding:8px 10px;
  background-color: #0092ba;/* for non linear-gradient browsers */
  background: linear-gradient(to bottom, #24A1C3 5%, #0092BB 100%) repeat scroll 0 0 #24A1C3;
}

.button{display:inline-block;min-width:80px;text-align:center;white-space:nowrap;}

.button:hover,a.button:hover{
  background:linear-gradient(to bottom, #0092BB 5%, #24A1C3 100%) repeat scroll 0 0 #0092BB;
}
.button:active{top:1px;}

`;

const Portfolio: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Portfolio</title>
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
            <PostFullTitle>Portfolio</PostFullTitle>
          </PostFullHeader>


  <ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--drupal"></div>
      <div class="card__content">
        <div class="card__title"><strong>Drupal 8 + Materialize CSS</strong></div>
        <p class="card__text">A drupal 8 website design with materialize css and paragraphs module. <strong>Completed</strong></p>
        <a class="button" href="https://dev-drupal-materialize.pantheonsite.io/" target="_blank">Website</a>
        <a class="button" href="#" target="_blank">Github</a>
      </div>
    </div>
  </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--drupal1"></div>
        <div class="card__content">
          <div class="card__title"><strong>Drupal 8 + Gatsby</strong></div>
          <p class="card__text">A website using Drupal as a backend and Gatsby as a frontend. <strong>Complete</strong></p>
          <a class="button" href="https://drupal8-gatsby-example.netlify.com/" target="_blank">Website</a>
          <a class="button" href="https://github.com/ABE1112/Drupal-Gatsby-example" target="_blank">Github</a>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--wordpress"></div>
        <div class="card__content">
          <div class="card__title"><strong>Wordpress + Gatsby</strong></div>
          <p class="card__text">A website using Wordpress as a backend and Gatsby as a frontend <strong>Coming soon....</strong></p>
          <a class="button" href="#" target="_blank">Website</a>
          <a class="button" href="#" target="_blank">Github</a>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--symfony"></div>
        <div class="card__content">
          <div class="card__title"><strong>Symfony 4</strong></div>
          <p class="card__text">A simple Symfony 4 CRUD application using a database <strong>Coming soon....</strong></p>
          <a class="button" href="#" target="_blank">Website</a>
          <a class="button" href="#" target="_blank">Github</a>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--react"></div>
        <div class="card__content">
          <div class="card__title"><strong>Drupal 8 + React</strong></div>
          <p class="card__text">A website using Drupal as a backend and React as a frontend <strong>Coming soon....</strong></p>
          <a class="button" href="#" target="_blank">Website</a>
          <a class="button" href="#" target="_blank">Github</a>
        </div>
      </div>
    </li>

    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--react--native"></div>
        <div class="card__content">
          <div class="card__title"><strong>Drupal 8 + React Native</strong></div>
          <p class="card__text">A website using Drupal 8 and React Native to showcase mobile app <strong>Coming soon....</strong></p>
          <a class="button" href="#" target="_blank">Website</a>
          <a class="button" href="#" target="_blank">Github</a>
        </div>
      </div>
    </li>
  </ul>


        </article>
       </main>

      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Portfolio;
