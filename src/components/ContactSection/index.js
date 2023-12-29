import { content } from '@/assets/data/content'
import { SectionContainer } from '../Layout/styles'
import { BodyText, Heading2 } from '../Text'
import ListBox from '../ListBox'

export default function ContactSection () {
  return (
    <SectionContainer id='contact-section'>
      <Heading2 id='contact-title'>{content.contact.title}</Heading2>
      <BodyText id='contact-text'>{content.contact.text}</BodyText>
      <ListBox
        id='contact-links'
        listId='contact-link'
        items={content.contact.items}
      />
    </SectionContainer>
  )
}
