import { useMutation } from '@tanstack/react-query';
import type { QuestionForm, code, links } from '~/types';
import apiClient from '~/api/apiClient';

export interface createQuestionFromResponse {
  body?: QuestionForm;
  code: code;
  links?: links;
}

export interface createFormParams {
  questionForm: QuestionForm;
}

const createForm = async ({ questionForm }: createFormParams) => {
  const subURL = 'questions/question-forms?';
  const params = `memberId=${1}&coupleId=${1}`;
  const URL = subURL + params;
  const response = await apiClient.post<createQuestionFromResponse>(
    URL,
    JSON.stringify(questionForm),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

const useCreateForm = () => {
  return useMutation({
    mutationFn: async (createFormParams: createFormParams) => {
      return createForm(createFormParams);
    },
  });
};

export default useCreateForm;