/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Privacy.css';

class Privacy extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h3>Terms & Conditions</h3>
          <p>
            This is my personal website written and edited by me.
            Your use of this website, in any and all forms, constitutes
            an acceptance of these terms and policies. This page is reviewed
            and revised from time to time.
          </p>
          <h4>Privacy Policy</h4>
          <h6>Last updated: 6 Dec 2016</h6>
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully
            before using the <a href="https://cpas.herokuapp.com/">https://cpas.herokuapp.com/</a>
            website.
            cpas.herokuapp.com (“us”, “we”, or “our”) operates
            <a href="https://cpas.herokuapp.com/"> https://cpas.herokuapp.com/</a>
            (the “Site”). This page informs you of our policies regarding the collection, use and
            disclosure of Personal Information we receive from users of the Site.
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and
            compliance
            with
            these Terms. These Terms apply to all visitors, users and others who access or use the
            Service.
            By accessing or using the Service you agree to be bound by these Terms. If you disagree
            with any part of the terms then you may not access the Service.
          </p>

          <h4>Information Collection And Use</h4>
          <p>
            While using our Site, we may ask you to provide us with certain personally identifiable
            information
            that can be used to contact or identify you. Personally identifiable information may
            include,
            but is not limited to, your name, email address, postal address and phone number
            (“Personal Information”).
          </p>
          <p>
            Site may use Google Analytics Demographics and Interest Reporting and Google Analytics
            Remarketing.
            Info collected using this feature will not be sold or shared with any third-party.
          </p>
          <p>
            Using the Ads Settings, visitors can opt-out of Google Analytics for Display Advertising
            and customize Google Display Network ads.
          </p>

          <h4>Cookies and Web Beacons</h4>
          <p>
            Cookies are files with small amount of data, which may include an anonymous unique
            identifier. Cookies are sent to your browser from a web site and stored on your
            computer’s hard drive.
          </p>
          <p>
            Like many sites, we use “cookies” to collect information. You can instruct your browser
            to
            refuse all cookies or to indicate when a cookie is being sent. However, if you do not
            accept
            cookies, you may not be able to use some portions of our Site.
          </p>


          <h4>Security</h4>
          <p>
            The security of your Personal Information is important to us, but remember that no
            method of transmission over the Internet, or method of electronic storage, is 100%
            secure. While we strive to use commercially acceptable means to protect your Personal
            Information, we cannot guarantee its absolute security. </p>
          <h4>Links To Other Web Sites</h4>
          <p>
            Our Site may contain links to other sites that are not operated by us. If you click on a
            third party link, you will be directed to that third party’s site. We strongly advise
            you
            to
            review the Privacy Policy of every site you visit.
          </p>
          <p>
            cpas.herokuapp.com has no control over, and assumes no responsibility for, the content,
            privacy policies,
            or practices of any third party sites or services.
          </p>
          <h3>License</h3>
          <p>
            All original content (e.g. articles, blog posts, illustrations, artwork, and
            photographs) available on cpas.herokuapp.com is released under a
            <a target="_blank"
               href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US"
            > Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License </a>
            unless otherwise noted.
            Basically this means you are free to share, transmit, distribute, alter, transform, and
            build on my work just as long as you don’t use it for commercial purposes without our
            prior written consent.
          </p>

          <h4>Contact me</h4>
          <p>
            If you have any questions about this Privacy Policy, please
            <a href="mailto:paschalidi@outlook.com" target="_blank"> contact me
            </a>.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Privacy);
