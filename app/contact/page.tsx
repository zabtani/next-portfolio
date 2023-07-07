import PageContent from '../components/UI/pageContent';
import PageHeading from '../components/UI/pageHeadeing';
import Paragraph from '../components/UI/paragraph';
import EmailButton from '../components/contactButtons/emailButton';
import LinkdenButton from '../components/contactButtons/linkdenButton';
import WhatsAppButton from '../components/contactButtons/whatsappButton';
import ContacftForm from '../components/contactForm';
import { PropsWithChildren } from 'react';
const Contact = () => {
  return (
    <PageContent>
      <PageHeading>Contact</PageHeading>
      <div className="flex flex-col self-center">
        <Paragraph variant="div" classNames="mb-4">
          <div className="button-group  flex flex-wrap  w-full gap-3">
            <ButtonWrapper text="0525206108">
              <WhatsAppButton />
            </ButtonWrapper>
            <ButtonWrapper text="zabtani@gmail.com">
              <EmailButton />
            </ButtonWrapper>
            <ButtonWrapper text="omer zabtani">
              <LinkdenButton />
            </ButtonWrapper>
          </div>
          <p className="ml-1 mt-4">
            i will be happy to present mysself personally, or...you can do it via the form below.
          </p>
        </Paragraph>
        <div className="self-center w-3/5">
          <ContacftForm />
        </div>
      </div>
    </PageContent>
  );
};
export default Contact;

const ButtonWrapper = ({ children, text }: PropsWithChildren & { text: string }) => (
  <div className="flex text-lg">
    {children}
    <span className="ml-2 self-center">{text}</span>
  </div>
);
