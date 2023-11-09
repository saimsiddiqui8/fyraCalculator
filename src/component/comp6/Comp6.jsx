import "./style.css";
import React from "react";
import img1 from "../../assets/comp6img1.png";
import img2 from "../../assets/comp6img2.png";
import img3 from "../../assets/comp6img3.png";
import img4 from "../../assets/comp6img4.png";
import img5 from "../../assets/comp6img5.png";
import { Popover, } from "antd";
import { Link, useNavigate } from 'react-router-dom';


const content1 = (
  <div id="div1" className="container overflow-hidden img1-bg">
    <div className="row">
      <div className="col-12">
        <p className="img1-h">Manuscript Editing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Editing: </span> Thorough review and
            improvement of the manuscript's content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Proofreading: </span> A final check to
            correct grammar, spelling, and punctuation errors.
          </li>
        </ul>
        <p className="img1-h"> Design Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Book Cover Design: </span> Get a book
            cover design for your book according your requirement
          </li>
        </ul>
        <p className="img1-h"> Formatting Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Formatting: </span> Arranging and
            styling the content.
          </li>
          <li>
            <span className="img1-span"> Typesetting: </span> Setting the text
            in an aesthetically pleasing way.
          </li>
          <li>
            <span className="img1-span"> Layout Adjustment: </span> Ensuring the
            layout is visually appealing and consistent.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              FAdapting Global Publishing Standards:{" "}
            </span>{" "}
            Making sure the book meets industry standards.
          </li>
          <li>
            <span className="img1-span"> eBook & Paperback Format: </span>{" "}
            Preparing your book for both digital and print formats.
          </li>
        </ul>
        <p className="img1-h"> Marketing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> ISBN Registration: </span> Acquiring a
            unique identifier for your book.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Publication on Amazon, Kindle, and Barnes & Noble:{" "}
            </span>{" "}
            Making your book available on these popular platforms.
          </li>
        </ul>
        <p className="img1-h"> Author Support</p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Unlimited Revisions: </span> The option
            to make as many changes as necessary to your book.
          </li>
          <li>
            <span className="img1-span"> Dedicated Project Manager: </span> A
            specific point of contact to oversee your publishing process.
          </li>
          <li>
            <span className="img1-span"> Dedicated Team: </span> A group of
            professionals working on your project.
          </li>
          <li>
            <span className="img1-span"> Money Back Guarantee: </span> Assurance
            of a refund if you're not satisfied.
          </li>
          <li>
            <span className="img1-span"> No Hidden Charges: </span> Transparency
            in pricing with no unexpected fees.
          </li>
          <li>
            <span className="img1-span"> 100% Royalty Free: </span> You retain
            all the earnings from book sales.
          </li>
          <li>
            <span className="img1-span"> 100% Satisfaction Guaranteed: </span>{" "}
            Ensures you're happy with the final result.
          </li>
          <li>
            <span className="img1-span"> 100% Ownership Right: </span> You have
            complete ownership of your book.
          </li>
          <li>
            <span className="img1-span"> 100% Copyrights: </span> All copyright
            rights for your work are yours to keep.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
const content2 = (
  <div id="div1" className="container overflow-hidden img1-bg">
    <div className="row">
      <div className="col-12">
        <p className="img1-h">Manuscript Editing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Editing: </span> Thorough review and
            improvement of the manuscript's content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Proofreading: </span> Final check to
            correct grammar, spelling, and punctuation.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Copy Editing: </span> Refinement of the
            text for clarity and coherence.
          </li>
        </ul>
        <p className="img1-h"> Formatting Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Formatting: </span> Arranging and
            styling the content.
          </li>
          <li>
            <span className="img1-span"> Typesetting: </span> Setting the text
            in an aesthetically pleasing way.
          </li>
          <li>
            <span className="img1-span"> Layout Adjustment: </span> Ensuring the
            layout is visually appealing and consistent.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              FAdapting Global Publishing Standards:{" "}
            </span>{" "}
            Making sure the book meets industry standards.
          </li>
          <li>
            <span className="img1-span"> eBook & Paperback Format: </span>{" "}
            Preparing the book for both digital and print versions.
          </li>
        </ul>
        <p className="img1-h"> Design Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> 3D Book Cover: </span> Creation of a 3D
            book cover design to attract readers.
          </li>
        </ul>
        <p className="img1-h"> Marketing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> 5 Author Copies: </span> Copies of your
            book for personal use or giveaways.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Publication on Amazon, Kindle, Ingram Sparks, Apple Book, Google
              Books, Barnes & Noble, and KOBO:{" "}
            </span>{" "}
            Making your book available on these popular platforms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              ISBN Registration + BISAC Codes:{" "}
            </span>{" "}
            Assigning a unique identifier and genre classification.
          </li>
        </ul>
        <p className="img1-h"> Author Support</p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Unlimited Revisions: </span> The option
            to make as many changes as necessary to your book.
          </li>
          <li>
            <span className="img1-span"> Dedicated Project Manager: </span> A
            specific point of contact to oversee your publishing process.
          </li>
          <li>
            <span className="img1-span"> Dedicated Team: </span> A group of
            professionals working on your project.
          </li>
          <li>
            <span className="img1-span"> Money Back Guarantee: </span> Assurance
            of a refund if you're not satisfied.
          </li>
          <li>
            <span className="img1-span"> No Hidden Charges: </span> Transparency
            in pricing with no unexpected fees.
          </li>
          <li>
            <span className="img1-span"> 100% Royalty Free: </span> You retain
            all the earnings from book sales.
          </li>
          <li>
            <span className="img1-span"> 100% Satisfaction Guaranteed: </span>{" "}
            Ensures you're happy with the final result.
          </li>
          <li>
            <span className="img1-span"> 100% Ownership Right: </span> You have
            complete ownership of your book.
          </li>
          <li>
            <span className="img1-span"> 100% Copyrights: </span> All copyright
            rights for your work are yours to keep.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
const content3 = (
  <div id="div1" className="container overflow-hidden img1-bg">
    <div className="row">
      <div className="col-12">
        <p className="img1-h">Manuscript Editing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Editing: </span> Comprehensive review
            and enhancement of the manuscript's content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Proofreading: </span> Final examination
            to correct grammar, spelling, and punctuation errors.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Fact Checking: </span> Verification of
            factual accuracy in the manuscript.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Copyediting: </span> Refinement of text
            for clarity, consistency, and style.
          </li>
        </ul>
        <p className="img1-h"> Formatting Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Formatting: </span> Organizing and
            styling the content for a professional appearance.
          </li>
          <li>
            <span className="img1-span"> Typesetting: </span> Setting the text
            in an aesthetically pleasing manner.
          </li>
          <li>
            <span className="img1-span"> Layout Adjustment: </span> Ensuring the
            layout is visually appealing and consistent.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Adapting Global Publishing Standards:{" "}
            </span>{" "}
            Aligning the book with industry publishing norms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              eBook, Paperback, and Hardcover Formats:{" "}
            </span>{" "}
            Preparing the book for digital, print, and hardcover versions.
          </li>
        </ul>
        <p className="img1-h"> Design Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span">3D Book Cover: </span> Creation of a 3D
            book cover design to attract readers 30 Second Video Trailer: A
            30-second book video trailer to engage and inform potential readers.
          </li>
        </ul>
        <p className="img1-h"> Marketing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> 3 to 6 Page Author Website: </span>{" "}
            Development of an author website to showcase your work and engage
            with your audience.
          </li>
          <li>
            <span className="img1-span"> 10 Author Copies: </span> Copies of
            your book for personal use or promotional purposes.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              30-60 Seconds Book Video Trailer:{" "}
            </span>{" "}
            A longer video to engage and inform potential readers.
          </li>
          <li>
            {" "}
            Publication on Amazon Kindle, Barnes & Noble, KOBO, Apple Books,
            Google Books, Scribd, Bakers & Taylors, Chapters/Indigo.
          </li>
          <li>
            <span className="img1-span"> IngramSpark:</span> Making your book
            available on a wide range of popular platforms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              ISBN Registration + BISAC Codes:{" "}
            </span>{" "}
            Assigning a unique identifier and genre classification for your
            book.
          </li>
        </ul>
        <p className="img1-h"> Author Support</p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Unlimited Revisions: </span> The
            flexibility to make numerous changes to your book.
          </li>
          <li>
            <span className="img1-span"> Dedicated Project Manager: </span> A
            specific point of contact to oversee your project.
          </li>
          <li>
            <span className="img1-span"> Dedicated Team: </span> A group of
            professionals working on your book.
          </li>
          <li>
            <span className="img1-span"> Access to Author Portal: </span> A
            platform for author-related resources.
          </li>
          <li>
            <span className="img1-span"> Money Back Guarantee: </span> Assurance
            of a refund if you're not satisfied.
          </li>
          <li>
            <span className="img1-span"> No Hidden Charges: </span> Transparent
            pricing with no unexpected fees.
          </li>
          <li>
            <span className="img1-span"> 100% Royalty Free: </span> You keep all
            the earnings from book sales.
          </li>
          <li>
            <span className="img1-span"> 100% Satisfaction Guaranteed: </span>{" "}
            Ensures you're happy with the final result.
          </li>
          <li>
            <span className="img1-span"> 100% Ownership Right: </span> You have
            complete ownership of your book.
          </li>
          <li>
            <span className="img1-span"> 100% Copyrights: </span> You retain all
            copyright rights for your work.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
const content4 = (
  <div id="div1" className="container overflow-hidden img1-bg">
    <div className="row">
      <div className="col-12">
        <p className="img1-h">Manuscript Editing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Editing: </span> Comprehensive review
            and enhancement of the manuscript's content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Proofreading: </span> Final examination
            to correct grammar, spelling, and punctuation errors.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Fact Checking: </span> Verification of
            factual accuracy in the manuscript.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Copyediting: </span> Refinement of text
            for clarity, consistency, and style.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Substantive Editing: </span> In-depth
            editing to improve content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Author’s Bio: </span> Crafting the
            author's biography.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Author’s Note </span> Inclusion of the
            author's personal note or message.
          </li>
        </ul>
        <p className="img1-h"> Design Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Cover Design: </span> Creating an
            attractive book cover.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Interior Design and Page Layout:{" "}
            </span>{" "}
            Designing the layout and styling of interior pages.
          </li>
        </ul>
        <p className="img1-h"> Formatting Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Multiple Book Formats: </span>{" "}
            Preparing the book for various formats.
          </li>
          <li>
            <span className="img1-span"> Layout Adjustment: </span> Ensuring the
            layout is visually appealing and consistent.
          </li>
          <li>
            <span className="img1-span"> Typesetting: </span> Setting the text
            in an aesthetically pleasing manner.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Adapting Global Publishing Standards:{" "}
            </span>{" "}
            Aligning the book with industry publishing norms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              eBook, Paperback, and Hardcover Formats:{" "}
            </span>{" "}
            Preparing the book for digital, print, and hardcover versions.
          </li>
        </ul>

        <p className="img1-h"> Marketing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> 3 to 6 Page Author Website:</span>{" "}
            Developing an author website.
          </li>
          <li>
            <span className="img1-span"> 1-Year Domain & Hosting: </span> Domain
            and hosting services for your website.
          </li>
          <li>
            <span className="img1-span"> 30 Second Book Video Trailer: </span> A
            short video to engage potential readers.
          </li>
          <li>
            <span className="img1-span"> 20 Author Copies: </span> Copies of
            your book for personal use or promotional purposes.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Publication on Amazon Kindle, Barnes & Noble, KOBO, Apple Books,
              Google Books, Scribd, Bakers & Taylors, Chapters/Indigo,
              IngramSpark, Waterstones, Overdrive, Christian Book Publications,
              +5 More:{" "}
            </span>{" "}
            Expansive distribution of your book on multiple platforms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              ISBN Registration + BISAC Codes:{" "}
            </span>{" "}
            Assigning a unique identifier and genre classification for your
            book.
          </li>
          <li>
            <span className="img1-span"> Image Insertion - B&W: </span>{" "}
            Inclusion of black and white images.
          </li>
          <li>
            <span className="img1-span"> Blurb Edit: </span> Enhancement of the
            book's promotional blurb.
          </li>
          <li>
            <span className="img1-span"> 6 Months Book Marketing: </span>{" "}
            Extended marketing support for a six months.
          </li>
        </ul>
        <p className="img1-h"> Author Support</p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Unlimited Revisions: </span> The
            flexibility to make numerous changes to your book.
          </li>
          <li>
            <span className="img1-span"> Dedicated Project Manager: </span> A
            specific point of contact to oversee your project.
          </li>
          <li>
            <span className="img1-span"> Dedicated Team: </span> A group of
            professionals working on your book.
          </li>
          <li>
            <span className="img1-span"> Access to Author Portal: </span> A
            platform for author-related resources.
          </li>
          <li>
            <span className="img1-span"> Money Back Guarantee: </span> Assurance
            of a refund if you're not satisfied.
          </li>
          <li>
            <span className="img1-span"> No Hidden Charges: </span> Transparent
            pricing with no unexpected fees.
          </li>
          <li>
            <span className="img1-span"> 100% Royalty Free: </span> You keep all
            the earnings from book sales.
          </li>
          <li>
            <span className="img1-span"> 100% Satisfaction Guaranteed: </span>{" "}
            Ensures you're happy with the final result.
          </li>
          <li>
            <span className="img1-span"> 100% Ownership Right: </span> You have
            complete ownership of your book.
          </li>
          <li>
            <span className="img1-span"> 100% Copyrights: </span> You retain all
            copyright rights for your work.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
const content5 = (
  <div id="div1" className="container overflow-hidden img1-bg">
    <div className="row">
      <div className="col-12">
        <p className="img1-h">Manuscript Editing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Editing: </span> Comprehensive review
            and enhancement of the manuscript's content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Proofreading: </span> Final examination
            to correct grammar, spelling, and punctuation errors.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Fact Checking: </span> Verification of
            factual accuracy in the manuscript.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Copyediting: </span> Refinement of text
            for clarity, consistency, and style.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Substantive Editing: </span> In-depth
            editing to improve content and structure.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Author’s Bio: </span> Crafting the
            author's biography.
          </li>
          <li>
            {" "}
            <span className="img1-span"> Author’s Note </span> Inclusion of the
            author's personal note or message.
          </li>
        </ul>
        <p className="img1-h"> Design Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Cover Design: </span> Creating an
            attractive book cover.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Interior Design and Page Layout:{" "}
            </span>{" "}
            Designing the layout and styling of interior pages.
          </li>
        </ul>
        <p className="img1-h"> Formatting Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Multiple Book Formats: </span>{" "}
            Preparing the book for various formats.
          </li>
          <li>
            <span className="img1-span"> Layout Adjustment: </span> Ensuring the
            layout is visually appealing and consistent.
          </li>
          <li>
            <span className="img1-span"> Typesetting: </span> Setting the text
            in an aesthetically pleasing manner.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Adapting Global Publishing Standards:{" "}
            </span>{" "}
            Aligning the book with industry publishing norms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              eBook, Paperback, and Hardcover Formats:{" "}
            </span>{" "}
            Preparing the book for digital, print, and hardcover versions.
          </li>
        </ul>

        <p className="img1-h"> Marketing Services </p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Complete Author Website: </span>{" "}
            Development of a comprehensive author website.
          </li>
          <li>
            <span className="img1-span">3-Year Domain & Hosting: </span> Domain
            and hosting services for your website.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              30-60 Seconds Book Video Trailer:{" "}
            </span>{" "}
            A longer video to engage and inform potential readers.
          </li>
          <li>
            <span className="img1-span"> Up to 40 Author Copies: </span> A
            generous number of copies for personal use or promotional purposes.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              Publication on Amazon Kindle, Barnes & Noble, KOBO, Apple Books,
              Google Books, Scribd, Bakers & Taylors, Chapters/Indigo,
              IngramSpark, Waterstones, Overdrive, Christian Book Publications,
              +35 More:{" "}
            </span>{" "}
            Widespread distribution on numerous platforms.
          </li>
          <li>
            <span className="img1-span">
              {" "}
              ISBN Registration + BISAC Codes:{" "}
            </span>{" "}
            Assigning a unique identifier and genre classification for your
            book.
          </li>
          <li>
            <span className="img1-span"> Image Insertion - B&W: </span>{" "}
            Inclusion of black and white images.
          </li>
          <li>
            <span className="img1-span"> Blurb Edit: </span> Enhancement of the
            book's promotional blurb.
          </li>
          <li>
            <span className="img1-span"> 1-Year Book Marketing: </span> Extended
            marketing support for a year.
          </li>
        </ul>
        <p className="img1-h"> Author Support</p>
        <ul className="img1-para">
          <li>
            <span className="img1-span"> Unlimited Revisions: </span> The
            flexibility to make numerous changes to your book.
          </li>
          <li>
            <span className="img1-span"> Dedicated Project Manager: </span> A
            specific point of contact to oversee your project.
          </li>
          <li>
            <span className="img1-span"> Dedicated Team: </span> A group of
            professionals working on your book.
          </li>
          <li>
            <span className="img1-span"> Access to Author Portal: </span> A
            platform for author-related resources.
          </li>
          <li>
            <span className="img1-span"> Money Back Guarantee: </span> Assurance
            of a refund if you're not satisfied.
          </li>
          <li>
            <span className="img1-span"> No Hidden Charges: </span> Transparent
            pricing with no unexpected fees.
          </li>
          <li>
            <span className="img1-span"> 100% Royalty Free: </span> You keep all
            the earnings from book sales.
          </li>
          <li>
            <span className="img1-span"> 100% Satisfaction Guaranteed: </span>{" "}
            Ensures you're happy with the final result.
          </li>
          <li>
            <span className="img1-span"> 100% Ownership Right: </span> You have
            complete ownership of your book.
          </li>
          <li>
            <span className="img1-span"> 100% Copyrights: </span> You retain all
            copyright rights for your work.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

function Comp6() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }

  return (
    <section className="comp6-bg">
      <div className="container overflow-hidden  py-5">
        <h2 className="comp6-h2 mt-5"> Unbox the excitement with our Pakages</h2>
        <div className="container">
          <div className="row  d-flex justify-content-center  my-5">
            <div className="col-lg-3 col-md-4 col-12 text-center mt-5 mt-md-0 mt-lg-0">
              <Popover content={content1} trigger="click">
                <img className="imgs w-50" src={img1} alt="" />
              </Popover>
            </div>
            <div className="col-lg-3 col-md-4 col-12 text-center mt-5 mt-md-0 mt-lg-0">
              <Popover content={content2} trigger="click">
                <img className="imgs w-50" src={img2} alt="" />
              </Popover>
            </div>
            <div className="col-lg-3 col-md-4 col-12 text-center mt-5 mt-md-0 mt-lg-0">
              <Popover content={content3} trigger="click">
                <img className="imgs w-50" src={img3} alt="" />
              </Popover>
            </div>
          </div>
          <div className="row  d-flex justify-content-center  my-5">
            <div className="col-lg-3 col-md-4 col-12 text-center mt-5">
              <Popover content={content4} trigger="click">
                <img className="imgs w-50" src={img4} alt="" />
              </Popover>
            </div>
            <div className="col-lg-3 col-md-4 col-12 text-center mt-5">
              <Popover content={content5} trigger="click">
                <img className="imgs w-50" src={img5} alt="" />
              </Popover>
            </div>
          </div>
          <div className="col-12 text-center">
            <button className="comp6-btn" onClick={handleClick}>Get A Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comp6;
