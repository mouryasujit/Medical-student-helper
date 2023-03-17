import React from "react";

function Footer() {
  return (
    <div className="footer my-3 bg-gray-100 py-4 cursor-pointer">
      <div className="container w-4/5 flex flex-col mx-auto">
        <div className="top flex justify-between">
          <div className="item flex flex-col space-y-3">
            <h2 className="font-bold text-md py-2">Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item flex flex-col space-y-3">
            <h2 className="font-bold text-md py-2">About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item flex flex-col space-y-3">
            <h2 className="font-bold text-md py-2">Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Job-a-Thon</span>
            <span>Buying on Job-a-Thon</span>
          </div>
          <div className="item flex flex-col space-y-3">
            <h2 className="font-bold text-md py-2">Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item flex flex-col space-y-3">
            <h2 className="font-bold text-md py-2">More From Job-a-Thon</h2>
            <span>Job-a-Thon Business</span>
            <span>Job-a-Thon Pro</span>
            <span>Job-a-Thon Logo Maker</span>
            <span>Job-a-Thon Guides</span>
            <span>Get Inspired</span>
            <span>Job-a-Thon Select</span>
            <span>ClearVoice</span>
            <span>Job-a-Thon Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr className="font-extrabold text-3xl text-black" />
        <div className="bottom flex justify-between items-center py-3">
          <div className="left flex justify-between items-center">
            <h2 className="font-bold text-md py-2 pr-2 text-2xl">Job-a-Thon</h2>
            <span>© Job-a-Thon International Ltd. 2023</span>
          </div>
          <div className="right flex items-center space-x-4">
            <div className="social flex space-x-3">
              <img src="/img/twitter.png" alt="" className="h-6" />
              <img src="/img/facebook.png" alt="" className="h-6" />
              <img src="/img/linkedin.png" alt="" className="h-6" />
              <img src="/img/pinterest.png" alt="" className="h-6" />
              <img src="/img/instagram.png" alt="" className="h-6" />
            </div>
            <div className="link flex items-center space-x-2">
              <img src="/img/language.png" alt="" className="h-6" />
              <span>English</span>
            </div>
            <div className="link flex items-center space-x-2">
              <img src="/img/coin.png" alt="" className="h-6" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
