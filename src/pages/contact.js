import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import ListBox from '@/components/ListBox'
import { BodyText } from '@/components/Text'

export function getStaticProps () {
  const id = 'contact'
  const title = content.contact.title
  return { props: { id, title, showBack: true } }
}
export default function ContactPage () {
  return (
    <div>
      <BodyText id='contact-text'>{content.contact.text}</BodyText>
      <ListBox
        id='contact-links'
        listId='contact-link'
        items={content.contact.items}
      />
    </div>
  )
}

ContactPage.getLayout = getDefaultLayout
