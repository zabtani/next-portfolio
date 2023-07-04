import PageContent from '../UI/pageContent';
import PageHeading from '../UI/pageHeadeing';
import Paragraph from '../UI/paragraph';
import ContacftForm from '../components/contactForm';

const Contact = () => {
  return (
    <PageContent>
      <PageHeading>Contact</PageHeading>
      <div className="w-2/5 self-center">
        <Paragraph classNames="mb-4">
          Fill form below and i will get back to you. you can also contact me via zabtani@gmail.com, phone
          number 0525206108
        </Paragraph>
        <ContacftForm />
      </div>
    </PageContent>
  );
};

export default Contact;
