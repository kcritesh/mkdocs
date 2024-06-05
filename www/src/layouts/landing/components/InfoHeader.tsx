/*
  InfoHeader Component

  This component is used to display a header with an informational message 
  at the top of the page. It accepts a message as a prop and displays it 
  within a styled header element.
*/

interface Props {
  // Props type definition
  message: string; // The message to be displayed in the header
}

const InfoHeader = ({ message }: Props) => {
  return (
    <div className="bg-primary-gradient">
      <div className="container mx-auto py-4">
        <h1 className="text-center text-white  text-[1rem]">{message}</h1>
      </div>
    </div>
  );
};

export default InfoHeader;
