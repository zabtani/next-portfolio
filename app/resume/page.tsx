import PageHeading from '../UI/pageHeadeing';
import ResumePDF from '../components/resumePdf';
import Paragraph from '../UI/paragraph';
import PageContent from '../UI/pageContent';

const Resume = async () => {
  return (
    <PageContent>
      <PageHeading>Resume</PageHeading>
      <Paragraph classNames="self-center  w-[900px]">{text}</Paragraph>
      <ResumePDF />
    </PageContent>
  );
};
export default Resume;

const text =
  'Innovative, creative and enthusiastic. Great willingness and ambition to learn new skills and technologies. During my stay in Seattle I began to be fascinated by web programming and the world of high tech. I started coding by self learning and courses, and I continue to study on a daily basis. Currently looking for my first job.';
