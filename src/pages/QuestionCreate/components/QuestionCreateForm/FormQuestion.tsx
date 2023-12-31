import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';
import { Input } from '~/components/common';

const FormQuestion = () => {
  const { question, handleQuestionChange } = useQuestionCreateForm();

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">
        상대방에게 물어보고 싶은 질문이 있나요?{' '}
      </label>
      <Input
        value={question}
        onChange={handleQuestionChange}
        maxLength={100}
        required
        className="input-bottom border-grey-200  p-3 font-medium focus:outline-none"
        placeholder="질문은 최대 50자까지 작성 가능해요!"
      />
    </div>
  );
};

export default FormQuestion;
