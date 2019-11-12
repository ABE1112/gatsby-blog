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
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqGEB5g8kG8SbNSgBdR7VbbFew8hqk4VmbKD49WnR97IX7eIw&s);
  }
  .card__image--drupal1 {
    background-image: url(https://www.bounteous.com/sites/default/files/styles/default/public/insights/2018-11/previews/understanding_the_limitations_of_gatsby-source_drupal.png?itok=pEgpvxu3);
  }
  .card__image--wordpress {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVjl0FkIDMdXWrvGJ49Y34M5zW6xSDRH-3Ft8b-JHuO3Dj5JhGQ&s);
  }
  .card__image--react {
    background-image: url(https://i0.wp.com/2018.sanjose.wordcamp.org/files/2018/06/react.jpg?fit=1200%2C900&ssl=1);
  }
  .card__image--symfony {
    background-image: url(https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032013/symfony_black_01.png?itok=mh6RAYNa);
  }
  .card__image--laravel {
    background-image: url(https://www.secret-source.eu/wp-content/uploads/2017/11/Laravel-logo.jpg);
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
        <div class="card__title">Flex Grow</div>
        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
        <button class="btn btn--block card__btn">Website</button>
        <button class="btn btn--block card__btn">Github</button>
      </div>
    </div>
  </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--drupal1"></div>
        <div class="card__content">
          <div class="card__title">Flex Grow</div>
          <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
          <button class="btn btn--block card__btn">Website</button>
          <button class="btn btn--block card__btn">Github</button>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--wordpress"></div>
        <div class="card__content">
          <div class="card__title">Flex Basis</div>
          <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
          <button class="btn btn--block card__btn">Website</button>
          <button class="btn btn--block card__btn">Github</button>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--symfony"></div>
        <div class="card__content">
          <div class="card__title">Flex Basis</div>
          <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
          <button class="btn btn--block card__btn">Website</button>
          <button class="btn btn--block card__btn">Github</button>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--react"></div>
        <div class="card__content">
          <div class="card__title">Flex Basis</div>
          <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
          <button class="btn btn--block card__btn">Website</button>
          <button class="btn btn--block card__btn">Github</button>
        </div>
      </div>
    </li>
    <li class="cards__item">
      <div class="card">
        <div class="card__image card__image--laravel"></div>
        <div class="card__content">
          <div class="card__title">Flex Basis</div>
          <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
          <button class="btn btn--block card__btn">Website</button>
          <button class="btn btn--block card__btn">Github</button>
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
