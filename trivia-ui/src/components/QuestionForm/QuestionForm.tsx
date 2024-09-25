import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { QuestionFormData, schema } from "./schema";

interface QuestionFormProps {
  // onSubmit: () => unknown;
  answers: string[];
  question: string;
}

const QuestionForm = ( { answers, question }: QuestionFormProps ) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuestionFormData>({ resolver: zodResolver(schema)})

  isSubmitSuccessful;

  return (
    <form>
      <p>{question}</p>
      <div>
        {answers.length === 0 ? (
          <p>Couldn't find any answers</p>
        ) : (
          answers.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))
        )}

      </div>
    </form>
  )
}

export default QuestionForm
