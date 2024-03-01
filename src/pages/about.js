import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ImageSlider from '../components/imageSlider'
import DropdownText from '../components/dropdownText'

const About = ({ data }) => {
  const { aboutText, contact, dropdownFields, images, images2, mission } =
    data.contentfulAboutPage
  return (
    <Layout>
      <div
        className='about-mission'
        dangerouslySetInnerHTML={{ __html: mission.childMarkdownRemark.html }}
      ></div>
      <div className='about-carousel-container'>
        <ImageSlider images={images}></ImageSlider>
      </div>
      <div
        className='about-text'
        dangerouslySetInnerHTML={{ __html: aboutText.childMarkdownRemark.html }}
      ></div>
      <div className='about-dropdown-container'>
        {dropdownFields.map((text) => (
          <DropdownText text={text} key={text.id}></DropdownText>
        ))}
      </div>
      <div className='about-carousel-container'>
        <ImageSlider images={images2}></ImageSlider>
      </div>
      <div className='about-contact'>
        <p>Contact</p>{' '}
        <div className='about-contact-emails'>
          {contact.map((contact) => (
            <div key={contact.id}>
              <p>{contact.name}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
      contact {
        id
        name
        email
      }
      dropdownFields {
        id
        heading
        text {
          childMarkdownRemark {
            html
          }
        }
      }
      images {
        id
        imageCredit
        image {
          gatsbyImageData
          description
        }
      }
      images2 {
        id
        image {
          gatsbyImageData
          description
        }
        imageCredit
      }
      mission {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export const Head = () => <Seo title='About' />

export default About