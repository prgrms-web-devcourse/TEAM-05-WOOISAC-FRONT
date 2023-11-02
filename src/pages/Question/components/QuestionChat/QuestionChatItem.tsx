interface QuestionChatItemProps {
  type: 'start' | 'end';
  answerStatus: boolean;
  message?: string;
  author: string;
}

const QuestionChatItem = ({
  type,
  answerStatus,
  author,
  message = '답변을 기다리는 중이에요!',
}: QuestionChatItemProps) => {
  const chatType = type === 'start' ? 'chat-start' : 'chat-end';
  message = answerStatus === false ? '답변을 기다리는 중이에요!' : message;

  return (
    <div className={`chat ${chatType} my-3`}>
      <div className="avatar chat-image">
        <div className="avatar-small rounded-full lg:avatar-medium">
          <img src="https://source.unsplash.com/random/" />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{author}</time>
      </div>
      <div className="font-medium chat-bubble bg-grey-100 text-base-black lg:px-10 lg:py-4">
        {message}
      </div>
    </div>
  );
};

export default QuestionChatItem;