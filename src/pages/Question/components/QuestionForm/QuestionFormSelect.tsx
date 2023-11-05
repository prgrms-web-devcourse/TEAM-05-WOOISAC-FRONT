import QuestionFormSelectItem from './QuestionFormSelectItem';
import useQuestionForm from '~/pages/Question/hooks/useQuestionForm';

/** @todo - 내가 직성한 값이 있는 경우 button 보이지 않거나 or 수정 버튼 보일 수 있도록 하기 */
const QuestionFormSelect = () => {
  const { userAnswer, answers, handleSubmitUserAnswer } = useQuestionForm();

  return (
    <>
      <div className="my-3 flex flex-col gap-3 lg:flex-row">
        {answers.map((answer, index) => {
          return (
            answer && (
              <QuestionFormSelectItem
                key={index}
                itemIndex={index + 1}
                answer={answer}
              />
            )
          );
        })}
      </div>
      <div className="flex w-full justify-end">
        <button
          disabled={userAnswer === -1}
          onClick={handleSubmitUserAnswer}
          className="btn-small btn-primary w-full rounded-xl hover:border-none hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-300"
        >
          결정
        </button>
      </div>
    </>
  );
};

export default QuestionFormSelect;
