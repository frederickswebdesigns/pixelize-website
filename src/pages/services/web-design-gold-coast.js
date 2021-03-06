import React from "react"
import SEO from "../../components/seo"
import TextContainer from "../../components/Containers/TextContainer"
import DevelopmentIllustration from "../../components/GatsbyImages/DevelopmentIllustration"

import Layout from "../../components/layout"
import GatsbyIllustration from "../../components/GatsbyImages/GatsbyIllustration"
import WordPressIllustration from "../../components/GatsbyImages/WordPressIllustration"
import NavigationWidget from "../../components/Navigation/NavigationWidget"

const WebPage = () => (
  <Layout>
    <SEO
      title="Gold Coast Web Design"
      description="We create unique, blazing fast, responsive websites that are custom designed to perform and capture your audience."
    />

    <TextContainer>
      <DevelopmentIllustration />
      <h1>Gold Coast Web Design & Development</h1>
      <p>
        With the human condition of ever-shortening intention spans, we
        understand the importance of captivating your audience within
        milliseconds.
      </p>

      <p>
        That is why our in-house team of Gold Coast web designers and web
        developers focus their creative juice on speed, beauty and responsive
        design. With these core principles in mind, we hand-craft you a website
        that will captivate your audience through blazing fast load times and a
        stunning visual experience
      </p>
      <p>
        A website gets your business online, but a great website helps your
        business achieve its goals and reach its full potential.
      </p>

      <h2>Responsive Web Design</h2>

      <p>
        How we navigate the internet has changed. Thanks to the technological
        revolution, we get to have incredible little supercomputers (aka
        smartphones) in our pockets, purses and yes, even in our fanny packs.
        But this means the web design game has changed as well.
      </p>

      <p>
        With more and more people searching for services and products on their
        phones and tablets, the importance of having a beautiful responsive web
        design has become a “must-have”.
      </p>

      <p>
        Our Gold Coast web designers take your visitor on a smooth and seamless
        journey throughout your website. Through thoughtful page layouts, colour
        choices and responsive design, our creative web designers engage your
        audience by making it a personal experience. Because getting a visitor
        on your page is nice, but captivating them to stay longer and keep
        coming back for more, takes a unique design touch.
      </p>

      <h2>Web Development</h2>
      <p>
        This is the most important part, think of Web Development as the “meat
        and potatoes” of your website and our Gold Coast web developers offer
        you a couple different options!
      </p>
      <h3>WordPress Development</h3>
      <WordPressIllustration />

      <p>
        With nearly 35% of all websites being powered through WordPress, it goes
        without saying, they have been around for a long time.
      </p>
      <p>
        However, without getting all “technical”, many WordPress websites
        experience long loading times due to the many hoops that information
        must jump through in order to reach the server and then back to your
        computer.{" "}
      </p>
      <p>
        With the average website visitor not willing to wait longer than 3
        seconds for your pages to load, this can oppose a problem, but if made
        with the best practices in mind, they can not only be fast, but they can
        also offer an array of benefits, such as, easy e-commerce integration
        and a content management system (CMS) that is simple to use.
      </p>
      <p>
        Whether you are after a custom WordPress template or a simple redo, our
        Gold Coast web developers understand the “ins and outs” of WordPress,
        which means, we find the best solutions to make your visitor’s
        experience on your website seamless and enjoyable.
      </p>
      <h3>Serverless Websites (Gatsby.js)</h3>
      <GatsbyIllustration />

      <p>
        There is tremendous value in the speed of your website, not only due to
        the importance of grasping the attention of your audience as soon as
        possible but also because it helps in assisting your sites SEO ranking.
        This is where Gatsby.js comes in.{" "}
      </p>

      <p>
        The best way to explain this serverless technology is to think of it as
        a 5-star buffet restaurant. All you have to do is simply grab the food
        you want and start eating, no ordering and no waiting. This is the same
        way Gatsby works, all of the pages on your website are “pre-cooked”, or
        in technical terms “pre-loaded”, so all you need to do is click the page
        you want to see, and bam…there it is!
      </p>
      <p>
        Through Gatsby.js, our Gold Coast web developers can hand-craft you a
        beautiful website like no other. With Gatsby’s unmatched loading times,
        seamless UI development, dynamic content and ability to boost your SEO
        rankings, it has proven itself to be the best way to future proof your
        website and best of all, no more dreaded loading wheel!
      </p>
      <NavigationWidget
        title1="More Services"
        title2="Get A Quote"
        link1="services"
        link2="web-design-quote"
      />
    </TextContainer>
  </Layout>
)
export default WebPage
