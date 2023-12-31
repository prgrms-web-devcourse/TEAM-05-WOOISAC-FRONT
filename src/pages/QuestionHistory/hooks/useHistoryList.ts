import { useState, useEffect } from 'react';
import type { QuestionHistoryPreview } from '~/types';
import useObserve from '~/hooks/useObserve';
import useGetQuestionHistory from '~/services/question/useGetQuestionHistory';

const useHistoryList = () => {
  const [histories, setHistories] = useState<QuestionHistoryPreview[]>([]);
  const [lastQuestionId, setLastQuestionId] = useState<number | null>(null);
  const { data: histoiresResponse } = useGetQuestionHistory({
    lastQuestionId,
  });
  const [observe] = useObserve(() => {
    if (histories.length === 0) return;

    const lastChild = histories[histories.length - 1];
    const { questionId } = lastChild;
    setLastQuestionId(questionId);
  });

  useEffect(() => {
    if (histoiresResponse === undefined) return;
    const { answeredQuestions } = histoiresResponse;

    if (lastQuestionId === null) {
      setHistories(answeredQuestions);
    } else {
      setHistories((currHistories) => {
        return [...currHistories, ...answeredQuestions];
      });
    }
  }, [histoiresResponse]);

  useEffect(() => {
    if (!histoiresResponse || histoiresResponse.answeredQuestions.length < 10) {
      return;
    }

    const lastQuestion = histories[histories.length - 1];

    if (lastQuestion) {
      const { questionId } = lastQuestion;
      const lastChild = document.getElementById(String(questionId));
      if (lastChild) {
        observe(lastChild);
      }
    }
  }, [histories]);

  return {
    histories,
  };
};

export default useHistoryList;
